const ServiceBox = (props) => {
  console.log(">>PROPS", props);
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 test-whıte bg-primary border-primary">
          <h4 className="my-0 fw-normal">
            <a href={"service/" + props.service.slug}>
              {props.service.name}
            </a>{" "}
          </h4>
        </div>
        <div className="card-body">
          <img src={props.service.image} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
