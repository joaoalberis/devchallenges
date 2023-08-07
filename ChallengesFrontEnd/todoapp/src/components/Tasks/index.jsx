import { useEffect } from 'react';
import remove from '../../assets/delete.svg'
import { Checkbox } from '../Checkbox';

export function Tasks({tasks, active, updateTasks}){

    useEffect(() => {
        updateTasks();
    }, [active])

    function handleTaskState(e){
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        for(let i = 0; i < tasks.length; i++) {
            if (tasks[i].name === e.target.labels[0].innerText) {
                e.target.checked ? tasks[i].category = "Completed" : tasks[i].category = "Active"
                continue
            }
        }
        localStorage.setItem('tasks', JSON.stringify(tasks))
        updateTasks()
    }

    function handleRemoveAll() {
        localStorage.setItem('tasks', '[]')
        updateTasks()
    }

    function handleRemoveOne(e) {
        const taskName = e.target.parentNode.firstChild.lastChild.innerText;
        console.log(taskName)
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const newTasks = tasks.filter(task => task.name !== taskName);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        updateTasks();
    }
    
    return (
        <div className='flex flex-col gap-3'>
            {tasks.length === 0 ? <p>Nenhuma tarefa Adicionada</p> : tasks.map((task, index) => {
                return (
                    <div key={index} className='flex gap-2 justify-between'>
                        <div className='flex gap-2 items-center'>
                            <Checkbox checked={task.category === 'Completed'} change={(e) => handleTaskState(e)} identifier={task.name} category={task.category} name={task.name} />
                        </div>
                        {active === 'Completed' && <img onClick={(e) => handleRemoveOne(e)} className='w-6' src={remove} alt="" />}
                    </div>
                )
            })}
            {active === 'Completed' && <button onClick={handleRemoveAll} className='flex gap-2 rounded bg-[#eb5757] py-2 px-4 self-end'><img className='w-6' src={remove} alt="" /> delete all</button>}
        </div>
    )
}