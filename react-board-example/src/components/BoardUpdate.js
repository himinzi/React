import { useState } from "react";
import axios from 'axios';
import { useParams, useLocation, useNavigate } from "react-router-dom";

function BoardUpdate() {

    const location = useLocation();
    const form = location.state.form;

    const [loading, setLoading] = useState(false);

    const [board, setBoard] = useState({});
    console.log(board);

    const params = useParams();

    const navigation = useNavigate();
    const goRead = () => { navigation(`/boardRead/${form.id}`) };


    const callAPI = async () => {
        setLoading(true);
        const result = await axios.put(`http://localhost:8000/board/${params.boardId}`, board);
        setLoading(false);
        goRead();
    }

    const updateHandler = (e) => {
        callAPI();
    }


    if (loading) return <div className="position-absolute top-50 start-50"><h1>로딩중.....</h1></div>

    return (
        <>
            <h1>BoardInsert</h1>
            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label htmlFor="title" className="form-label" >제목</label>
                    <input type="text" className="form-control" id="title" placeholder="제목" name="title" defaultValue={form.title} onChange={(e) => { setBoard({ ...board, title: e.target.value }) }}></input>
                </div>
                <label htmlFor="body">내용:</label>
                <textarea className="form-control" rows="5" id="body" name="text" defaultValue={form.body} onChange={(e) => { setBoard({ ...board, body: e.target.value }) }}></textarea>
                <div className="mb-3">
                    <label htmlFor="writer" className="form-label">작성자</label>
                    <input type="text" className="form-control" id="writer" placeholder="작성자" name="writer" defaultValue={form.writer}></input>
                </div>
                <button type="submit" onClick={updateHandler} className="btn btn-primary">수정완료</button>
            </form>
        </>
    )
}

export default BoardUpdate;