import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Support = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Need Help? We're Here!
      </h2>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-3xl text-blue-500 mb-2" />
          <p className="font-semibold">Call Us</p>
          <p className="text-gray-600">+880 1234 567 890</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-3xl text-green-500 mb-2" />
          <p className="font-semibold">Email</p>
          <p className="text-gray-600">support@toytopia.com</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex space-x-3 text-xl text-gray-600">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          <div className="p-4 border rounded-lg hover:shadow transition-shadow">
            <p className="font-medium">How do I track my order?</p>
            <p className="text-gray-600 mt-1">
              You can track your order from your profile under 'My Orders'.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow transition-shadow">
            <p className="font-medium">What is your return policy?</p>
            <p className="text-gray-600 mt-1">
              Returns are accepted within 30 days of delivery with original
              packaging.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow transition-shadow">
            <p className="font-medium">Do you offer international shipping?</p>
            <p className="text-gray-600 mt-1">
              Yes! Shipping rates and delivery times vary by country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
