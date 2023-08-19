import data from '../../data.json'

export function Search({ setResults }) {

    function handleSearch(){
        const search = document.getElementById('search');
        if(search.value !== ''){
            const results = data.filter(job => {
                if(job.company.includes(search.value) || job.title.includes(search.value) || job.description.includes(search.value)){
                    return true;
                }
                return false;
            })
            setResults(results)
        }else {
            setResults(data);
        }
    }

    function handleSearchEnter(e){
        const searchValue = e.target.value;
        if(e.key === 'Enter'){
            if (searchValue !== ''){
                const results = data.filter(job => {
                    if(job.company.includes(searchValue) || job.title.includes(searchValue) || job.description.includes(searchValue)){
                        return true;
                    }
                    return false;
                })
                setResults(results)
            }else {
                setResults(data);
            }
        }
    }

    return (
        <div className="bg-[url('./assets/backgroundImg.png')] bg-cover bg-no-repeat col-span-2 rounded-lg w-full h-36 flex items-center justify-center my-5 max-laptop:col-auto relative">
            <input onKeyDown={(e) => handleSearchEnter(e)} className="rounded bg-white shadow-md shadow-black px-4 py-3 w-4/5 placeholder:text-[#b9bdcf] placeholder:text-xs placeholder:font-normal outline-0" placeholder="Title, companies, expertise or benefits" type="text" id="search" />
            <button onClick={handleSearch} className="absolute right-[11%] rounded bg-[#1e86ff] text-white text-base font-medium px-4 py-2">Search</button>
        </div>
    )
}