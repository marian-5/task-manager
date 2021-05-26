import AddTask from './AddTask'
import TaskList from './TaskList'
import {useState} from 'react'

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
    <div className='container'>
      <Toggle valueMut={showAddMut}>
        Add Task
      </Toggle> 
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