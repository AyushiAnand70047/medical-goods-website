import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { Link, useLocation } from 'react-router-dom';

// Header component for site navigation
const Header = () => {
  // State to control mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Get current route location
  const location = useLocation();

  // Close mobile menu when a nav item is clicked
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and site name */}
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-green-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">MedSurg</span>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              // Highlight active nav item
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* Show close icon if menu is open, else show menu icon */}
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {NAVIGATION_ITEMS.map((item) => {
                // Highlight active nav item in mobile menu
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block px-3 py-2 text-base font-medium w-full text-left ${
                      isActive
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
