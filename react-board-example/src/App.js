import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BoardList from './components/BoardList';
import BoardInsert from './components/BoardInsert';
import BoardRead from './components/BoardRead';
import BoardDelete from './components/BoardDelete';
import BoardUpdate from './components/BoardUpdate';


function App() {
  return (
    <div className='row'>
      <div className="App col-4">
        <ul className='nav flex-column navbar bg-body-tertiary'>
          <li className='nav-item'><NavLink className='nav-link' to='/home'>HOME</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/boardList'>BoardList</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/boardInsert'>BoardInsert</NavLink></li>
        </ul>
      </div>
      <div className='col-8'>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/boardList/*' element={<BoardList />}></Route>
          <Route path='/boardInsert' element={<BoardInsert />}></Route>
          <Route path='/boardRead/:boardId' element={<BoardRead />}></Route>
          <Route path='/boardDelete/:boardId' element={<BoardDelete />}></Route>
          <Route path='/boardUpdate/:boardId' element={<BoardUpdate />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
