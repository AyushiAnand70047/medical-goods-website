import React from 'react';
import { Heart, Download, Globe } from 'lucide-react';
import { STATS } from '../../utils/constants';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Medical & Surgical Supplies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Trusted by healthcare professionals worldwide. We provide high-quality medical equipment
              and surgical supplies to distributors, pharmacies, doctors, and direct customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Download Android App
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center">
                <Globe className="mr-2 h-5 w-5" />
                Visit iOS Portal
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-green-600">{STATS.PRODUCTS}</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{STATS.CLIENTS}</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{STATS.SUPPORT}</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-green-100 rounded-2xl p-8 text-center">
              <Heart className="h-32 w-32 text-green-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg">Quality Healthcare Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;