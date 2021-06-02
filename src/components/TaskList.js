import Task from './Task'
import immMap from '../immMap'

//reacts setters are overloaded so i guess i need to overload mine too
const overloadSetter = updateValue => f => (
  f instanceof Function 
  ? updateValue(f)
  : updateValue(()=>f)
)

const projectSetter = (setOuter,get,set) => overloadSetter(
  update => setOuter(
    outer=>{
      const newVal = update(get(outer))
      return set(outer,newVal)
    }
  )
)
const setItem = (setMap, key) => projectSetter(
  setMap,
  map=>map.get(key),
  (map,val)=>immMap.set(map,key,val)
)
const removeItem = (setMap, key) => setMap(
  map=>{
    const newTasks = immMap.delete(map,key)
    console.log('removeItem',newTasks);
    return newTasks
  }
)

const TaskList = ({tasksMut:[tasks,setTasks]}) => {
  const setLogTasks = fn => setTasks(tasks => {
    console.log('TasksList','old',tasks)
    const newTasks = fn(tasks)
    console.log('TaskList','new',newTasks)
    return newTasks
  })
  return (
  <ul>{
    Array.from(tasks.values(),(task)=>
      <Task
        key = {task.id}
        task = {[task,setItem(setLogTasks,task.id)]}
        onDelete={()=>{
          console.log('onDelete',task);
          removeItem(setLogTasks,task.id)
        }}
      />    
    )
  }</ul>
)}

export default TaskList