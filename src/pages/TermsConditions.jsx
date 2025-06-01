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

                        {/* Acceptable Usage */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Usage</h2>
                            <p className="mb-4">
                                By using our platform, you agree to use our services only for lawful purposes and in accordance 
                                with these Terms. You are responsible for ensuring your use complies with all applicable laws and regulations.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-900 mb-2">Permitted Uses</h4>
                                    <ul className="list-disc list-inside text-green-700 space-y-1">
                                        <li>Purchasing medical products for professional use</li>
                                        <li>Accessing product information and documentation</li>
                                        <li>Managing your account and order history</li>
                                        <li>Contacting customer support for assistance</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-900 mb-2">Prohibited Activities</h4>
                                    <ul className="list-disc list-inside text-red-700 space-y-1">
                                        <li>Unauthorized access to system resources</li>
                                        <li>Distribution of malware or harmful code</li>
                                        <li>Harassment or abuse of other users</li>
                                        <li>Violation of intellectual property rights</li>
                                        <li>Fraudulent or deceptive practices</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Account Usage */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Usage</h2>
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
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-800 mb-2">Account Responsibilities:</h4>
                                    <p className="text-blue-700 mb-2">You are responsible for:</p>
                                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                                        <li>Maintaining the confidentiality of your login credentials</li>
                                        <li>All activities that occur under your account</li>
                                        <li>Immediately notifying us of any unauthorized use</li>
                                        <li>Keeping your account information up to date</li>
                                        <li>Using your account only for authorized purposes</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Intellectual Property Disclaimer */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
                            <div className="space-y-4">
                                <p className="mb-4">
                                    All content, materials, and intellectual property on this platform are owned by MedSurg 
                                    or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                                </p>
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-purple-800 mb-2">Our Rights:</h4>
                                    <ul className="list-disc list-inside text-purple-700 space-y-1">
                                        <li>Website design, layout, and user interface</li>
                                        <li>Product descriptions, images, and documentation</li>
                                        <li>Logos, trademarks, and brand materials</li>
                                        <li>Software, databases, and proprietary technology</li>
                                        <li>Content, text, graphics, and multimedia elements</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-orange-800 mb-2">Usage Restrictions:</h4>
                                    <p className="text-orange-700 mb-2">Without express written permission, you may not:</p>
                                    <ul className="list-disc list-inside text-orange-700 space-y-1">
                                        <li>Copy, reproduce, or distribute our content</li>
                                        <li>Modify, adapt, or create derivative works</li>
                                        <li>Use our trademarks or logos</li>
                                        <li>Reverse engineer or decompile our software</li>
                                        <li>Remove or alter copyright notices</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Third-Party Rights</h4>
                                    <p className="text-gray-700">
                                        Some products may be subject to third-party intellectual property rights. 
                                        Users are responsible for ensuring compliance with all applicable third-party 
                                        intellectual property rights and licensing requirements.
                                    </p>
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

                        {/* Dispute Resolution and Liability */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution and Liability</h2>
                            <div className="space-y-4">
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-red-800 mb-2">Limitation of Liability</h4>
                                    <p className="text-red-700 mb-2">
                                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDSURG SHALL NOT BE LIABLE FOR:
                                    </p>
                                    <ul className="list-disc list-inside text-red-700 space-y-1">
                                        <li>Indirect, incidental, special, or consequential damages</li>
                                        <li>Loss of profits, revenue, data, or business opportunities</li>
                                        <li>Damages exceeding the amount paid for the specific product or service</li>
                                        <li>Third-party claims or actions</li>
                                        <li>Force majeure events beyond our reasonable control</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-800 mb-2">Dispute Resolution Process</h4>
                                    <div className="text-blue-700 space-y-2">
                                        <p><strong>Step 1:</strong> Contact our customer service team to resolve the issue informally</p>
                                        <p><strong>Step 2:</strong> If unresolved, engage in good faith mediation</p>
                                        <p><strong>Step 3:</strong> Binding arbitration through the American Arbitration Association</p>
                                        <p><strong>Note:</strong> Class action lawsuits are waived; disputes must be resolved individually</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Warranties and Disclaimers</h4>
                                    <p className="text-gray-700">
                                        Products are sold with manufacturer warranties where applicable. We disclaim all other
                                        warranties, express or implied, including merchantability and fitness for a particular purpose.
                                        Some jurisdictions do not allow warranty disclaimers, so some limitations may not apply.
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

                        {/* Termination */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                            <p className="mb-4">
                                We reserve the right to terminate or suspend your account and access to our services
                                at any time, with or without cause, including for violations of these Terms.
                            </p>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <h4 className="font-semibold text-yellow-800 mb-2">Effects of Termination:</h4>
                                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                                    <li>Immediate cessation of access to services</li>
                                    <li>Cancellation of pending orders (subject to processing status)</li>
                                    <li>Retention of data as required by law</li>
                                    <li>Survival of liability and indemnification provisions</li>
                                </ul>
                            </div>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700 mb-4">
                                    These Terms are governed by and construed in accordance with the laws of the State of Delaware, 
                                    United States, without regard to conflict of law principles. Any legal action or proceeding 
                                    arising under these Terms shall be brought exclusively in the federal or state courts located 
                                    in Delaware, and you hereby consent to the personal jurisdiction of such courts.
                                </p>
                                <div className="border-t border-gray-200 pt-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">International Users</h4>
                                    <p className="text-gray-700">
                                        If you are accessing our services from outside the United States, you acknowledge that 
                                        your information may be transferred to, stored, and processed in the United States where 
                                        our servers are located and our central database is operated.
                                    </p>
                                </div>
                            </div>
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
                                    <p><strong>Address:</strong> MedSurg Legal Department, 123 Health Ave, Wellness City, DE 19801</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsConditions;