import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* 2. FIXED HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#00674F] border-b border-emerald-800/50 flex items-center justify-between px-6 sm:px-8 h-[60px] shadow-sm">
        <div className="flex items-center gap-3">
          
          {/* LOGO INSERTED HERE */}
          <Image 
            src="/logo.png" 
            alt="Aria Clinical Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain"
            priority
          />
          
          <span className="font-bold tracking-tight text-lg uppercase hidden sm:block text-white">
            ARIA CLINICAL
          </span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium uppercase tracking-widest text-white">
          <a href="#demo" className="hover:text-emerald-200 transition-colors">Demo</a>
          <a href="#why-us" className="hover:text-emerald-200 transition-colors">Why Us</a>
          <a href="#audit" className="hover:text-emerald-200 transition-colors">Audit</a>
        </nav>
      </header>

      <main className="pt-[60px] bg-[#00674F]">
        {/* 3. SECTION 1: THE ABOVE-THE-FOLD HOOK (Hero Section) */}
        <section className="bg-[#00674F] text-white py-20 sm:py-24 px-6 sm:px-8 flex flex-col justify-center text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold mb-3 sm:mb-4 opacity-80">
            </p>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Stop Wasting Clinic Chair Time on Unqualified Enquiries.
            </h1>
            
            <p className="text-xs sm:text-sm lg:text-base opacity-90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              We install 24/7 AI-driven patient intake systems for premium clinics by filtering out tyre-kickers and converting high-value private enquiries directly into booked consultations without overloading your front desk.
            </p>
            
            <div className="mt-4 flex justify-center">
              <a 
                href="#demo"
                className="inline-block bg-white text-[#00674F] text-xs sm:text-sm font-bold px-6 py-3 uppercase tracking-tighter hover:bg-gray-100 transition-colors"
              >
                 Watch the AI Demo 
              </a>
            </div>
          </div>
        </section>

        {/* 4. SECTION 2: THE VIDEO ASSET (The Proof) */}
        <section id="demo" className="bg-white py-16 px-6 sm:px-8 border-b border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black text-balance">
                Real-Time Qualification
              </h2>
              <p className="text-[11px] sm:text-xs lg:text-sm text-gray-600 leading-relaxed text-balance">
                See how our AI Treatment Coordinator handles inquiries, answers finance questions, and filters for budget suitability before your staff ever lifts a finger.
              </p>
            </div>
            
            {/* Responsive placeholder for Loom video */}
            <div className="md:col-span-3 w-full aspect-video md:aspect-auto md:h-64 lg:h-80 bg-gray-100 border border-gray-200 flex flex-col items-center justify-center relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#00674F] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <div className="w-0 h-0 border-t-[8px] sm:border-t-[10px] border-t-transparent border-l-[12px] sm:border-l-[16px] border-l-white border-b-[8px] sm:border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <span className="text-[10px] sm:text-xs uppercase mt-3 sm:mt-4 tracking-widest font-semibold text-black">
                Loom Embed Player
              </span>
            </div>
          </div>
        </section>

        {/* 5. SECTION 3: THE "AGENCY TRAUMA" ANTIDOTE (The 3 Pillars) */}
        <section id="why-us" className="bg-[#00674F] text-white py-16 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6">
            {/* Pillar 1 */}
            <div className="border-l border-white/20 pl-4 md:pl-5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3 text-white/90">
                01. Instant Response
              </h3>
              <p className="text-[10px] sm:text-xs leading-relaxed opacity-80">
                24/7 Screening via WhatsApp. Capture high-intent prospects right when they inquire, not just during standard office hours.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="border-l border-white/20 pl-4 md:pl-5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3 text-white/90">
                02. Protected Capacity
              </h3>
              <p className="text-[10px] sm:text-xs leading-relaxed opacity-80">
                Staff are only alerted when a high-value prospect is qualified and ready to book. No more chasing dead leads.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="border-l border-white/20 pl-4 md:pl-5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3 text-white/90">
                03. Revenue Visibility
              </h3>
              <p className="text-[10px] sm:text-xs leading-relaxed opacity-80">
                Complete CRM pipeline tracking from initial click to clinical treatment value. No more marketing guesswork.
              </p>
            </div>
          </div>
        </section>

        {/* 6. SECTION 4: THE BOOKING MECHANISM */}
        <section id="audit" className="bg-white py-20 px-6 sm:px-8 flex flex-col">
          <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black text-balance">
                Protect Your Clinic&apos;s Capacity
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-balance">
                Book a 15-minute audit to see if the Aria Clinical framework fits your practice.
              </p>
            </div>
            <div className="w-full md:flex-1 min-h-[300px] md:h-[400px] bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold text-center px-4">
              Calendly / GoHighLevel Scheduler Placeholder
            </div>
          </div>
        </section>

      </main>

      {/* 7. FOOTER & COMPLIANCE */}
      <footer className="bg-[#00674F] text-white py-8 sm:py-10 px-6 sm:px-8 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-4">
            <div className="flex gap-4 sm:gap-6 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">
              <Link href="/privacy-policy" className="hover:text-emerald-200 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-emerald-200 transition-colors">Terms of Service</Link>
            </div>
            <div className="text-[9px] sm:text-[10px] opacity-60 font-medium">
              &copy; {new Date().getFullYear()} Aria Clinical
            </div>
          </div>
          <p className="text-[7px] sm:text-[8px] leading-relaxed opacity-40 uppercase tracking-tighter text-center border-t border-white/10 pt-4 sm:pt-6">
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}