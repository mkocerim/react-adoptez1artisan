import React, { useEffect, useState } from "react";
import useApi from "../../components/Hooks/useApi";
import Category from "./components/category";
import { connect, useDispatch } from "react-redux";

const Home = (props) => {
  const [categories, setCategories] = useState([]);
  console.log(">> HOME COMPONENT CONTENT", props, categories);

  const api = useApi();

  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("public/categories/listMainCategories")
      .then((response) => {
        console.log(">>CATEOGRY RESP");
        setCategories(response.data.data);
      })
      .catch((err) => {
        console.log(">>CATEGORY ERR", err);
      });
  }, []);

  const onChange = (e) => {
    dispatch({
      type: "set_token",
      payload: {
        token: e.target.value,
      },
    });
  };
  return (
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categories.map((category) => {
          return <Category key={category.id} categoryProp={category} />;
        })}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log(">>HOME MAPS STATE", state);
  /*
    {
      appDataState: OBJECT,
      authState: OBJECT,
    }
    */
  return {
    authState: state.authState,

    // ...state,
  };
};

export default connect(mapStateToProps)(Home);
