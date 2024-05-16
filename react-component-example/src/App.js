import Comp01 from './component/Comp01.js'
import Comp02 from './component/Comp02.js'
import Comp03 from './component/Comp03.js'
import Comp04 from './component/Comp04.js'
import Comp05 from './component/Comp05.js'
import Comp06 from './component/Comp06.js'
import Comp07 from './component/Comp07.js'
import Comp08 from './component/Comp08.js'
import Comp09 from './component/Comp09.js'
//import TodoApp from "./page/TodoApp.js"
import { Route, Routes, NavLink } from 'react-router-dom';


function App() {
  //   const products = [
  //     { no: 1, pname: "apple", price: 200 },
  //     { no: 2, pname: "banana", price: 300 },
  //     { no: 3, pname: "orange", price: 400 }
  // ]
  // const DATA = [
  //   { id: "todo-0", name: "Eat", completed: true },
  //   { id: "todo-1", name: "Sleep", completed: false },
  //   { id: "todo-2", name: "Repeat", completed: false },
  // ];
  return (
    <div className="App">
      <nav>
        <ul className='nav flex-column navbar bg-body-tertiary'>
          <li className='nav-item'><NavLink className='nav-link' to='/comp01'>Comp01</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/comp02'>Comp02</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/comp03'>Comp03</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/comp04'>Comp04</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/comp05'>Comp05</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/comp06'>Comp06</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/comp07'>Comp07</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/comp08'>Comp08</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/comp09'>Comp09</NavLink></li>
        </ul>
      </nav>
      <div className='col-8'>
        <Routes>
          <Route path='/comp01' element={<Comp01/>}/>
          <Route path='/comp01' element={<Comp02/>}/>
          <Route path='/comp01' element={<Comp03/>}/>
          <Route path='/comp01' element={<Comp04/>}/>
          <Route path='/comp01' element={<Comp05/>}/>
          <Route path='/comp01' element={<Comp06/>}/>
          <Route path='/comp01' element={<Comp07/>}/>
          <Route path='/comp01' element={<Comp08/>}/>
          <Route path='/comp01' element={<Comp09/>}/>
        </Routes>
      </div>
      {/* <Comp/> */}
      {/* <Comp productList = {products}/> */}
    </div>
  );
}

export default App;