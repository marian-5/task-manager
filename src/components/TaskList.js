import Task from './Task'

//mutates a copy of the array and returns the result
const mutateCopy = (arr,f) => {
  const copy = [...arr];
  f(copy)
  return copy
}
//replaces an item in the array
const withReplaced = (arr,index,val) => mutateCopy(
  arr,
  arr => arr[index] = val
)
//removes an item in the array
const withRemoved = (arr,index) => mutateCopy(
  arr,
  arr => arr.splice(index,1)
)
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
const setItem = (setArray, index) => projectSetter(
  setArray,
  arr=>arr[index],
  (arr,val)=>withReplaced(arr,index,val)
)
const removeItem = (setArray, index) => setArray(
  array=>withRemoved(array,index)
)

const TaskList = ({tasksMut:[tasks,setTasks]}) => {
  return (
    <ol>{
      tasks.map((task,index)=>(
        <li key = {task.id}>
          <Task
            task={[task, setItem(setTasks,index)]}
            onDelete={()=>removeItem(setTasks,index)}
          />
        </li>
      ))
    }</ol>
  )
}
export default TaskList