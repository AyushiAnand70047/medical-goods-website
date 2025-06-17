import React from 'react';
import FeatureCard from '../card/FeatureCard';
import { FEATURES } from '../../utils/constants';

// WhyChooseUs component displays the reasons to choose the company
const WhyChooseUs = () => {
  return (
    // Section for "Why Choose Us"
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">We are committed to excellence in healthcare supply</p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            // Render each feature as a card
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;