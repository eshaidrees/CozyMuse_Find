import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-gray-600 mb-6">
            At CozyMuse Finds, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect information when you subscribe to our newsletter, including your email address. We do not collect any sensitive personal information.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use your email address solely to send you our curated Amazon finds and related content. We do not sell or share your information with third parties.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Affiliate Disclosure</h2>
          <p className="text-gray-600 mb-6">
            CozyMuse Finds is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We may earn a commission from qualifying purchases made through our links at no additional cost to you.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this privacy policy, please contact us through our website.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;