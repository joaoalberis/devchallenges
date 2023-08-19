export function Pagination({ totalPages, setPage, page }){

    function handlePageChange(newPage){
        setPage(newPage)
    }

    function handleNextPage(){
        setPage(prev => {
            if(prev === totalPages - 1) return prev
            return prev + 1
        })
    }

    function handlePreviousPage(){
        setPage(prev => {
            if(prev === 0){
                return prev
            }
            return prev - 1
        })
    }

    return (
        <div className="flex flex-wrap gap-2 items-center self-end">
            <svg onClick={handlePreviousPage} className="text-[#b9bdcf] font-normal text-xs rounded border border-[#b7bcce] h-10 w-10 fill-[#b7bcce] hover:border-[#1e86ff] hover:text-[#1e86ff] cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"/></svg>
            {[...Array(totalPages)].map((_, i) => (
            <button className={`${page == i && 'bg-[#1E86FF] text-white hover:text-black '}text-[#b9bdcf] font-normal text-xs rounded border border-[#b7bcce] px-4 py-3 hover:border-[#1e86ff] hover:text-[#1e86ff]`} key={i} onClick={() => handlePageChange(i)}>
                {i + 1}
            </button>
            ))}
            <svg onClick={handleNextPage} className="text-[#b9bdcf] font-normal text-xs rounded border border-[#b7bcce] h-10 w-10 fill-[#b7bcce] hover:border-[#1e86ff] hover:text-[#1e86ff] cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>
        </div>
    )
}