import axios from 'axios';
import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function RestInsert() {
    const navigation = useNavigate();

    const goList = () => { navigation("/RestList") };

    let [rest, setRest] = useState();

    let [menu, setMenu] = useState();


    const [loading, setLoading] = useState(false);

    const callAPI = async () => {
        setLoading(true);
        let formData = new FormData();
        formData.append('rest_name', rest.rest_name);
        formData.append('rest_desc', rest.rest_desc);
        formData.append('city', rest.city);
        formData.append('district', rest.district);
        formData.append('location', rest.location);
        formData.append('thumbnail', rest.thumbnail);
        formData.append('tel_no', rest.tel_no);
        formData.append('open_hour', rest.open_hour);
        formData.append('close_hour', rest.close_hour);
        formData.append('menu_type', rest.menu_type);


        let menuData = new FormData();
        menuData.append('menu', menu.menu);
        menuData.append('menu_desc', menu.menu_desc);
        menuData.append('menu_img', menu.menu_img);
        // const result = await axios.post(`http://localhost:8000/restaurant/`, rest);
        // const result2 = await axios.post(`http://localhost:8000/restaurant/menu`, menu);

        await axios.post(`http://localhost:8000/restaurant/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        await axios.post(`http://localhost:8000/restaurant/menu`, menuData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        setLoading(false);
        goList();
    }

    const clickHandler = (e) => {
        callAPI();
    }

    if (loading) return <div className="position-absolute top-50 start-50"><h1>로딩중.....</h1></div>

    console.log(rest);
    console.log(menu);

    return (
        <>
            <h1>맛집등록</h1>
            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label htmlFor="title" className="form-label" >맛집 이름</label>
                    <input required type="text" className="form-control" id="title" placeholder="맛집 이름" name="title" onChange={(e) => { setRest({ ...rest, rest_name: e.target.value }) }}></input>
                </div>
                <label htmlFor="body">맛집 설명:</label>
                <textarea required className="form-control" rows="5" id="body" name="text" onChange={(e) => { setRest({ ...rest, rest_desc: e.target.value }) }}></textarea>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">도시명 ex.서울특별시</label>
                    <input required type="text" className="form-control" id="city" placeholder="도시명" name="city" onChange={(e) => { setRest({ ...rest, city: e.target.value }) }}></input>
                    <label htmlFor="district" className="form-label">구 ex.중구</label>
                    <input required type="text" className="form-control" id="district" placeholder="구" name="district" onChange={(e) => { setRest({ ...rest, district: e.target.value }) }}></input>
                    <label htmlFor="location" className="form-label">상세주소</label>
                    <input required type="text" className="form-control" id="location" placeholder="상세주소" name="location" onChange={(e) => { setRest({ ...rest, location: e.target.value }) }}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="thumbnail" className="form-label" >대표사진 </label>
                    <input required type="file" accept="image/jpeg,.txt" className="form-control" id="thumbnail" name="thumbnail" onChange={(e) => { setRest({ ...rest, thumbnail: e.target.files[0] }) }}></input>
                    <label htmlFor="menu" className="form-label">메뉴이름</label>
                    <input required type="text" placeholder="메뉴이름" className="form-control" id="thumbnail" name="thumbnail" onChange={(e) => { setRest({ ...rest, menu: e.target.value }) }}></input>
                    <label htmlFor="menu_desc" className="form-label">메뉴설명</label>
                    <input required type="text" placeholder="메뉴이름" className="form-control" id="thumbnail" name="thumbnail" onChange={(e) => { setRest({ ...rest, menu: e.target.value }) }}></input>
                    <label htmlFor="menu_type" className="form-label">메뉴타입</label>
                    <input required type="text" className="form-control" id="menu_type" placeholder="메뉴타입" name="menu_type" onChange={(e) => { setMenu({ ...menu, menu_type: e.target.value }) }}></input>
                    <label htmlFor="menu_img" accept="image/*,.txt" className="form-label" >메뉴사진 </label>
                    <input required type="file" className="form-control" id="menu_img" name="menu_img" onChange={(e) => { setMenu({ ...menu, menu_img: e.target.files[0] }) }}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="tel_no" className="form-label" >전화번호 </label>
                    <input required type="text" className="form-control" id="tel_no" placeholder="전화번호" name="tel_no" onChange={(e) => { setRest({ ...rest, title: e.target.value }) }}></input>
                    <label htmlFor="open_hour" className="form-label" >오픈 시간 </label>
                    <input required type="text" className="form-control" id="open_hour" placeholder="오픈 시간" name="open_hour" onChange={(e) => { setRest({ ...rest, title: e.target.value }) }}></input>
                    <label htmlFor="close_hour" className="form-label" >닫는 시간 </label>
                    <input required type="text" className="form-control" id="close_hour" placeholder="닫는 시간 " name="close_hour" onChange={(e) => { setRest({ ...rest, title: e.target.value }) }}></input>
                </div>
                <button type="submit" onClick={clickHandler} className="btn btn-primary">등록하기</button>
            </form>
        </>
    )
}

export default RestInsert;
