import { Route, Routes, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap'

const SimpleButton = styled.button`
  color:white;
  background-color: purple;
`
const LargeButton = styled(SimpleButton)`
 font-size : 2rem;
 margin : 1rem;
 background-color: green;
`
function ReactButton(props) {
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
 background-color : yellowgreen;
 color: white;
`

function Home() {
  const style = { fontSize: "3rem" };
  return (
    <div>
      <h2>Home</h2>
      <div style={style}>Home...</div>
      <div style={{ color: "tomato" }}>홈홈홈홈✈</div>
      {/* 바로 위에꺼 처럼 쓰려면 저렇게 해야 됨. json 객체라서 */}
      <SimpleButton>심플 버튼</SimpleButton>
      <LargeButton>큰벝은</LargeButton>
      <ReactButton>삭제</ReactButton>
      <ReactLargeButton>등록</ReactLargeButton>
    </div>
  )
}

let contents = [
  { id: 1, title: "HTML", description: "HTML is..." },
  { id: 2, title: "JS", description: "JS is..." },
  { id: 3, title: "REACT", description: "REACT is..." }
]

function Topic() {
  let params = useParams();
  let topic_id = Number(params.topic_id);
  console.log(params);
  //topic_id 일치하는 content 검색 : find
  let findContent = contents.find(content => {
    return topic_id === content.id; //조건을 여기 써줘야됨
  })

  const navigation = useNavigate();

  const goHome = () => { navigation("/topics") };
  const goBack = () => { navigation(-1); };

  return (
    <div>
      <h3>{findContent.title}</h3>
      {findContent.description}
      <div className='m-3'>
        <button onClick={goBack} className='btn btn-success me-3'>뒤로가기</button>
        <button onClick={goHome} className='btn btn-info'>홈으로</button>
      </div>
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul className='nav nav-tabs'>
        {contents.map((content) => (
          <li key={content.id} className='nav-item'><NavLink className='nav-link' to={"/topics/" + content.id}>{content.title}</NavLink></li>
        ))}
      </ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  )
}

function Contact() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  return (
    <div>
      <h2>Contact</h2>
      Contact...
      <div>이름 {search.get('name')}</div>
      <div>나이 {search.get('age')}</div>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <nav>
        <div>
          <h1>Hello React Router DOM</h1>
        </div>
      </nav>
      <div className="row">
        <div className='col-2'>
          <ul className='nav flex-column navbar bg-body-tertiary'>
            {/* Link to : SPA방식! ajax 같음 */}
            <li className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/topics'>Topics</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
        <div className='col-8'>
          <Card>
            <CardBody>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/topics/*' element={<Topics />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
