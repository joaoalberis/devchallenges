import './App.css';
import { MenuTasks } from './components/MenuTasks';
import { Tasks } from './components/Tasks';
import { TodoAdd } from './components/TodoAdd';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [active, setActive] = useState('All')

  function updateTasks() {
    if (localStorage.getItem('tasks') === null) localStorage.setItem('tasks', '[]')
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (active === 'All'){
        setTasks(tasks)
    }else if(active === 'Active'){
        const activeTasks = tasks.filter((task) => {
            if (task.category === 'Active') return task
        })
        setTasks(activeTasks)
    }else {
        const completedTasks = tasks.filter((task) => {
            if (task.category === 'Completed') return task
        })
        setTasks(completedTasks)
    }
}

  return (
    <div className='w-max m-auto flex flex-col'>
      <h1 className="text-[#333] text-4xl font-bold text-center mb-8">#todo</h1>
      <MenuTasks active={active} setActive={setActive} />
      <TodoAdd updateTasks={updateTasks} />
      <Tasks updateTasks={updateTasks} active={active} tasks={tasks} />
    </div>
  );
}

export default App;
