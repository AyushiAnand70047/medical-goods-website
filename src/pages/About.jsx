import React from 'react';
import { Heart } from 'lucide-react';
import { COMPANY_VALUES } from '../utils/constants';
import Header from '../components/common/Header';
import { useState } from 'react';

const About = () => {
  // State to track the current page for navigation
  const [currentPage, setCurrentPage] = useState('home');
  
  // Handler for page navigation
  const handlePageChange = (pageId) => {
    console.log('Navigate to page:', pageId);
    setCurrentPage(pageId);
  };

  return (
    <>
      {/* Header with navigation props */}
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title and Subtitle */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About MedSurg</h1>
            <p className="text-xl text-gray-600">Your trusted partner in healthcare solutions</p>
          </div>

          <div className="space-y-12">
            {/* Company Story Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, MedSurg has been at the forefront of providing premium medical and surgical
                supplies to healthcare professionals across the country. What started as a small family business
                has grown into one of the most trusted names in medical supply distribution, serving hospitals,
                clinics, pharmacies, and individual healthcare practitioners.
              </p>
            </section>

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide healthcare professionals with access to the highest quality medical and surgical
                  supplies, ensuring patient safety and care excellence through reliable products and exceptional service.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading distributor of medical supplies globally, revolutionizing healthcare delivery
                  through innovation, quality, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>

            {/* Company Values Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Render each company value */}
                {COMPANY_VALUES.map((value, index) => (
                  <div key={index} className="text-center">
                    {/* Value Icon */}
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    {/* Value Title */}
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    {/* Value Description */}
                    <p className="text-sm text-gray-600">{value.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;