import {useState,Fragment} from 'react'

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
  <Fragment>
    {label !== undefined && <label>{label}</label>}
    <input
      type='checkbox'
      checked={value}
      onChange={e=>setValue(e.target.checked)}
    />
  </Fragment>
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
    <form onSubmit={onSubmit}>
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