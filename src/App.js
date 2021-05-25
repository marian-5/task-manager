import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import {useState} from 'react'


const mockTasks = [
  {
    id:1,
    text: 'task1',
    date: 'today',
    reminder: true
  },
  {
    id:2,
    text: 'task2',
    date: 'yesterday',
    reminder: false
  }
]

function App() {
  const tasks = useState(mockTasks)
  const [,setTasks] = tasks;
  const [showAdd,setShowAdd] = useState(false)
  return (
    <div className='container'>
      <button onClick={()=>setShowAdd(showAdd=>!showAdd)}>
        Add Task
      </button>
      {showAdd && <AddTask onAdd={task=>setTasks(tasks=>[...tasks,task])}/>}
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
