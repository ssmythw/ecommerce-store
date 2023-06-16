import React from "react";
import { productAPI, useGetAllProductsQuery } from "../features/productsAPI";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image} alt="" />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">{product.price}</span>
                </div>
                <button>Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
