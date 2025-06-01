import React, { useState } from 'react';
import Header from '../components/common/Header'; // Adjust path as needed

const PrivacyPolicy = () => {
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

            {/* Footer Note */}
            <div className="border-t pt-8">
              <p className="text-sm text-gray-500">
                Last updated: January 2025<br />
                For questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@medsurg.com" className="text-blue-600 underline">privacy@medsurg.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
