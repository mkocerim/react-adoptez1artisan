const Category =(props)=>{
    console.log('>>PROPS',props)
return(
    <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 test-whıte bg-primary border-primary">
                  <h4 className="my-0 fw-normal"><a href={'category/'+ props.category.slug}></a> </h4>
                </div>
                <div className="card-body">
                  <img src={props.category.image} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
)

}

export default Category