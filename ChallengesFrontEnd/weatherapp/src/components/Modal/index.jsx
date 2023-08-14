import { useEffect } from "react"

export function Modal({message, type, onExit }) {

    // responsible for closing the modal after 4 seconds
    useEffect(() => {
        if(message) {
            setTimeout(() => onExit(), 4000)
        }
    }, [message, onExit])

    if (message !== undefined) {
        return (
            <div className="bg-orange-300 z-50 flex absolute translate-y-5 transition-all duration-500 right-5 rounded-xl p-10 shadow-sm shadow-black">
                {type === 'error' ? <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg> : <svg className="fill-green-500" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"/></svg>}
                <p className="m-auto text-lg uppercase text-red-700">{message}</p>
            </div>
        )
    }
    return (
        <div className="bg-orange-300 flex absolute -translate-y-full transition-all duration-100 right-5 rounded-xl p-10 shadow-sm shadow-black"> 
        </div>
    )
}