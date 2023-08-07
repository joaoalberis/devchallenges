
export function MenuTasks({active, setActive}) {

    function handleMenu(type){
        setActive(type)
    }

    return (
        <ul className="border-b border-[#bdbdbd] grid grid-cols-3 justify-between pr-4 gap-48 justify-items-center">
            <li onClick={() => handleMenu('All')} className={`${active === 'All' && 'border-[#2f80ed] border-b-2 rounded-t '}text-[#333] font-semibold text-sm cursor-pointer`}>All</li>
            <li onClick={() => handleMenu('Active')} className={`${active === 'Active' && 'border-[#2f80ed] border-b-2 rounded-t '}text-[#333] font-semibold text-sm cursor-pointer`}>Active</li>
            <li onClick={() => handleMenu('Completed')} className={`${active === 'Completed' && 'border-[#2f80ed] border-b-2 rounded-t '}text-[#333] font-semibold text-sm cursor-pointer`}>Completed</li>
        </ul>
    )
}