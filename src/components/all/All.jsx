import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee"; // Importing react-fast-marquee

const All = () => {
  const [products, setProducts] = useState([]);

  // Fetch 17 products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=17")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Product Card Component
  const ProductCard = ({ product }) => {
    // Tasodifiy "NEW" belgisi qo‘shish uchun
    const isNew = Math.random() > 0.5; // 50% ehtimollik bilan "NEW" bo‘ladi

    // Tasodifiy reyting (3 dan 5 gacha)
    const rating = Math.floor(Math.random() * 3) + 3;

    return (
      <div className="relative bg-white rounded-lg shadow-md p-4 w-60 text-center mx-2">
        {isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.293l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 mx-auto mb-4 object-contain"
        />
        <p className="text-lg font-bold text-gray-800 mb-2">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex justify-center mb-2">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Buyurtma berish
        </button>
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] h-[500px] mt-9 py-8">
        {/* Marquee Section */}
        <div className="mb-8">
          {products.length > 0 ? (
            <Marquee speed={50} gradient={false}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Marquee>
          ) : (
            <p className="text-gray-500 text-center">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default All;