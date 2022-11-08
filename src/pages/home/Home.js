import React, { useEffect, useState } from "react";
import useApi from "../../components/Hooks/useApi";
import Category from "./components/category";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const api = useApi();

  useEffect(() => {
    api
      .get("public/categories/listMainCategories")
      .then((response) => {
        console.log(">>CATEOGRY RESP");
        setCategories(response.data.data)
      })
      .catch((err) => {
        console.log(">>CATEGORY ERR", err);
      });
  }, []);

  return (
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categories.map((category) => {
          return (
            <Category category={category.} />
            
          );
        })}
      </div>
    </main>
  );
};

export default Home;
