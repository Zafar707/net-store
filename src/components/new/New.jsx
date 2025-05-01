import React from "react";
import Ps5 from "../../image/ps5.png";
import Gucci from "../../image/gucci.png";
import Women from "../../image/women.png";
import Amazon from "../../image/amazon.png";

const New = () => {
  const banners = [
    {
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: Ps5,
      large: true,
    },
    {
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      image: Women,
      large: false,
    },
    {
      title: "Speakers",
      description: "Amazon wireless speakers",
      image: Amazon,
      large: false,
    },
    {
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      image: Gucci,
      large: false,
    },
  ];

  return (
    <div className="flex justify-center bg-gray-50">
      <div className="max-w-6xl w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="font-extrabold text-center text-gray-900 text-xl sm:text-2xl mb-4 sm:mb-6 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Yangi mahsulotlar
        </h1>
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
          <div className="w-full md:w-[58%] relative group">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img
                src={banners[0].image}
                alt={banners[0].title}
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-contain transform group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-1 sm:mb-2">
                {banners[0].title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-4">
                {banners[0].description}
              </p>
              <button className="border-b-2 border-white text-white bg-transparent px-0 py-1 hover:border-gray-300 hover:text-gray-200 transition-all duration-300 text-xs sm:text-sm">
                Shop Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex flex-col gap-3 sm:gap-4">
            {banners.slice(1).map((banner, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-[150px] sm:h-[190px] object-contain transform group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <h2 className="text-sm sm:text-lg font-extrabold mb-1">
                    {banner.title}
                  </h2>
                  <p className="text-xs sm:text-xs mb-1 sm:mb-2">
                    {banner.title === "Women's Collections" ? banner.description : ""}
                  </p>
                  <p className="text-xs sm:text-xs mb-1 sm:mb-2">
                    {banner.title !== "Women's Collections" ? banner.description : ""}
                  </p>
                  <button className="border-b-2 border-white text-white bg-transparent px-0 py-1 hover:border-gray-300 hover:text-gray-200 transition-all duration-300 text-xs">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;