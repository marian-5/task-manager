import Task from './Task'

const TaskList = ({tasks:[tasks,setTasks]}) => {
  const setTask = index => newTask => setTasks(tasks => {
    const newTasks = [...tasks]
    //there must be a way to do this immutably
    newTasks[index] = newTask
    return newTasks
  })
  const deleteTask = index => () => setTasks(tasks => {
    const newTasks = [...tasks]
    newTasks.splice(index,1)
    return newTasks
  })
  return (
    <ol>{
      tasks.map((task,index)=>(
        <li key = {task.id}>
          <Task
            task={[task, setTask(index)]}
            onDelete={deleteTask(index)}
          />
        </li>
      ))
    }</ol>
  )
}
export default TaskList