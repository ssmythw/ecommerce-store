import React from "react";
import { useGetAllProductsQuery } from "../features/productsAPI";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAllProductsQuery();
  const auth = useSelector((state) => state.auth);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

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
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
