import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // URL dan ID ni olish uchun
import Popular from "../../popular/Popular"; // Yo‘lni moslashtiring

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // URL dan mahsulot ID sini olish

  // API dan mahsulotni olish
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id || 1}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] min-h-[200vh] mt-9 py-8">
        {product ? (
          <div>
            {/* Mahsulot detal bo‘limi */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="w-full md:w-[40%]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[400px] object-contain rounded-lg"
                />
              </div>
              <div className="w-full md:w-[55%]">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-gray-800 mb-4">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Jadval bo‘limi */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Xususiyatlari
              </h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-semibold text-gray-600">Title</td>
                    <td className="py-2 px-4 text-gray-800">{product.title}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-semibold text-gray-600">Description</td>
                    <td className="py-2 px-4 text-gray-800">{product.description}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-semibold text-gray-600">Price</td>
                    <td className="py-2 px-4 text-gray-800">${product.price.toFixed(2)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-semibold text-gray-600">Category</td>
                    <td className="py-2 px-4 text-gray-800">{product.category}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-semibold text-gray-600">Image</td>
                    <td className="py-2 px-4 text-gray-800">
                      <a href={product.image} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Rasmni ko‘rish
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Yetkazib berish bo‘limi */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600 mr-3"
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
                  <h4 className="font-semibold text-gray-800">Bepul Yetkazib Berish</h4>
                  <p className="text-gray-600">
                    Yetkazib berish uchun pochta indeksingizni kiriting
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-600 mr-3"
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
                  <h4 className="font-semibold text-gray-800">Qayta Yetkazib Berish</h4>
                  <p className="text-gray-600">
                    30 kun ichida mahsulot va pullaringizni qaytarib berish. Tafsilotlar
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