import React, { useState } from 'react';
import Header from '../components/common/Header';

const TermsConditions = () => {
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
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
                    <div className="space-y-8 text-gray-600">

                        {/* Introduction */}
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

                        {/* Account Registration */}
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

                        {/* Product Usage and Compliance */}
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

                        {/* Orders and Payment */}
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

                        {/* Shipping and Delivery */}
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

                        {/* Warranties and Disclaimers */}
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

                        {/* Privacy and Data Protection */}
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

                        {/* Prohibited Uses */}
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

                        {/* Termination */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                            <p>
                                We reserve the right to terminate or suspend your account and access to our services
                                at any time, with or without cause, including for violations of these Terms.
                            </p>
                        </section>

                        {/* Contact Information */}
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

                        {/* Governing Law */}
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
        </>
    );
};

export default TermsConditions;