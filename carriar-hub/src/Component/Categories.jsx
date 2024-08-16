import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {


    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[]);

    console.log(categories);
    return (
        <div className="grid grid-cols-4 gap-10 px-10 my-12">
            {
                categories.map((category)=><Category key={category.id} category={category}></Category>)
            }
            
        </div>
    );
};

export default Categories;