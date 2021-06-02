import TasksManager from './components/TaskManager'
import {useState} from 'react'

function * mapIter(gen,fn) {
  for (const value of gen) {
    yield fn(value)
  }
}

const mockTasks = new Map(mapIter([
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
][Symbol.iterator](), task => [task.id, task]))

function App() {
  const [tasks,setTasks] = useState(mockTasks)
  const tasksMut = [tasks,tasks2tasks=>setTasks(tasks => {
    console.assert(tasks2tasks instanceof Function)
    console.log('oldTasks',tasks);
    const newTasks = tasks2tasks(tasks);
    console.log('newTasks',newTasks);
    return newTasks
  })]
  return (
    <TasksManager tasksMut={tasksMut}/>
  )
}

export default App;
