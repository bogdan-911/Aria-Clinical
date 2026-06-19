import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <header className="bg-[#00674F] text-white py-4 px-6 sm:px-8 border-b border-emerald-800/50 flex items-center justify-between shadow-sm">
        <Link href="/" className="text-sm font-semibold uppercase tracking-widest hover:text-emerald-200 transition-colors">
          &larr; Back to Home
        </Link>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 sm:py-20 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#00674F]">Privacy Policy</h1>
        
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3 text-black">1. Introduction</h2>
            <p>
              Welcome to Aria Clinical. This Privacy Policy details how we collect, use, and process your personal and business data. 
              By utilizing our services, including our AI Patient Intake Systems, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">2. Collection of Personal Information</h2>
            <p>
              We collect information that identifies you or your business (&quot;Personal Information&quot;) when you interact with our website or use our services. 
              This explicitly includes, but is not limited to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Business/Clinic Details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">3. Tracking Pixels and Cookies</h2>
            <p>
              Our website utilizes Meta (Facebook) tracking pixels, cookies, and similar technologies to track activity on our service and hold certain information. 
              These tools help us understand user behavior to optimize our site and deliver targeted advertising. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">4. Third-Party Data Processors</h2>
            <p>
              To provide our AI Patient Intake Systems and effectively manage our business operations, we utilize third-party data processors. Your data may be shared with or processed by:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>GoHighLevel:</strong> Used for CRM hosting, pipeline automation, and managing communications.</li>
              <li><strong>Make.com:</strong> Used for API logic routing and workflow automation between different services.</li>
              <li><strong>OpenAI API:</strong> Used for processing data through our AI models to qualify patient inquiries in real-time.</li>
            </ul>
            <p className="mt-2">
              These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">5. SMS / WhatsApp Communication Consent</h2>
            <p>
              By providing your phone number and submitting inquiries on our forms, you explicitly consent to receive SMS text messages and/or WhatsApp messages from Aria Clinical. 
              This encompasses informational updates, qualification prompts, and marketing communications. Standard message and data rates may apply. You may opt-out of receiving these communications at any time by replying &quot;STOP&quot; or following the provided opt-out instructions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">6. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#00674F] mt-12 pt-8 border-t border-gray-200">Legal Disclaimer</h2>
            <p className="text-xs text-gray-500 uppercase tracking-wider leading-relaxed">
              This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </section>
        </div>
      </main>
      
      <footer className="bg-[#00674F] text-white py-6 text-center text-xs opacity-80">
        &copy; {new Date().getFullYear()} Aria Clinical. All rights reserved.
      </footer>
    </div>
  );
}
