import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Popular from "../../popular/Popular";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id || 1}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  return (
    <div className="flex justify-center bg-gray-50">
      <div className="max-w-6xl w-full mt-9 py-8 px-4 sm:px-6 lg:px-8">
        {product ? (
          <div>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-8">
              <div className="w-full md:w-[40%]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[300px] sm:h-[400px] object-contain rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="w-full md:w-[55%]">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  {product.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  {product.description}
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900 mb-2 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Xususiyatlari
              </h3>
              <table className="w-full border-collapse text-sm sm:text-base shadow-lg rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                    <td className="py-2 px-3 sm:px-4 font-semibold text-gray-700 border-b border-gray-200">
                      Title
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-gray-800 border-b border-gray-200">
                      {product.title}
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-100 transition-all duration-300">
                    <td className="py-2 px-3 sm:px-4 font-semibold text-gray-700 border-b border-gray-200">
                      Description
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-gray-800 border-b border-gray-200">
                      {product.description}
                    </td>
                  </tr>
                  <tr className="bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                    <td className="py-2 px-3 sm:px-4 font-semibold text-gray-700 border-b border-gray-200">
                      Price
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-gray-800 border-b border-gray-200">
                      ${product.price.toFixed(2)}
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-100 transition-all duration-300">
                    <td className="py-2 px-3 sm:px-4 font-semibold text-gray-700 border-b border-gray-200">
                      Category
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-gray-800 border-b border-gray-200">
                      {product.category}
                    </td>
                  </tr>
                  <tr className="bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                    <td className="py-2 px-3 sm:px-4 font-semibold text-gray-700 border-b border-gray-200">
                      Image
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-gray-800 border-b border-gray-200">
                      <a
                        href={product.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                      >
                        Rasmni ko‘rish
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 14H4m0-4h16m-8-8v16m-8 0h16M6 14l-4-4m0 0l4-4m12 8l4-4m0 0l-4-4"
                  />
                </svg>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-gray-900">
                    Bepul Yetkazib Berish
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Yetkazib berish uchun pochta indeksingizni kiriting
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h4l3-8 4 16 3-8h4"
                  />
                </svg>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-gray-900">
                    Qayta Yetkazib Berish
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    30 kun ichida mahsulot va pullaringizni qaytarib berish.
                    Tafsilotlar
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading product...</p>
        )}
        <Popular />
      </div>
    </div>
  );
};

export default Product;