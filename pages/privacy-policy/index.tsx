import React from 'react';
import config from '../../config';  

const PrivacyPolicy = () => {
  const { personalInfo } = config;
  const websiteUrl = personalInfo.socialLinks.personalWebsite || "https://your-domain.com";
  const contactEmail = personalInfo.contact.email || "your.email@example.com";
  
  // Set the current effective date
  const effectiveDate = '26 June 2025';

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy for {websiteUrl.replace('https://', '')}</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: {effectiveDate}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Google Analytics</h2>
            <p className="text-gray-700 mb-4">
              This website uses Google Analytics to collect and analyze visitor data, such as:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Device type</li>
              <li>Browser information</li>
              <li>General user behavior (e.g., pages viewed, session duration)</li>
            </ul>
            <p className="text-gray-700">
              This data is non-personally identifiable and is collected only for analytical purposes to improve the user experience.
            </p>
            <p className="text-gray-700 italic mt-4">
              (Note: If you have removed Google Analytics from your `_app.tsx`, you should remove this entire section.)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Portfolio and Projects</h2>
            <p className="text-gray-700 mb-4">
              The website <a href={websiteUrl} className="text-blue-600 hover:text-blue-800 transition duration-300">{websiteUrl.replace('https://', '')}</a> serves as my personal portfolio where I share my resume and software projects.
            </p>
            <p className="text-gray-700">
              (Note: The original policy mentioned a project that collects user data. Since that project has been removed, you should remove or update this sentence to be accurate for your projects.)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. No Personal Data Collection</h2>
            <p className="text-gray-700 mb-4">
              Unless a user specifically interacts with certain features, this website does not collect personal data. It functions as a portfolio to showcase my work.
            </p>
            <p className="text-gray-700">
              Only standard Google Analytics data is collected for non-personal tracking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions regarding this privacy policy, feel free to contact me at:
            </p>
            <p className="text-gray-700 mt-2">
              Email: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:text-blue-800 transition duration-300">{contactEmail}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;