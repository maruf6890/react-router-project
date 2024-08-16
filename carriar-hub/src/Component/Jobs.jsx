import { useEffect, useState } from "react";
import JobElement from "./JobElement";


const Jobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
    fetch("jobs.json")
    .then(res=> res.json())
    .then(data => setJobs(data))
    },[]);
    console.log(jobs);

    return (
        <div className="grid grid-cols-2 gap-10 my-10">
            {
                jobs.map((job)=> <JobElement key={job.id} job={job}></JobElement>)
            }
        </div>
    );
};

export default Jobs;