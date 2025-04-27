import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee"; // Importing react-fast-marquee

const Discount = () => {
  const [products, setProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState(3600); // Timer set to 1 hour (in seconds)
  const [showAll, setShowAll] = useState(false); // State to toggle all products

  // Fetch 17 products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=17")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Format time for display (MM:SS)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="relative bg-white rounded-lg shadow-md p-4 w-60 text-center mx-2">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        -35%
      </div>
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
      <h3 className="text-sm font-semibold text-gray-800 mb-2 truncate">
        {product.title}
      </h3>
      <p className="text-lg font-bold text-gray-800 mb-2">
        ${product.price.toFixed(2)}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Buyurtma berish
      </button>
    </div>
  );

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[1200px] mt-16 min-h-[500px]">
        {/* Header with Title and Timer */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-center text-gray-800 text-2xl">
            Yangi chegirmalar
          </h1>
          <div className="text-red-500 font-bold text-lg">
            {formatTime(timeLeft)}
          </div>
        </div>

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

        {/* Show All Products Button */}
        <div className="text-center mb-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
          >
            {showAll ? "Yashirish" : "Barcha mahsulotlarni ko'rish"}
          </button>
        </div>

        {/* All Products Section */}
        {showAll && (
          <div className="grid grid-cols-4 gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-4">
                Loading products...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Discount;