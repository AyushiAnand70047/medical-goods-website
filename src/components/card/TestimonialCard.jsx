import React from 'react';
import { Star } from 'lucide-react';

// TestimonialCard component displays a testimonial with rating, text, and user info
const TestimonialCard = ({ name, role, text, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Render star icons based on the rating */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      {/* Display testimonial text */}
      <p className="text-gray-600 mb-4">"{text}"</p>
      <div>
        {/* Display user's name */}
        <div className="font-semibold text-gray-900">{name}</div>
        {/* Display user's role */}
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;