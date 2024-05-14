import { useState, useEffect } from "react";

function Comp() {

    let [posts, setPosts] = useState([]);
    // const callAPI = () => [
    //         fetch('https://jsonplaceholder.typicode.com/posts/')
    //             .then(response => response.json())
    //             .then(json => {
    //                 setPosts(json);
    //             })
    // ]
    // useEffect(() => {
    //     callAPI();
    // })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => {
                setPosts(json);
            })
    }, []) // 컴포넌트가 화면에 가장 처음 렌더링 될 때 한번만 실행하고 싶을 대는 deps 위치에 빈 배열을 넣는다. 

    return (
        <>
            {posts.map(post => <div key={post.id}><span>{post.id}</span><span>{post.title}</span></div>)}
        </>
    )
}




export default Comp;