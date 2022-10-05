import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className=" card bg-dark text-center shadow-1-strong text-white border-0">
        <img
          className="card-img"
          src="hero-bg4.jpg"
          alt="heroImage"
          height="500px"
        />
        <div className="card-img-overlay d-flex flex-column">
          <h5 className="card-title  display-4 text-primary">
            Welcome to SQS Online Shop
          </h5>
          <p className="card-text fs-5 text-dark">
            Super Deal! Free shipping on Orders Above $50
          </p>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
