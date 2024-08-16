import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./Style.css";

const Home = () => {
    return (
        <>
        <div className="m-auto container w-11/12">
            
            <Header></Header>
            <Outlet></Outlet>
           
        </div>
        <Footer></Footer>
        </>
        
    );
};

export default Home;