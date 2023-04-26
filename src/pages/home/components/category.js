const Category = (props) => {
  console.log(">>CATEGORY PROPS", props);
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
          <h4 className="my-0 fw-normal">
            <a
              href={"category/" + props.categoryProp.slug}
              style={{ textDecoration: "none", color: "white" }}
            >
              {props.categoryProp.name}
            </a>
          </h4>
        </div>
        <div className="card-body">
          <img src={props.categoryProp.image} style={{ width: "100%" }} />
        </div>
        <a
          href={`/category-details/${props.categoryProp.slug}`}
          className="btn btn-primary"
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default Category;
