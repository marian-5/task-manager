import TasksManager from './components/TaskManager'
import {useState} from 'react'

const mockTasks = [
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
]

function App() {
  const tasksMut = useState(mockTasks)
  return (
    <TasksManager tasksMut={tasksMut}/>
  )
}

export default App;
