import { useParams } from "react-router-dom"
import data from '../../data.json'
import boyesen from '../../assets/boyesen.svg'
import { getMonth, getYear } from "../../lib/Data"

export function InfoJobs() {

    const { id } = useParams()

    return (
        <>
            {data.map(job => {
                if(job.id === id) {
                    return (
                        <div key={job.id} className="grid grid-cols-[300px,1fr] gap-y-6 gap-x-16">
                            <h1 className="text-[#282538] text-2xl font-light col-span-2"><span className="font-bold">Github</span> Jobs</h1>
                            <aside className="flex flex-col gap-4">
                                <a href="/" className="flex items-center cursor-pointer">
                                    <svg className="h-10 w-10 fill-[#1E86FF]" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"/></svg>
                                    <p className="text-[#1E86FF] font-medium text-sm">Back to search</p>
                                </a>
                                <p className="text-[#b9bdcf] text-sm font-bold uppercase">how to apply</p>
                                <p className="text-[#334680] font-medium text-sm" dangerouslySetInnerHTML={{__html: job.how_to_apply}} />
                            </aside>
                            <main className="grid grid-rows-[50px, 50px, max-content] gap-y-8">
                                <div className="grid grid-cols-[1fr,1fr] justify-self-start items-center gap-x-4 text-[#334680] font-bold">
                                    <h2 className="text-2xl">{job.title}</h2>
                                    {job.type === 'Full Time' && <span className="rounded border border-[#334680] py-2 px-3 text-sm w-max">Full time</span>}
                                    <span className="text-[#b7bcce] font-medium text-xs">{getMonth(job.created_at)}, {getYear(job.created_at)}</span>
                                </div>
                                <div className="grid grid-cols-[112px,max-content] grid-rows-[35px,35px] gap-x-4 items-center">
                                    <img className="h-28 w-28 rounded row-span-2" src={boyesen} alt="" />
                                    <p className="text-[#334680] font-bold text-lg">{job.company}</p>
                                    <p className="text-[#b9bdcf] font-medium text-xs">{job.location}</p>
                                </div>
                                <p className="font-normal text-[#334680] text-base" dangerouslySetInnerHTML={{__html: job.description}} />
                            </main>
                        </div>
                    )
                }
                return false
            })}
        </>
    )
}