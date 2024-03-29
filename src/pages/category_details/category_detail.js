import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../components/Hooks/useApi";
import ServiceBox from "./components/service_box";

const CategoryDetail = () => {
  const params = useParams();

  console.log(">>CAT DETAILS PARAMS", params);

  const api = useApi();

  const [categoryDetails, setCategoryDetails] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`public/categories/getBySlug/${params.slug}`)
      .then((response) => {
        console.log(">>CAT DETAIL RES", response.data.data);
        setCategoryDetails(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("CAT DETAIL ERR", err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <img src="loading.gif" />
      ) : (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {categoryDetails.services.map((service) => {
            return <ServiceBox key={service.id} serviceProp={service} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
