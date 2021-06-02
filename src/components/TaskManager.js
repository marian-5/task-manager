import AddTask from './AddTask'
import TaskList from './TaskList'
import {useState} from 'react'
import {} from './TaskManager.css'
import immMap from '../immMap'

const Toggle = ({valueMut:[,setValue], children}) => (
  <button onClick={()=>setValue(value=>!value)}>
    {children}
  </button>
)

const TaskManager = ({ tasksMut }) => {
  const showAddMut = useState(false)
  const [showAdd,] = showAddMut
  const [tasks,setTasks] = tasksMut
  const tasksLogMut = [tasks,fn=>setTasks(tasks => {
    console.log('oldTasks TaskManager',tasks)
    const newTasks = fn(tasks)
    console.log('new tasks TaskManager',newTasks)
    return newTasks
  })]
  return (
    <div className='teal TaskManager'>
      <header>
        <h1>Task Manager</h1>
        <Toggle valueMut={showAddMut}>
          Add Task
        </Toggle> 
      </header>
      {showAdd && (
        <AddTask
          onAdd={task=>{console.log('onAdd');setTasks(tasks=>immMap.set(tasks,task.id,task))}}
          generateId={()=>Math.floor(Math.random()*10000)}
        />
      )}
      <TaskList tasksMut={tasksLogMut}/>
    </div>
  )
}

export default TaskManager