import {useState} from 'react'

const AddTasks = ({onAdd}) => {
  const [text,setText] = useState('')
  const [date,setDate] = useState('')
  const [reminder,setReminder] = useState(false)
  const onSubmit = e => {
    e.preventDefault()
    onAdd({text,date,reminder})
  }
  return(
    <form onSubmit={onSubmit}>
      <label>Task:</label>
      <input
        type='text'
        value={text}
        placeholder='description'
        onChange={e=>setText(e.target.value)}
      />
      <label>{'Date & Time:'}</label>
      <input
        type='text'
        value={date}
        onChange={e=>setDate(e.target.value)}
      />
      <label>Set Reminder:</label>
      <input
        type='checkbox'
        checked={reminder}
        onChange={e=>setReminder(e.target.checked)}
      />
      <input type='submit' value='Add task'/>
    </form>
  )
}
export default AddTasks