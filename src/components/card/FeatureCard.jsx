import React from 'react';
import { Shield, Truck, Star } from 'lucide-react';

const iconMap = {
  Shield,
  Truck, 
  Star
};

const FeatureCard = ({ icon, title, description, bgColor, iconColor }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="text-center p-6">
      <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <IconComponent className={`h-8 w-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;