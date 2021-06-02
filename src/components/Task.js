import {} from './Task.css'


const Task = ({task:[task,setTask], onDelete}) => {
  
  return (
    <li
      className={'row gray Task '
      + (task.reminder ? 'Task-reminder' : "")}
      //the problem with tryin to update task like this is that it might be deleted before the update runs
      //how am i gonna fix this? => setting task to undefined should remove it, references to tasks that dont exist return undefined
      onClick={()=>setTask(task => ({...task,reminder:!task.reminder}))}
    >
      <div className='Task-info'>
        <p className='Task-text'>{task.text}</p>
        <p className='Task-date'>{task.date}</p>
      </div>
      <button className='Task-delete' onClick={e=>onDelete(task)}>
        X
      </button>    
    </li>
  )
}

export default Task