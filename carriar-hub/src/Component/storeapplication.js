const getApplication =()=>{
    const storedApplication=  localStorage.getItem('job-application');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return [];
}

const saveApplication =  id =>{
    const storedApplications= getApplication();
    const available = storedApplications.find(jobId => jobId===id);
    if(!available){
        storedApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedApplications));
    }
}
export {getApplication,saveApplication}