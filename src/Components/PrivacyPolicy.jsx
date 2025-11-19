import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        ToyTopia — Privacy Policy
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          At <span className="font-semibold">ToyTopia</span>, your privacy is
          important to us. This Privacy Policy explains how we collect, use, and
          protect your personal information when you visit our website or make a
          purchase.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We may collect personal details such as your name, email address,
          shipping address, and payment information when you make a purchase or
          create an account. We also collect non-personal data such as browser
          type, IP address, and usage statistics to improve your experience.
        </p>

        <h2 className="text-xl font-semibold">
          2. How We Use Your Information
        </h2>
        <p>
          Your information helps us process orders, communicate updates, and
          enhance your shopping experience. We may use your email to send
          special offers or updates — you can opt out at any time.
        </p>

        <h2 className="text-xl font-semibold">3. Data Protection</h2>
        <p>
          We implement secure technologies and encryption to protect your data.
          However, please note that no online transmission is 100% secure. We
          continually work to safeguard your personal information.
        </p>

        <h2 className="text-xl font-semibold">4. Cookies</h2>
        <p>
          ToyTopia uses cookies to remember your preferences and improve website
          performance. You can choose to disable cookies in your browser
          settings, but some features may not function properly.
        </p>

        <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
        <p>
          We may use trusted third-party services (like payment processors or
          delivery partners) to complete transactions. These partners are only
          given the data necessary to perform their specific tasks.
        </p>

        <h2 className="text-xl font-semibold">6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data.
          To make a request, please contact us through our support page.
        </p>

        <h2 className="text-xl font-semibold">7. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally to reflect new
          practices or legal requirements. Any changes will be posted on this
          page with the updated date.
        </p>

        <p className="text-sm text-gray-500 mt-6">Last updated: October 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
