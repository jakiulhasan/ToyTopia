import React from "react";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <Helmet>
        <title>Terms & Conditions</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        ToyTopia — Terms & Conditions
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          Welcome to <span className="font-semibold">ToyTopia</span>! By
          accessing or using our website, you agree to comply with the following
          Terms and Conditions. Please read them carefully before making any
          purchase or using our services.
        </p>

        <h2 className="text-xl font-semibold">1. General Use</h2>
        <p>
          All products listed on ToyTopia are for personal use only. Any
          unauthorized resale, reproduction, or modification of our products or
          content is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold">2. Orders and Payments</h2>
        <p>
          Once an order is placed, you will receive a confirmation email. Orders
          can be canceled only before shipment. All payments must be made
          through secure and approved payment gateways.
        </p>

        <h2 className="text-xl font-semibold">3. Shipping and Delivery</h2>
        <p>
          We aim to deliver products on time, but shipping times may vary based
          on your location. ToyTopia is not responsible for delays caused by
          third-party couriers or unforeseen events.
        </p>

        <h2 className="text-xl font-semibold">4. Returns and Refunds</h2>
        <p>
          If you receive a damaged or defective item, please contact us within 7
          days of delivery. Refunds or replacements will be processed according
          to our return policy.
        </p>

        <h2 className="text-xl font-semibold">5. Privacy Policy</h2>
        <p>
          ToyTopia respects your privacy. We never share your personal
          information with third parties except when necessary to process your
          order. Read our full privacy policy for more details.
        </p>

        <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
        <p>
          ToyTopia reserves the right to update or modify these Terms and
          Conditions at any time. Continued use of our website means you accept
          the updated terms.
        </p>

        <p className="text-sm text-gray-500 mt-6">Last updated: October 2025</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
