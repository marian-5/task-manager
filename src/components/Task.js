import {Fragment} from 'react'
import {} from './Task.css'


const Task = ({task:[task,setTask], onDelete}) => {
  
  return (
    <li
      className={'row gray Task '
      + (task.reminder ? 'Task-reminder' : "")}
      onClick={()=>setTask({...task,reminder:!task.reminder})}
    >
      <div className='Task-info'>
        <p className='Task-text'>{task.text}</p>
        <p className='Task-date'>{task.date}</p>
      </div>
      <button className='Task-delete' onClick={()=>onDelete(task)}>
        X
      </button>    
    </li>
  )
}

export default Task