import axios from 'axios';
import { useState, useRef } from 'react';
import { useNavigate} from "react-router-dom";


function BoardInsert(){
    const navigation = useNavigate();

    const goBoard = () => { navigation("/boardList") };

    let [board, setBoard] = useState({
        "title": '',
        "body": '',
        "writer": ''
    });

    const [loading, setLoading] = useState(false);


    const callAPI = async () => {
        setLoading(true);
        const result = await axios.post(`http://localhost:8000/board`, board);
        setLoading(false);
        console.log(result);
        goBoard();
    }
    const clickHandler = (e) => {
        callAPI();
    }
    // useEffect(() => {
    //     callAPI();
    // }, []);

    if (loading) return <div className="position-absolute top-50 start-50"><h1>로딩중.....</h1></div>

    return (
        <>
            <h1>BoardInsert</h1>
            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label htmlFor="title" className="form-label" >제목</label>
                    <input type="text" className="form-control" id="title" placeholder="제목" name="title" onChange={(e)=>{setBoard({...board, title:e.target.value})}}></input>
                </div>
                <label htmlFor="body">내용:</label>
                <textarea className="form-control" rows="5" id="body" name="text" onChange={(e)=>{setBoard({...board, body:e.target.value})}}></textarea>
                <div className="mb-3">
                    <label htmlFor="writer" className="form-label">작성자</label>
                    <input type="text" className="form-control" id="writer" placeholder="작성자" name="writer" onChange={(e)=>{setBoard({...board, writer:e.target.value})}}></input>
                </div>
                <button type="submit" onClick ={clickHandler} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default BoardInsert;