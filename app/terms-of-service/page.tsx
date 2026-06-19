import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <header className="bg-[#00674F] text-white py-4 px-6 sm:px-8 border-b border-emerald-800/50 flex items-center justify-between shadow-sm">
        <Link href="/" className="text-sm font-semibold uppercase tracking-widest hover:text-emerald-200 transition-colors">
          &larr; Back to Home
        </Link>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 sm:py-20 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#00674F]">Terms of Service</h1>
        
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3 text-black">1. Acceptance of Terms</h2>
            <p>
              By accessing our website and utilizing our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">2. Description of Services</h2>
            <p>
              Aria Clinical is a digital agency providing AI-driven patient intake systems for premium clinics (&quot;Services&quot;). 
              Our service connects tools to filter, qualify, and manage patient inquiries in real-time. We reserve the right to modify, suspend, or discontinue the Services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">3. User Responsibilities and Lawful Use</h2>
            <p>
              As a user of our site and services, you agree to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide accurate, current, and complete information during any registration or inquiry process.</li>
              <li>Maintain the security of any passwords or account credentials we may issue.</li>
              <li>Use the Services only for lawful purposes and in accordance with these Terms.</li>
              <li>Not engage in any conduct that disrupts or interferes with our Services, or may harm Aria Clinical or its users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">4. Intellectual Property Rights</h2>
            <p>
              The Services and all associated content, features, and functionality (including but not limited to all information, software, code, text, displays, images, video, and audio, and the design thereof) are owned by Aria Clinical, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. 
              You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">5. Limitation of Liability and &quot;As-Is&quot; Disclaimers</h2>
            <p>
              Our Services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Aria Clinical makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein.
            </p>
            <p className="mt-2">
              To the fullest extent permitted by applicable law, Aria Clinical shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Aria Clinical operates, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">7. Modifications to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
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
