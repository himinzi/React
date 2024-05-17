import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BoardDelete(){

    const navigation = useNavigate();

    const goList =() => {navigation("/boardList")};

    const[loading, setLoading] = useState(false);

    const params = useParams();

    const callAPI = async () => {
        setLoading(true);
        const result = await axios.delete(`http://localhost:8000/board/${params.boardId}`)
        setLoading(false);
        goList();
    }

    useEffect(() => {
        callAPI();
    }, []);

    if (loading) return <div className="position-absolute top-50 start-50"><h1>로딩중.....</h1></div>

    return(
        <>
            alert('삭제완료!');
        </>
    )
}

export default BoardDelete;