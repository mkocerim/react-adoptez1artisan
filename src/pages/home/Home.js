import React, { useEffect, useState } from "react";
import useApi from "../../components/Hooks/useApi";

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
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 test-whıte bg-primary border-primary">
                  <h4 className="my-0 fw-normal">{category.name} </h4>
                </div>
                <div className="card-body">
                  <img src={category.image} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
