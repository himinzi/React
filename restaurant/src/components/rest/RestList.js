import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Rating } from 'primereact/rating';


function RestList() {
    let [restList, setRestList] = useState([]);
    let [search, setSearch] = useState({ order: 'rest_date' });
    const [loading, setLoading] = useState(false);


    const callAPI = async () => {
        setLoading(true);
        const result = await axios.get(`http://192.168.0.10:8000/restaurant?city=${search.city}&district=${search.district}&menu_type=${search.menu_type}&order=${search.order}`);
        setLoading(false);
        setRestList(result.data);
    }

    const searchHandler = (e) => {
        callAPI();
    }

    if (loading) return <div className="position-absolute top-50 start-50"><h1>로딩중.....</h1></div>

    console.log(search);

    return (
        <>
            <h1>맛집</h1>
            <Form.Select aria-label="Default select example" onChange={(e) => { setSearch({ ...search, city: e.target.value }) }}>
                <option>도시를 선택해주세요!</option>
                <option value="대구광역시">대구 </option>
                <option value="서울특별시">서울</option>
                <option value="부산광역시">부산</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" onChange={(e) => { setSearch({ ...search, district: e.target.value }) }}>
                <option>구를 선택해주세요!</option>
                <option value="중구">중구 </option>
                <option value="수성구">수성구</option>
                <option value="남구">남구</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" onChange={(e) => { setSearch({ ...search, menu_type: e.target.value }) }}>
                <option>메뉴타입</option>
                <option value="한식">한식</option>
                <option value="중식">중식</option>
                <option value="일식">일식</option>
                <option value="양식">양식</option>
                <option value="태국음식">태국음식</option>
                <option value="인도음식">인도음식</option>
                <option value="기타">기타</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" onChange={(e) => { setSearch({ ...search, order: e.target.value }) }}>
                <option>정렬하기</option>
                <option value="review_num">리뷰 많은 순</option>
                <option value="review_avg">별점 높은 순</option>
                <option value="rest_date">최신 순</option>
            </Form.Select>

            {/* <button type="submit" onClick={searchHandler} className="btn btn-primary">검색하기</button> */}
            <table className="table table-hover">
                <thead className="table-success">
                    <tr>
                        <th>상호명</th><th>위치</th><th>메뉴타입</th><th>운영시간</th><th>매장식사여부</th><th>매장내 자리 수</th><th>키즈존</th><th>리뷰 평균</th>
                    </tr>
                </thead>
                <button type="submit" onClick={searchHandler} className="btn btn-primary">검색</button>
                <tbody>
                    {restList.map(r =>
                        <tr key={'rest' + r.rest_no} className="position-relative">
                            <td><Link className="stretched-link" to={`/restOne/${r.rest_no}`}>{r.rest_name}</Link></td>
                            <td>{r.location}</td>
                            <td>{r.menu_type}</td>
                            <td>{r.open_hour + '~'}{r.close_hour}</td>
                            <td>{r.dine_in == 0 ? '가능' : '불가능'}</td>
                            <td>{r.seat_cnt + '좌석'}</td>
                            <td>{r.kids == 0 ? '키즈존' : '노키즈존'}</td>
                            <td><Rating value={r.review_avg} cancel={false} />{`(${r.review_num})`}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </>
    )
}

export default RestList;
