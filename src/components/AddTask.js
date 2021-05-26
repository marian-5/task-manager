import {useState,Fragment} from 'react'
import {} from './AddTask.css'

const TextBox = ({label,placeholder = '',value:[value,setValue]}) => {return(
  <Fragment>
    {label !== undefined && <label>{label}</label> }
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={e=>setValue(e.target.value)}
    />
  </Fragment>
)}
const CheckBox = ({label, value:[value,setValue]}) => (
  <div className="AddTask-CheckBox">
    {label !== undefined && <label>{label}</label>}
    <input
      type='checkbox'
      checked={value}
      onChange={e=>setValue(e.target.checked)}
    />
  </div>
)

const AddTasks = ({onAdd}) => {
  const text = useState('')
  const date = useState('')
  const reminder = useState(false)
  const onSubmit = e => {
    e.preventDefault()
    onAdd({text,date,reminder})
  }
  return(
    <form className='AddTask' onSubmit={onSubmit}>
      <TextBox
        label = 'Task:'
        value = {text}
        placeholder='description'
      />
      <TextBox
        label = {'Date & Time'}
        value = {date}
      />
      <CheckBox
        label = 'Set Reminder:'
        value = {reminder}
      />
      <input type='submit' value='Add task'/>
    </form>
  )
}
export default AddTasks