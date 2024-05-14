import './App.css';
import { useState } from 'react';

function Header(props) { // 속성을 읽어내는 props
  return (
    <header>
      <h1><a href="/" id = {props.id} onClick={(e) =>props.onChangeMode(e.target.id)}>{props.title}</a></h1>
      <span>
                ⊂_ヽ <br></br>
                　 ＼＼ Λ＿Λ  <br></br>
                　　 ＼( ‘ㅅ’ ) 두둠칫 <br></br>
                　　　 &gt;　⌒ヽ <br></br>
                　　　/ 　 へ＼ <br></br>
                　　 /　　/　＼＼ <br></br>
                　　 ﾚ　ノ　　 ヽ_つ <br></br>
                　　/　/두둠칫 <br></br>
                　 /　/| <br></br>
                　(　(ヽ <br></br>
                　|　|、＼ <br></br>
                　| 丿 ＼ ⌒) <br></br>
                　| |　　) / <br></br>
                `ノ )　　Lﾉ <br></br>
            </span>
    </header>
  )
}

function Nav(props) {
  const lis = []; 
  for (let i = 0; i < props.topics.length; i++) {
    const topic = props.topics[i];
    lis.push(<li id ={topic.id} key={topic.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(e.target.id);
    }}><a href={'/read/' + topic.id}>{topic.title}</a></li>)

  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
      <h2>{props.topic}</h2>
    </article>
  )
}


function App() {
  let [mode, setMode] = useState("HEY");
  const topics = [{ id: 1, title: '타', body: '바' }, 
                  { id: 2, title: '이', body: '아' }, 
                  { id: 3, title: '틀', body: '디' }]; //list 돌릴때는 반드시 id key 값이 필요함. 
  let content = null;
  let [topicId, setTopicId] = useState('1');
  if(mode === "HEY"){
    content =  <Article title="HEY" body="dd" />;
  }else{
    let newTopics = [];
    newTopics = topics.filter(t => t.id == topicId);
    content = <Article title={newTopics[0].title} body={newTopics[0].body}  id ={newTopics[0].id}/>;
  }
  return (
    <div>
      <Header title="REACTWWW" onChangeMode={(t)=>{
        setMode("HEY");
        setTopicId(t);
      }} />
      <Nav topics={topics} onChangeMode={(t) => {
        console.log(t);
        setMode("read");
        setTopicId(t);
        }}/>
      {content}
    </div>
  );
}

export default App;