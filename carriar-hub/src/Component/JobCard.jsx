import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const JobCard = ({job}) => {
    const navigate= useNavigate();
    const handleClick= ()=>{
        navigate(`../job/${job.id}`)
    }
  return (
    <div className="  bg-white border rounded-lg mx-10 shadow-sm p-4 my-4 flex items-center">
      <div className="flex-shrink-0 mr-4">
        <img
          className="h-24 w-24 rounded-lg"
          src={job.logo} 
       
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl manrope-extra-bold">{job.job_title}</h2>
        <p className="text-gray-600 manrope-medium">{job.company_name}</p>
        <div className="flex space-x-2 my-2">
         {
                (job.remote_or_onsite==="Remote") ? <button className="btn btn-sm btn-outline btn-info">Remote</button> : <button className="btn btn-sm btn-outline btn-info">Onsite</button>

            }
         </div>
        <div className="flex items-center text-gray-600 text-sm space-x-4">
          <div className="flex items-center space-x-1">
            <CiLocationOn></CiLocationOn>

            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-1">
          
          <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
            <span>Salary :{job.salary}</span>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <button onClick={handleClick} className="btn btn-theme">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
