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
                make a purchase, subscribe to our newsletter, or contact us for support. This may include 
                your name, email address, phone number, billing address, shipping address, and payment information.
              </p>
              <p className="mb-4">
                We also automatically collect certain information about your device and usage patterns when you 
                visit our website, including IP address, browser type, operating system, referring URLs, and 
                pages visited.
              </p>
              <p>
                We use this information to provide our services, process transactions, communicate with you,
                personalize your experience, and improve our offerings. We do not sell or rent your personal 
                information to third parties for marketing purposes.
              </p>
            </section>

            {/* Cookies Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience,
                analyze site traffic, remember your preferences, and understand user behavior. Cookies are small 
                text files stored on your device that help us provide better functionality.
              </p>
              <p className="mb-4">
                We use both session cookies (which expire when you close your browser) and persistent cookies 
                (which remain until deleted). You can control cookie settings through your browser preferences, 
                though disabling cookies may affect site functionality.
              </p>
              <p>
                We may use third-party analytics services like Google Analytics to help us understand how our 
                website is used. These services may collect information about your visits to our site and other 
                sites to provide us with reports and insights.
              </p>
            </section>

            {/* User Rights Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Rights</h2>
              <p className="mb-4">
                You have the right to access, update, correct, or delete your personal information. You may also
                request a copy of your data, opt out of certain communications from us, or request that we limit 
                the processing of your information. To exercise these rights, please contact us using the 
                information provided on our Contact page.
              </p>
              <p className="mb-4">
                You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in our 
                emails or by contacting us directly.
              </p>
              <p>
                If you are a resident of California, you may have additional rights under the California Consumer 
                Privacy Act (CCPA). If you are in the European Union, you have rights under the General Data 
                Protection Regulation (GDPR), including the right to data portability and the right to lodge 
                complaints with supervisory authorities.
              </p>
            </section>

            {/* Third-Party Sharing Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Sharing</h2>
              <p className="mb-4">
                We may share your information with trusted third-party service providers who assist us in
                operating our business, such as payment processors, shipping companies, email service providers, 
                and technology providers. These parties are contractually bound to protect your information and 
                may only use it for the specific services they provide to us.
              </p>
              <p className="mb-4">
                We do not sell your personal information to third parties. We may share aggregated, anonymized 
                data that cannot identify you personally for research, marketing, or other business purposes.
              </p>
              <p>
                We may also disclose information when required by law, legal process, or court order, or to 
                protect our rights, property, and safety, or the rights, property, and safety of our users 
                or others. In the event of a merger, acquisition, or sale of assets, your information may be 
                transferred as part of that transaction.
              </p>
            </section>

            {/* Data Security Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no 
                internet transmission or electronic storage method is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </section>

            {/* Policy Updates Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material
                changes by posting the new policy on our website, updating the effective date, and sending 
                you an email notification if you have an account with us. Your continued use of our services 
                after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Footer Note */}
            <div className="border-t pt-8">
              <p className="text-sm text-gray-500">
                Last updated: January 2025<br />
                Effective date: January 15, 2025<br />
                For questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@medsurg.com" className="text-blue-600 underline">privacy@medsurg.com</a>
                {' '}or write to us at our mailing address listed on our Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;