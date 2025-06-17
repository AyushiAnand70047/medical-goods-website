import React, { useState } from 'react';
import {
  Heart,
  Shield,
  Truck,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Download,
  Globe
} from 'lucide-react';

// Main App Component
const MedicalSurgicalWebsite = () => {
  // State for current page selection
  const [currentPage, setCurrentPage] = useState('home');
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for contact form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // State for newsletter email input
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Navigation items for header/menu
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'refund', label: 'Refund Policy' },
    { id: 'terms', label: 'Terms & Conditions' }
  ];

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Handle newsletter form submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
  };

  // Header Component (Logo, Navigation, Mobile Menu)
  const Header = () => (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-green-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">MedSurg</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${currentPage === item.id
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left ${currentPage === item.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Homepage Component
  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section with CTA and Stats */}
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

              {/* Call-to-Action Buttons */}
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

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-8 text-center">
                <Heart className="h-32 w-32 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 text-lg">Quality Healthcare Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">We are committed to excellence in healthcare supply</p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">All products are certified and meet international quality standards</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery to your doorstep nationwide</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 customer support from healthcare industry experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Hospital Administrator",
                text: "Excellent quality products and outstanding customer service. They have been our trusted supplier for over 3 years."
              },
              {
                name: "Michael Chen",
                role: "Pharmacy Owner",
                text: "Fast delivery and competitive prices. The mobile app makes ordering so convenient for our pharmacy."
              },
              {
                name: "Lisa Rodriguez",
                role: "Medical Distributor",
                text: "Professional service and reliable supply chain. They understand the healthcare industry's needs perfectly."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {/* 5 Star Icons */}
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-green-100 mb-8">
            Subscribe to our newsletter for the latest updates on medical supplies and healthcare trends
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );

  // About Us Page Component
  const AboutPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide healthcare professionals with access to the highest quality medical and surgical
                supplies, ensuring patient safety and care excellence through reliable products and exceptional service.
              </p>
            </div>

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
              {[
                { title: "Quality", desc: "We never compromise on the quality of our products" },
                { title: "Integrity", desc: "Honest and transparent business practices" },
                { title: "Innovation", desc: "Embracing new technologies and solutions" },
                { title: "Service", desc: "Dedicated to exceptional customer service" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  // Contact Page Component
  const ContactPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our healthcare experts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

            <div className="space-y-6">
              {/* Address Info */}
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-green-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    123 Healthcare Avenue<br />
                    Medical District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone Info */}
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-green-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email Info */}
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-green-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@medsurg.com</p>
                </div>
              </div>

              {/* Business Hours Info */}
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-green-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-green-600 font-medium mt-2">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Section */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Privacy Policy Page Component
  const PrivacyPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-gray-600">
          {/* Data Collection Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection and Usage</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account,
              make a purchase, or contact us for support. This may include your name, email address,
              phone number, billing address, and payment information.
            </p>
            <p>
              We use this information to provide our services, process transactions, communicate with you,
              and improve our offerings. We do not sell or rent your personal information to third parties.
            </p>
          </section>

          {/* Cookies Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience,
              analyze site traffic, and understand user preferences. You can control cookie settings through
              your browser preferences.
            </p>
            <p>
              We may use third-party analytics services to help us understand how our website is used.
              These services may collect information about your visits to our site and other sites.
            </p>
          </section>

          {/* User Rights Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Rights</h2>
            <p className="mb-4">
              You have the right to access, update, or delete your personal information. You may also
              opt out of certain communications from us. To exercise these rights, please contact us
              using the information provided on our Contact page.
            </p>
            <p>
              If you are a resident of California or the European Union, you may have additional rights
              under applicable privacy laws.
            </p>
          </section>

          {/* Third-Party Sharing Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Sharing</h2>
            <p className="mb-4">
              We may share your information with trusted third-party service providers who assist us in
              operating our business, such as payment processors, shipping companies, and technology providers.
              These parties are contractually bound to protect your information.
            </p>
            <p>
              We may also disclose information when required by law or to protect our rights and safety,
              or the rights and safety of others.
            </p>
          </section>

          {/* Policy Updates Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the new policy on our website and updating the effective date.
              Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Last Updated Info */}
          <div className="border-t pt-8">
            <p className="text-sm text-gray-500">
              Last updated: January 2025<br />
              For questions about this Privacy Policy, please contact us at privacy@medsurg.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Refund Policy Page Component
  const RefundPage = () => (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        <div className="space-y-8 text-gray-600">
          {/* Return Eligibility Section */}
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

          {/* Refund Process Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Contact Us", desc: "Email our customer service team at returns@medsurg.com with your order number and reason for return." },
                { step: "2", title: "Receive Authorization", desc: "We'll review your request and provide a Return Merchandise Authorization (RMA) number if approved." },
                { step: "3", title: "Ship Items", desc: "Package items securely with the RMA number and ship to our returns center using the provided address." },
                { step: "4", title: "Receive Refund", desc: "Once we receive and inspect your return, we'll process your refund within 5-7 business days." }
              ].map(({ step, title, desc }) => (
                <div className="flex items-start" key={step}>
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">{step}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Processing Timeframes Section */}
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

          {/* Contact for Assistance Section */}
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
  );

  // Terms and Conditions Page Component
  const TermsConditionsPage = () => (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        <div className="space-y-8 text-gray-600">

          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to MedSurg. These Terms and Conditions ("Terms") govern your use of our website
              and services. By accessing or using our platform, you agree to be bound by these Terms.
              If you do not agree with any part of these terms, you may not use our services.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Last Updated:</strong> January 2025. We reserve the right to modify these terms
                at any time. Changes will be effective immediately upon posting.
              </p>
            </div>
          </section>

          {/* Account Registration Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Registration</h2>
            <div className="space-y-4">
              <p>To purchase medical and surgical products, you must create an account and provide accurate information:</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Account Requirements:</h4>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                  <li>Valid professional license (where applicable)</li>
                  <li>Accurate contact and billing information</li>
                  <li>Verification of medical facility or practice</li>
                  <li>Compliance with local healthcare regulations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Usage and Compliance Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Usage and Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Medical Use Only</h4>
                <p className="text-red-700">All products are intended for use by qualified healthcare professionals only</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Regulatory Compliance</h4>
                <p className="text-green-700">Users must comply with FDA regulations and local healthcare laws</p>
              </div>
            </div>
            <p className="mt-4">
              You acknowledge that you are qualified to purchase and use medical products and will use them
              in accordance with manufacturer instructions and applicable regulations.
            </p>
          </section>

          {/* Orders and Payment Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Orders and Payment</h2>
            <div className="space-y-4">
              {[
                { title: "Order Acceptance", desc: "All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel orders." },
                { title: "Pricing", desc: "Prices are subject to change without notice. The price charged will be the price in effect at the time of order confirmation." },
                { title: "Payment Terms", desc: "Payment is due upon order placement unless credit terms have been established for your account." },
                { title: "Tax Responsibility", desc: "Applicable taxes will be added to your order total. You are responsible for any additional taxes or duties." }
              ].map(({ title, desc }, index) => (
                <div className="flex items-start" key={index}>
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">{index + 1}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping and Delivery Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping and Delivery</h2>
            <p className="mb-4">
              We strive to process and ship orders promptly. Delivery times are estimates and may vary
              based on product availability, shipping method, and destination.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Special Handling:</h4>
              <ul className="list-disc list-inside text-orange-700 space-y-1">
                <li>Temperature-sensitive products require special shipping</li>
                <li>Hazardous materials follow strict shipping protocols</li>
                <li>Some products may require signature confirmation</li>
                <li>International shipments subject to customs regulations</li>
              </ul>
            </div>
          </section>

          {/* Warranties and Disclaimers Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warranties and Disclaimers</h2>
            <div className="space-y-4">
              <p>
                Products are sold with manufacturer warranties where applicable. We disclaim all other
                warranties, express or implied, including merchantability and fitness for a particular purpose.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h4>
                <p className="text-gray-700">
                  Our liability is limited to the purchase price of the product. We are not liable for
                  consequential, incidental, or punitive damages arising from product use.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy and Data Protection Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
            <p className="mb-4">
              We are committed to protecting your privacy and maintaining the confidentiality of your
              personal and professional information in accordance with HIPAA and other applicable privacy laws.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Data Collection</h4>
                <p className="text-purple-700">We collect only necessary information for order processing and account management</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-2">Data Security</h4>
                <p className="text-indigo-700">All data is encrypted and stored securely using industry-standard protocols</p>
              </div>
            </div>
          </section>

          {/* Prohibited Uses Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">You may not:</h4>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>Resell products without proper authorization</li>
                <li>Use products for non-medical purposes</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to reverse engineer or modify products</li>
                <li>Share account credentials with unauthorized persons</li>
              </ul>
            </div>
          </section>

          {/* Termination Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to our services
              at any time, with or without cause, including for violations of these Terms.
            </p>
          </section>

          {/* Contact Information Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Legal Department</h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@medsurg.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567 ext. 3</p>
                <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM (EST)</p>
                <p><strong>Address:</strong> MedSurg Legal Department, 123 Health Ave, Wellness City, ST 12345</p>
              </div>
            </div>
          </section>

          {/* Governing Law Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the State where
              our company is incorporated, without regard to conflict of law principles. Any legal
              action or proceeding shall be brought exclusively in the courts of that jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );

  // Render selected page based on navigation
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'refund':
        return <RefundPage />;
      case 'terms':
        return <TermsConditionsPage />;
      default:
        return <HomePage />;
    }
  };

  // Main render
  return (
    <div>
      <Header />
      {renderPage()}
    </div>
  );
};

export default MedicalSurgicalWebsite;
