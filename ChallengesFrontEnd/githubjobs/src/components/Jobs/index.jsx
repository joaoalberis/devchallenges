import logo from '../../assets/boyesen.svg'
import {getMonth, getYear} from '../../lib/Data'
import { useEffect, useState } from 'react'
import { Pagination } from '../Pagination'

export function Jobs({ results }) {

    const [page, setPage] = useState(0)
    const totalPerPage = 4
    const totalPages = Math.ceil(results.length / totalPerPage)

    useEffect(() => {
        setPage(0)
    }, [results])

    return (
        <main className="flex flex-col gap-8">
            {results.length > 0 ? results.slice(page * totalPerPage, (page + 1) * totalPerPage).map(job => {
                return (
                    <a href={`/${job.id}`} className="grid grid-rows-3 grid-cols-[128px,1fr,1fr] gap-x-6 items-center shadow-sm shadow-black rounded p-3 text-[#334680] cursor-pointer" key={job.id}>
                        <img className="h-32 w-32 row-span-3" src={logo} alt="logo da compania" />
                        <h4 className='font-bold col-start-2 text-xs'>{job.company}</h4>
                        <p className="font-normal col-start-2  text-lg">{job.title}</p>
                        {job.type === 'Full Time' && <span className="col-start-2 rounded border border-[#334680] w-max h-max p-2 text-xs fonte-bold">Full time</span>}
                        <div className='flex gap-6 self-center justify-self-end font-medium text-xs'>
                            <p className="text-[#B9BDCF]">{job.location}</p>
                            <p className="text-[#B7BCCE]">{getMonth(job.created_at)}, {getYear(job.created_at)}</p>
                        </div>
                    </a>
                )
            }) : <h2>sem jobs</h2>}
            {results.length > 0 && <Pagination totalPages={totalPages} setPage={setPage} page={page} />}
        </main>
    )
}