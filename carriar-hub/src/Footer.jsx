
import socialIcon from "./assets/icons/social.png"
const Footer = () => {
    return (
        <div className="bg-gray-900">
            <footer className="m-auto w-11/12 text-[#afafaf] py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-4">CareerHub</h3>
                <p className="mb-4">There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
                <div className="">
                    <a href="#" className="text-white"><img src={socialIcon} alt="Facebook" className="w-24 h-6"/></a>
                    
                </div>
            </div>
             <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul>
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Work</a></li>
                    <li><a href="#" className="hover:text-white">Latest News</a></li>
                    <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
            </div>
          
            <div>
                <h3 className="font-semibold text-lg mb-4">Product</h3>
                <ul>
                    <li><a href="#" className="hover:text-white">Prototype</a></li>
                    <li><a href="#" className="hover:text-white">Plans & Pricing</a></li>
                    <li><a href="#" className="hover:text-white">Customers</a></li>
                    <li><a href="#" className="hover:text-white">Integrations</a></li>
                </ul>
            </div>
       
            <div>
                <h3 className="font-semibold text-lg mb-4">Support</h3>
                <ul>
                    <li><a href="#" className="hover:text-white">Help Desk</a></li>
                    <li><a href="#" className="hover:text-white">Sales</a></li>
                    <li><a href="#" className="hover:text-white">Become a Partner</a></li>
                    <li><a href="#" className="hover:text-white">Developers</a></li>
                </ul>
            </div>
         
            <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul>
                    <li><a href="#" className="hover:text-white">524 Broadway, NYC</a></li>
                    <li><a href="#" className="hover:text-white">+1 777 - 978 - 5570</a></li>
                </ul>
            </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
            <div className="container mx-auto flex justify-between text-sm">
                <p>&copy; 2023 <span className="font-bold">CareerHub</span>. All Rights Reserved.</p>
                <p>Powered by <span className="font-bold">CareerHub</span></p>
            </div>
        </div>
    </footer>
        </div>
    );
};

export default Footer;