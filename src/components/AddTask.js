import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [taskNotes, setTaskNotes] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add task')
            return
        }

        onAdd({ text, taskNotes, day, reminder })

        setText('')
        setTaskNotes('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Task Notes</label>
            <input type='text' placeholder='Add Task Note' value={taskNotes} onChange={(e) => setTaskNotes(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
  )
}

export default AddTask