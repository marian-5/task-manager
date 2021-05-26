import AddTask from './AddTask'
import TaskList from './TaskList'
import {useState} from 'react'
import {} from './TaskManager.css'

const Toggle = ({valueMut:[,setValue], children}) => (
  <button onClick={()=>setValue(value=>!value)}>
    {children}
  </button>
)

const TaskManager = ({ tasksMut }) => {
  const showAddMut = useState(false)
  const [showAdd,] = showAddMut
  const [,setTasks] = tasksMut

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
          onAdd={task=>setTasks(tasks=>[...tasks,task])}
        />
      )}
      <TaskList tasksMut={tasksMut}/>
    </div>
  )
}

export default TaskManager