import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {

    let [boardList, setBoardList] = useState([]);
    const[loading, setLoading] = useState(false);

    // const callAPI = async () => {
    //    setLoading(true);
    //    const result = await axios.get('http://localhost:8000/board');
    //    setLoading(false);
    //     setBoardList(result.data);
    // }
    // useEffect(() => {
    //     callAPI();
    // },[])

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/board')
            .then(res => {
                setLoading(false);
                setBoardList(res.data);
            })
    }, []);

    if(loading) return <div className="position-absolute top-50 start-50"><h1>로딩중.....</h1></div>

    console.log(boardList);
    return (
        <>
            <table className="table table-hover">
                <thead className="table-success">
                    <tr>
                        <th>ID</th><th>TITLE</th><th>BODY</th><th>DATE</th><th>WRITER</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map(b => <tr key={'boardList' + b.id} className="position-relative">
                        <td>{b.id}</td>
                        <td><Link className="stretched-link" to={`/boardRead/${b.id}`}>{b.title}</Link></td>
                        <td>{b.body}</td>
                        <td>{b.date}</td>
                        <td>{b.writer}</td>
                    </tr>)}
                </tbody>
            </table>
        </>

    )
}

export default BoardList;