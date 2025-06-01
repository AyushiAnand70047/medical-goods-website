import React, { useState } from 'react';
import Header from '../components/common/Header'; // Adjust the path if needed

const RefundPolicy = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (pageId) => {
    console.log('Navigate to page:', pageId);
    setCurrentPage(pageId);
  };

  return (
    <>
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="min-h-screen py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          <div className="space-y-8 text-gray-600">

            {/* Return Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Eligibility</h2>
              <p className="mb-4">
                Items must be returned within 30 days of delivery in original, unopened packaging.
                Due to health and safety regulations, certain medical and surgical products cannot be returned
                once opened or used.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Non-Returnable Items:</h4>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                  <li>Opened sterile products</li>
                  <li>Single-use medical devices</li>
                  <li>Prescription items</li>
                  <li>Custom or personalized products</li>
                </ul>
              </div>
            </section>

            {/* Refund Process */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Contact Us",
                    desc: "Email our customer service team at returns@medsurg.com with your order number and reason for return."
                  },
                  {
                    step: "2",
                    title: "Receive Authorization",
                    desc: "We'll review your request and provide a Return Merchandise Authorization (RMA) number if approved."
                  },
                  {
                    step: "3",
                    title: "Ship Items",
                    desc: "Package items securely with the RMA number and ship to our returns center using the provided address."
                  },
                  {
                    step: "4",
                    title: "Receive Refund",
                    desc: "Once we receive and inspect your return, we'll process your refund within 5-7 business days."
                  }
                ].map(({ step, title, desc }) => (
                  <div className="flex items-start" key={step}>
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                      {step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Processing Timeframes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Timeframes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Standard Returns</h4>
                  <p className="text-blue-700">5-7 business days after we receive your return</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Defective Items</h4>
                  <p className="text-green-700">2-3 business days (expedited processing)</p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact for Assistance</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Returns Department</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> returns@medsurg.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567 ext. 2</p>
                  <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM (EST)</p>
                  <p><strong>Address:</strong> MedSurg Returns Center, 123 Health Ave, Wellness City, ST 12345</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
