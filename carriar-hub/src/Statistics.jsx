
import banner from "./assets/images/user.png"
import Categories from "./Component/Categories";
import Jobs from "./Component/Jobs";
const Statistics = () => {
    return (
        <div>
            <div className="section flex justify-between ">
                <div className="text py-7 px-6 w-8/12">
                    <h1 className="text-5xl manrope-extra-bold leading-tight my-5">
                    One Step<br/> Closer To Your <br/> <span className="text-theme">Dream Job</span>


                    </h1>
                    <p className="manrope-medium">
                    Explore thousands of job opportunities with all the 
information you need. Its your future. Come find it. Manage all 
your job application from start to finish.
                    </p>

                </div>
                <div className="section-image">
                <img src={banner} alt="" className="w-30" />
                
                      
                </div>
            </div>

            <div className="cat-section my-16">
                <div className="text-center manrope-medium">
                <h2 className='text-2xl mb-3 manrope-extra-bold'>Job Category List</h2>
                <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <Categories></Categories>


                <div className="text-center manrope-medium">
                <h2 className='text-2xl mb-3 manrope-extra-bold'>Featured Jobs</h2>
                <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>


                <Jobs></Jobs>
            </div>
        </div>
    );
};

export default Statistics;