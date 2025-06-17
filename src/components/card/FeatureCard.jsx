import React from 'react';
import { Shield, Truck, Star } from 'lucide-react';

// Map icon names to their respective Lucide icon components
const iconMap = {
  Shield,
  Truck, 
  Star
};

// FeatureCard displays an icon, title, and description with customizable colors
const FeatureCard = ({ icon, title, description, bgColor, iconColor }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="text-center p-6">
      {/* Icon container with background and color */}
      <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <IconComponent className={`h-8 w-8 ${iconColor}`} />
      </div>
      {/* Card title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* Card description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;