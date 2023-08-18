export function Checkbox({checked, identifier, change, nameLabel}) {

    return (
        <div className="flex items-center">
            <input onClick={change} checked={checked} className='hidden' type="checkbox" id={identifier} />
            <label className={`${checked && `after:content-["✓"] after:absolute after:left-0.5 after:top-0.5 before:bg-cyan-500 after:text-white`} text-black text-lg font-medium relative pl-6 before:content-[""] before:absolute before:w-4 before:h-4 before:border before:left-0 before:top-2 before:rounded before:border-[#828282]`} htmlFor={identifier}>{nameLabel} </label>
        </div>
    )
}