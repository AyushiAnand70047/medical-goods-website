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
          
          {/* Policy Overview */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Policy Overview</h3>
            <p className="text-blue-800">
              <strong>Effective Date:</strong> January 2025. This refund policy applies to all purchases made through MedSurg platform. 
              Due to the nature of medical and surgical products, special conditions apply to ensure safety and regulatory compliance.
            </p>
          </div>

          <div className="space-y-8 text-gray-600">

            {/* Return Eligibility Conditions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Eligibility Conditions</h2>
              <p className="mb-4">
                Items must be returned within 30 days of delivery in original, unopened packaging.
                Due to health and safety regulations, certain medical and surgical products cannot be returned
                once opened or used.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✓ Returnable Items:</h4>
                  <ul className="list-disc list-inside text-green-700 space-y-1">
                    <li>Unopened medical equipment</li>
                    <li>Unused surgical instruments</li>
                    <li>Sealed diagnostic supplies</li>
                    <li>Equipment with original packaging</li>
                    <li>Items ordered in error</li>
                    <li>Defective products upon arrival</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">✗ Non-Returnable Items:</h4>
                  <ul className="list-disc list-inside text-red-700 space-y-1">
                    <li>Opened sterile products</li>
                    <li>Single-use medical devices</li>
                    <li>Prescription items</li>
                    <li>Custom or personalized products</li>
                    <li>Implantable devices</li>
                    <li>Perishable or time-sensitive items</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Special Conditions:</h4>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                  <li>Items must be in original manufacturer packaging</li>
                  <li>All accessories, manuals, and documentation must be included</li>
                  <li>Products must not show signs of use or contamination</li>
                  <li>Return authorization required before shipping</li>
                  <li>Customer responsible for return shipping costs (unless defective)</li>
                </ul>
              </div>
            </section>

            {/* Refund Process Steps */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process Steps</h2>
              <p className="mb-6 text-gray-700">
                Follow these steps to ensure a smooth return and refund process:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Contact Us",
                    desc: "Email our customer service team at returns@medsurg.com with your order number, item details, and reason for return. Include photos if the item is defective.",
                    timeframe: "Response within 24 hours"
                  },
                  {
                    step: "2",
                    title: "Receive Authorization",
                    desc: "We'll review your request and provide a Return Merchandise Authorization (RMA) number if approved. This includes return instructions and shipping labels.",
                    timeframe: "1-2 business days"
                  },
                  {
                    step: "3",
                    title: "Package & Ship Items",
                    desc: "Package items securely in original packaging with the RMA number clearly visible. Use the provided shipping label and drop off at authorized carrier location.",
                    timeframe: "Ship within 7 days of RMA"
                  },
                  {
                    step: "4",
                    title: "Inspection & Processing",
                    desc: "Our team will inspect the returned items to verify condition and eligibility. You'll receive email updates on the status of your return.",
                    timeframe: "2-3 business days after receipt"
                  },
                  {
                    step: "5",
                    title: "Receive Refund",
                    desc: "Once approved, your refund will be processed to the original payment method. You'll receive a confirmation email with transaction details.",
                    timeframe: "3-5 business days after approval"
                  }
                ].map(({ step, title, desc, timeframe }) => (
                  <div className="flex items-start border-l-4 border-blue-500 pl-4" key={step}>
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">
                      {step}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900">{title}</h4>
                      <p className="text-gray-600 mb-1">{desc}</p>
                      <p className="text-sm text-blue-600 font-medium">⏱ {timeframe}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Processing Timeframes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Timeframes</h2>
              <p className="mb-6 text-gray-700">
                Processing times vary depending on the type of return and reason:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Standard Returns</h4>
                  <p className="text-blue-700 mb-2">5-7 business days after we receive your return</p>
                  <p className="text-sm text-blue-600">For unopened items in original condition</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Defective Items</h4>
                  <p className="text-green-700 mb-2">2-3 business days (expedited processing)</p>
                  <p className="text-sm text-green-600">For manufacturing defects or shipping damage</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">High-Value Items</h4>
                  <p className="text-orange-700 mb-2">7-10 business days</p>
                  <p className="text-sm text-orange-600">Additional verification required for items over $5,000</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Refund Timeline Breakdown:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p><strong>Credit Card:</strong> 3-5 business days</p>
                    <p><strong>Debit Card:</strong> 5-7 business days</p>
                    <p><strong>Bank Transfer:</strong> 7-10 business days</p>
                  </div>
                  <div>
                    <p><strong>PayPal:</strong> 1-2 business days</p>
                    <p><strong>Store Credit:</strong> Immediate</p>
                    <p><strong>Check (if requested):</strong> 10-14 business days</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Refund Methods */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Methods</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Refunds are typically processed to the original payment method. Alternative options may be available:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Original Payment Method</h4>
                    <p className="text-purple-700 text-sm">Default option - refund goes back to the card or account used for purchase</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Store Credit</h4>
                    <p className="text-indigo-700 text-sm">Available for faster processing - never expires and can be used for future purchases</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Circumstances */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Circumstances</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Damaged or Defective Items</h4>
                  <p className="text-red-700 mb-2">If you receive damaged or defective items:</p>
                  <ul className="list-disc list-inside text-red-700 space-y-1">
                    <li>Contact us immediately (within 48 hours of delivery)</li>
                    <li>Provide photos of the damage or defect</li>
                    <li>Keep all original packaging</li>
                    <li>We'll expedite replacement or full refund including shipping costs</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Wrong Item Shipped</h4>
                  <p className="text-yellow-700 mb-2">If we shipped the wrong item:</p>
                  <ul className="list-disc list-inside text-yellow-700 space-y-1">
                    <li>We'll cover all return shipping costs</li>
                    <li>Expedited processing for replacement</li>
                    <li>Compensation for any inconvenience caused</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information for Assistance */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information for Assistance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Returns Department</h4>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> returns@medsurg.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567 ext. 2</p>
                    <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM (EST)</p>
                    <p><strong>Emergency Line:</strong> +1 (555) 123-4567 ext. 911</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Returns Center Address</h4>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>MedSurg Returns Center</strong></p>
                    <p>123 Health Ave</p>
                    <p>Wellness City, ST 12345</p>
                    <p><strong>Hours:</strong> Mon - Fri, 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-blue-600">*RMA number required for all returns</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Need Immediate Assistance?</h4>
                <p className="text-blue-700">
                  For urgent issues with critical medical supplies, use our emergency contact line. 
                  We're here to help ensure patient care is never compromised.
                </p>
              </div>
            </section>

            {/* Additional Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Information</h2>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Quality Guarantee</h4>
                  <p className="text-green-700">
                    We stand behind the quality of our products. If you're not satisfied with your purchase, 
                    we'll work with you to find a solution that meets your needs.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Return Tracking</h4>
                  <p className="text-purple-700">
                    Once you ship your return, you can track its status by logging into your account 
                    or contacting our returns department with your RMA number.
                  </p>
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