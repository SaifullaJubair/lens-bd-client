import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./CategorySidebar.css";

const ProductsCategorySideBar = () => {
  const [hide, setHide] = useState(true);
  //   const [categories, setCategories] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setHide(!hide);
  };

  //   useEffect(() => {
  //     fetch("https://shovon-gallery-server.vercel.app/allcategories")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCategories(data);
  //         setLoading(false);
  //       });
  //   }, []);

  //   // if (loading) {
  //   //   return <Loader />;
  //   // }

  return (
    <div className="sidebar-container ">
      <div
        className={`sidebar-toggle ${hide ? "open" : ""}`}
        onClick={() => toggleSidebar()}
      >
        <div className="text-2xl pt-2 pl-2">{hide ? "close" : "menu"}</div>
      </div>
      {/* Sidebar Content */}
      <div className={`sidebar p-6 ${hide ? "open " : ""}`}>
        <div
          className="text-2xl absolute right-8 top-4 cursor-pointer md:hidden"
          onClick={() => toggleSidebar()}
        >
          {hide ? "close" : "menu"}
        </div>
        <div className="">
          <h2 className="text-lg font-semibold text-gray-800">Category</h2>
          <NavLink to="/category/all">
            <p
              className="text-sm font-medium mt-4"
              onClick={() => toggleSidebar()}
            >
              All
            </p>
          </NavLink>
          {/* {categories.map((category) => (
            <NavLink
              to={`/category/${category?.name}`}
              key={category?._id}
              onClick={() => toggleSidebar()}
            >
              <p className="text-sm font-medium mt-4">{category?.name}</p>
            </NavLink>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProductsCategorySideBar;
