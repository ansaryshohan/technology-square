import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategorySection = ({ handleProducts }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let isLoaded = false;
    const loadCategories = async () => {
      const data = await fetch("/category.json");
      const result = await data.json();
      if (!isLoaded) {
        setCategories(result);
      }
    };
    loadCategories();
    return () => {
      isLoaded = true;
    };
  }, []);

  return (
    <div className="flex lg:flex-col border sticky top-20">
      {categories?.map((category) => (
        <div key={category.id} className=" text-center capitalize">
          <NavLink
            to={`/category/${category.category_name}`}
            className={({ isActive }) =>
              `border-b w-full inline-block p-3 text-xl font-semibold ${
                isActive ? "text-purple-500" : ""
              }`
            }
            onClick={() => handleProducts(`${category.category_name}`)}
          >
            {category.category_name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
