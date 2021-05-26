import {Fragment} from 'react'


const Task = ({task:[task,setTask], onDelete}) => {
  
  return (
    <Fragment>
      <p>{task.text}</p>
      <p>{task.date}</p>
      {task.reminder && <p> Remainder set </p>}
      <button 
      onClick={()=>setTask({...task,reminder:!task.reminder})}
      >
        toggle reminder
      </button>
      <button
       onClick={()=>onDelete(task)}
      >
        delete
      </button>
    </Fragment>
  )
}

export default Task