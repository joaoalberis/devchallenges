export function TodoAdd({updateTasks}) {

    function handleAddTask() {
        const newTask = document.getElementById('newTask');
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        for(let items of tasks) {
            if(items.name === newTask.value) {
                newTask.style.borderColor = 'red';
                return
            }
        }
        const task = {
            name: newTask.value,
            category: "Active"
        }
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        newTask.style.borderColor = '#bdbdbd';
        newTask.value = '';
        updateTasks()
    }


    return (
        <div className="flex gap-3 my-5">
            <input className="w-full rounded-xl border border-[#bdbdbd] p-3 placeholder:text-[#828282] placeholder:text-sm font-normal" type="text" placeholder='add details' name="" id="newTask" />
            <button className="rounded-xl bg-[#2f80ed] shadow-inner px-8 py-4 shadow-[rgba(127,127,243,0.40)] text-white text-sm font-semibold" onClick={handleAddTask}>Add</button>
        </div>
    )
}