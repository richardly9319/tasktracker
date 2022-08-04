import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      taskNotes: 'Keefer Medical with Dr Tom to go over blood work',
      day: 'Aug 12th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at Office',
      taskNotes: 'With Peter to go over Q3 goals and objectives',
      day: 'Aug 12th at 5pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      taskNotes: 'Eggs, salad, dumplings, beef, bread',
      day: 'Aug 13th at 7pm',
      reminder: false
    }
])

// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="App">
      <Header title="Richard's Task App" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0  ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      : 'No Tasks'}
    </div>
  );
}

export default App;
