import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home.js';
import Mypage from './components/Mypage.js';
import RestList from './components/rest/RestList.js'
import RestOne from './components/rest/RestOne.js'
import RestInsert from './components/rest/RestInsert.js'
import RestUpdate from './components/rest/RestUpdate.js'
import RestDelete from './components/rest/RestDelete.js'
import ReviewList from './components/review/ReviewList.js'
import ReviewOne from './components/review/ReviewOne.js'
import ReviewInsert from './components/review/ReviewInsert.js'
import ReviewDelete from './components/review/ReviewDelete.js'


function App() {
  return (
    <div className='row'>
      <div className="App col-2">
        <ul className='nav flex-column navbar bg-body-tertiary'>
          <li className='nav-item'><NavLink className='nav-link' to='/home'>HOME</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/restList'>맛집 보기</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/restInsert'>맛집 등록</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/Mypage'>마이페이지</NavLink></li>
        </ul>
      </div>
      <div className='col-8'>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Mypage' element={<Mypage />}></Route>
          <Route path='/restList/*' element={<RestList />}></Route>
          <Route path='/restOne/:restNo' element={<RestOne />}></Route>
          <Route path='/restInsert' element={<RestInsert />}></Route>
          <Route path='/restUpdate/:restNo' element={<RestUpdate />}></Route>
          <Route path='/restDelete/:restNo' element={<RestDelete />}></Route>
          <Route path='/reviewList/*' element={<ReviewList />}></Route>
          <Route path='/reveiwOne/:reviewNo' element={<ReviewOne />}></Route>
          <Route path='/reviewInsert' element={<ReviewInsert />}></Route>
          <Route path='/reviewDelete/:reviewNo' element={<ReviewDelete />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
