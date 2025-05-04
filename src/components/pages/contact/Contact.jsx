import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Header */}
        <div className="text-gray-500 text-sm mb-4">
          Bosh sahifa / <span className="text-blue-500">Aloqa</span>
        </div>

        {/* Contact Cards Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Contact Info */}
          <div className="bg-gray-50 p-4 rounded-lg w-full md:w-1/3">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <FaPhoneAlt />
                </div>
                <h3 className="ml-2 font-semibold">Bizga Qo'ng'iroq Qiling</h3>
              </div>
              <p className="text-gray-600">Biz 24/7 kun tartibida ishlaymiz</p>
              <p className="text-blue-500 font-semibold">
                Raqam: +998977777777
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <MdEmail />
                </div>
                <h3 className="ml-2 font-semibold">Bizga Yozing</h3>
              </div>
              <p className="text-gray-600">
                Shaklni to'ldiring va biz 24 soat ichida siz bilan bog'lanamiz
              </p>
              <p className="text-blue-500 font-semibold">
                Email: customer@exclusive.com
              </p>
              <p className="text-blue-500 font-semibold">
                Email: support@exclusive.com
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-2/3">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Ismingiz *"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Telefon raqamingiz *"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Sizning xabaringiz"
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Xabar yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
