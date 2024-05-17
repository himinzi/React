import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText } from "reactstrap";

function BoardRead() {
    // Hook은 보통 맨 위에 씀 
    const navigation = useNavigate();

    const goHome = () => { navigation("/home") };
    const goBack = () => { navigation(-1); };

    //state
    const [form, setForm] = useState({
        "id": 0,
        "title": "",
        "body": "",
        "dt": "",
        "writer": ""
    });
    const [loading, setLoading] = useState(false);
    // const{id} = useParams();
    const params = useParams();


    //callAPI
    const callAPI = async () => {
        setLoading(true);
        const result = await axios.get(`http://localhost:8000/board/${params.boardId}`);
        setLoading(false);
        setForm(result.data[0]);
        //console.log(result.data[0]);
    }

    useEffect(() => {
        callAPI();
    }, []);

    // const {id, title, body, dt, writer} = form;

    if (loading) return <div className="position-absolute top-50 start-50"><h1>로딩중.....</h1></div>


    //useEffect
    return (
        <>
            <Card>
                <CardHeader tag="h6" className="p-0 border-bottom-0">
                    <div className="card-head">작성자 : {form.writer} 작성일시 : {form.dt}</div>
                </CardHeader>
                <CardBody>
                    <div>
                        <div className="card" style={{ width: "25rem" }}>
                            <CardTitle tag="hs">
                                <h5 className="card-title">제목: {form.title}</h5>
                            </CardTitle>
                            <div className="card-body">
                                <CardText>
                                    <p className="card-text">내용 : {form.body}</p>
                                </CardText>
                                <CardFooter>
                                    <Link to={`/boardDelete/${form.id}`} className="btn btn-primary me-3">삭제</Link>
                                    <Link to={`/boardUpdate/${form.id}`} className="btn btn-primary me-3" state={{ form }}>수정</Link>
                                    <button onClick={goBack} className='btn btn-success me-3'>뒤로가기</button>
                                    <button onClick={goHome} className='btn btn-info me-3'>홈으로</button>
                                </CardFooter>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default BoardRead;