import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { useReducer } from "react";

function taskReducer(tasks, action){ // state 대신 사용, 한 곳으로 모으기
  if(action.type == 'added'){
    return([
      ...tasks,
      {
        id: action.nextId++,
        text: action.text,
        done: false,
      },
    ])
  }else if(action.type == 'changed'){
    return(tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    }))

  }else if(action.type =='deleted'){
   tasks.filter((t) => t.id !== action.taskId);
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
      done: false
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      taskId
    })

  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
