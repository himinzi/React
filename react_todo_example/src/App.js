import './App.css';

function Form() {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  )
}

function Btn(props) {
  let btn = props.title;
  let btns = [];
  for (let ele of btn) {
    btns.push(
      <button key={ele} type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>{ele}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    )
  }
  return (
    <div className="filters btn-group stack-exception">
      {btns}
    </div>
  )
}


function List(props) {
  let todo = props.title;
  let todos = [];
  for (let ele of todo) {
    todos.push(
      <li key ={ele} className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor="todo-0">
            {ele}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>
    )
  }
  return (
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading">
      {todos}
    </ul>
  )
}

function App() {
  const btn = ["all", "Active", "Completed", "Delay"]
  const todo = ["Eat", "Sleep", "GoHome", "Repeat"];
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <Btn title={btn} />
      <h2 id="list-heading">{todo.length} tasks remaining</h2>
      <List title={todo} />
    </div>
  );
}

export default App;
