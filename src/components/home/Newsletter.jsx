import React, { useState } from 'react';

// Newsletter subscription component
const Newsletter = () => {
  // State to store the user's email input
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Thank you for subscribing to our newsletter!');
    setEmail(''); // Clear the input field
  };

  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        {/* Section description */}
        <p className="text-xl text-green-100 mb-8">
          Subscribe to our newsletter for the latest updates on medical supplies and healthcare trends
        </p>

        {/* Newsletter subscription form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          {/* Email input field */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
            required
          />
          {/* Submit button */}
          <button
            type="submit"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;