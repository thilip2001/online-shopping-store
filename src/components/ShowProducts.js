const ShowProducts = (props) => {
  return (
    <>
      {props.filter.map((product) => {
        return (
          <>
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-0 text-primary">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bolder text-secondary">${product.price}</p>
                  <a href="/" className="btn btn-outline-primary">
                     Buy Now
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default ShowProducts;