
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveApplication } from './storeapplication';

const JobDetail = () => {

   const pageData= useLoaderData();
   const params= useParams();
   const pageId= parseInt(params.jobId);
    const job= pageData.find((element)=> element.id === pageId)    
    

    const handleClick= ()=>{
        saveApplication(job.id);
    }
    return (
        <div>
            job detail page
         
      <div className="bg-white rounded-lg shadow-lg p-6 mx-20 mb-20">
        <div className="grid md:grid-cols-6 gap-6">
          <div className='col-span-4'>
            <h2 className="text-xl font-semibold mb-4">Job Description:</h2>
            <p className="mb-4">
                {job.job_description}
            </p>

            <h2 className="text-xl font-semibold mb-4">Job Responsibility:</h2>
            <p className="mb-4">
              {job.job_responsibility}
            </p>

            <h2 className="text-xl font-semibold mb-4">Educational Requirements:</h2>
            <p className="mb-4">
               {job.educational_requirements}
            </p>

            <h2 className="text-xl font-semibold mb-4">Experiences:</h2>
            <p>{job.experiences}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg col-span-2">
            <h2 className="text-xl font-semibold mb-4">Job Details</h2>
            <hr className='bg-theme pt-1' />
            <p className="mb-2"><strong>Salary:</strong> {job.salary} (Per Month)</p>
            <p className="mb-4"><strong>Job Title:</strong> {job.job_title}</p>
            <hr className='bg-theme pt-1' />
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2"><strong>Phone:</strong> {job.contact_information.phone}</p>
            <p className="mb-2"><strong>Email:</strong> {job.contact_information.email}</p>
            <p className="mb-4"><strong>Address:</strong> {job.contact_information.address}</p>

            <button onClick={handleClick} className="btn-theme py-2 px-4 btn  rounded-md w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
  
        </div>
    );
};

export default JobDetail;