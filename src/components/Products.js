import React, { useState, useEffect } from "react";
import ShowProducts from "./ShowProducts";

function Products(props) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
        setData(await response.clone().json());
        setFilter(await response.json());

      return () => {
       
      };
    };
    getProducts();
  }, []);

  return (
    <div>
      <div className="container my-2 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center text-primary">
              All Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          <ShowProducts filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default Products;
