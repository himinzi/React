import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';

function Review() {
    const params = useParams();

    const [review, setReview] = useState([]);

    const callAPI = async () => {
        const result = await axios.get(`http://192.168.0.10:8000/restaurant/review/${params.restNo}`);
        setReview(result.data);
    }
    console.log(review);

    /////////////////

    useEffect(() => {
        callAPI();
    }, []);


    const itemTemplate = (review, index) => {
        return (
            <div className="col-12" key={review.reveiw_no}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" width='50' height='50' src={review.review_img} alt='noImages' />
                    <span className="text-2xl font-bold text-900 p-5">{review.review_content}</span>
                    <span className="text-2xl font-bold text-900 float-right">{review.review_date}</span>
                    <div className="text-2xl font-bold text-900">닉네임 : {review.member_id}</div>
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <Rating value={review.review_cnt} readOnly cancel={false}></Rating>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;

        let list = items.map((review, index) => {
            return itemTemplate(review, index);
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };


    return (
        <>
            <div className="card">
                <DataView key={review} value={review} listTemplate={listTemplate} paginator rows={5} />
            </div>

        </>
    )
}

// const {kakao} = window;

// function Kakao() {
//     useEffect(()=>{
//         const container = document.getElementById('map');
//         const options = {
//             center : new Kakao.maps.LatLng(33.450701, 126.570667),
//             level :3
//         };
//         const map = new Kakao.maps.Map(container,options);
//     }, [])
//     return (
//         <div id='map' style={{
//             width: '500px',
//             height: '500px'
//         }}>
//         </div>
//     )
// }


function RestOne() {
    const params = useParams();

    const [restInfo, setRestInfo] = useState({});
    const [restMenu, setRestMenu] = useState([]);
    const [loading, setLoading] = useState(false);


    //callAPI
    const callAPI = async () => {
        setLoading(true);
        const result = await axios.get(`http://192.168.0.10:8000/restaurant/${params.restNo}`);
        setLoading(false);
        setRestInfo(result.data[0].rest[0]);
        setRestMenu(result.data[1].restImg);
        console.log(result.data[0].rest);

    }
    console.log(restInfo);
    console.log(restMenu);

    useEffect(() => {
        callAPI();
    }, []);

    // const {id, title, body, dt, writer} = form;

    if (loading) return <div className="position-absolute top-50 start-50"><h1>로딩중.....</h1></div>


    return (
        <>
            <Card style={{ width: '65rem' }}>
                <Card.Img variant="top" src={restInfo.thumbnail} width='150' height='300' />
                <Card.Body>
                    <Card.Title>{restInfo.rest_name}</Card.Title>
                    <Card.Text>
                        {restInfo.rest_desc}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>메뉴 타입 : {restInfo.menu_type}</ListGroup.Item>
                    {/* 위치 링크 해서 지도 api 해도 될듯  */}
                    <ListGroup.Item>위치 : {restInfo.city} {restInfo.district} {restInfo.location}</ListGroup.Item>
                    {/* <Kakao /> */}
                    <ListGroup.Item>운영시간 : {restInfo.open_hour + '~'}{restInfo.close_hour}</ListGroup.Item>
                </ListGroup>
            </Card>

            <div className="row">
                <h2 className='p-3'>메뉴</h2>
                {restMenu && restMenu.map(m =>
                    <div className="col" key={`menu${m.rest_img_no}`}>
                        <Card key={m.menu_img} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={m.menu_img} />
                            <Card.Body>
                                <Card.Title>{m.menu}</Card.Title>
                                <Card.Text>
                                    {m.menu_desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            </div>
            <h2 className='p-3'>리뷰</h2>
            <Review />
        </>
    )
}

export default RestOne;
