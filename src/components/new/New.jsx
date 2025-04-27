import React from "react";
import Ps5 from "../../image/ps5.png";
import Gucci from "../../image/gucci.png";
import Women from "../../image/women.png";
import Amazon from "../../image/amazon.png";

const New = () => {
  // Statik ma'lumotlar (API o‘rniga)
  const banners = [
    {
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: Ps5,
      large: true, // Katta banner uchun belgi
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
    <div className="flex justify-center bg-white">
      <div className="w-[1200px] py-8">
        <h1 className="font-bold text-center text-gray-800 text-2xl mb-6">
          Yangi mahsulotlar
        </h1>
        <div className="flex flex-wrap gap-3">
          {/* Katta banner (chapda) */}
          <div className="w-full md:w-[58%] relative">
            <div className="bg-black rounded-lg overflow-hidden">
              <img
                src={banners[0].image}
                alt={banners[0].title}
                className="w-full h-[400px] object-contain"
              />
            </div>
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-2xl font-bold mb-2">{banners[0].title}</h2>
              <p className="text-sm mb-4">{banners[0].description}</p>
              <button className="border-b-2 border-white text-white bg-transparent px-0 py-1 hover:border-gray-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Kichik bannerlar (o‘ngda) */}
          <div className="w-full md:w-[40%] flex flex-col gap-3">
            {banners.slice(1).map((banner, index) => (
              <div key={index} className="relative">
                <div className="bg-black rounded-lg overflow-hidden">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-[190px] object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-bold mb-1">{banner.title}</h2>
                  <p className="text-xs mb-2">{banner.title === "Women's Collections" ? banner.description : ""}</p>
                  <p className="text-xs mb-2">{banner.title !== "Women's Collections" ? banner.description : ""}</p>
                  <button className="border-b-2 border-white text-white bg-transparent px-0 py-1 hover:border-gray-300 text-sm">
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