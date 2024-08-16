

const Category = ({category}) => {
    const {id,logo,category_name,availability}=category;
    return (
        <div className="cat-box p-5 border rounded-md bg-[#7E90FE] bg-opacity-5 " id={id} >
            <img className="h-10 w-10" src={logo}  alt={category_name} />

            <h3 className="text-2xl my-4 manrope-extra-bold">
            {category_name}
            </h3>
            <p className="text-sm manrope-normal">{availability}</p>
        </div>
    );
};

export default Category;