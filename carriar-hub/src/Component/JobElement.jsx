
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
const JobElement = ({job}) => {
    const {id,logo,job_title,remote_or_onsite,company_name,job_type,location,salary}=job;
    const detailLink= `/job/${id}`
    return (
        
        <div className="job-box border border-gray-300 p-7 rounded-md">
            
            <img src={logo} alt="" className="w-32 h-10 job-img" />
            <h3 className="text-xl mt-4 mb-2 manrope-extra-bold">
            {job_title}
            </h3>
            <p className="text-sm manrope-normal mb-4">{company_name}</p>
            
            {
                (remote_or_onsite==="Remote") ? <button className="btn btn-sm btn-outline btn-info">Remote</button> : <button className="btn btn-sm btn-outline btn-info">Onsite</button>

            }
            <p className="my-3 manrope-normal"><CiLocationOn></CiLocationOn> {location} <pre className="inline">  </pre> <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar> Salary: {salary}</p>
            
            <Link className="btn btn-theme btn-md" to={detailLink}>View Detail</Link>
            
            

        </div>
    );
};

export default JobElement;