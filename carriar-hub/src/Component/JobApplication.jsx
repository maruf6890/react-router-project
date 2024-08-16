import { useLoaderData } from "react-router-dom";
import { getApplication } from "./storeapplication";
import JobCard from "./JobCard";
import { useMemo, useState } from "react";

const JobApplication = () => {
  const applicationId = getApplication();
  const jobs = useLoaderData();

  // Memoize the appliedJobs calculation
  const appliedJobs = useMemo(() => {
    return jobs.filter((item) => applicationId.includes(item.id));
  }, [jobs, applicationId]);

  const [displayedJobs, setDisplayedJobs] = useState(appliedJobs);

  const handleEvent = (jobType) => {
    console.log(jobType);
    if (jobType === "All") {
      setDisplayedJobs(appliedJobs);
    } else if (jobType === "Remote") {
      const filteredJobs = appliedJobs.filter((item) => item.remote_or_onsite === "Remote");
      setDisplayedJobs(filteredJobs);
    } else if (jobType === "Onsite") {
      const filteredJobs = appliedJobs.filter((item) => item.remote_or_onsite === "Onsite");
      setDisplayedJobs(filteredJobs);
    }
  };

  return (
    <div>
      <div className="flex pr-10 justify-end">
        <div className="dropdown">
          <button tabIndex={0} className="btn m-1">
            Select
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleEvent("All")}><a>All</a></li>
            <li onClick={() => handleEvent("Remote")}><a>Remote</a></li>
            <li onClick={() => handleEvent("Onsite")}><a>Onsite</a></li>
          </ul>
        </div>
      </div>
      {displayedJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobApplication;
