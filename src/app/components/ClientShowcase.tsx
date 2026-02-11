import { motion } from 'motion/react';
import { Users } from 'lucide-react';

// Row 1 Logos
const row1Logos = [
  '/assets/c1.webp',
  '/assets/c2.webp',
  '/assets/c3.webp',
  '/assets/c4.webp',
  '/assets/c5.webp',
  '/assets/c6.webp',
  '/assets/c7.webp',
  '/assets/c8.webp',
  '/assets/c9.webp',
  '/assets/c10.webp',
  // Duplicate for seamless loop
  '/assets/c1.webp',
  '/assets/c2.webp',
  '/assets/c3.webp',
  '/assets/c4.webp',
  '/assets/c5.webp',
  '/assets/c6.webp',
  '/assets/c7.webp',
  '/assets/c8.webp',
  '/assets/c9.webp',
  '/assets/c10.webp',
  '/assets/c1.webp',
  '/assets/c2.webp',
  '/assets/c3.webp',
  '/assets/c4.webp',
  '/assets/c5.webp',
];

// Row 2 Logos
const row2Logos = [
  '/assets/c11.webp',
  '/assets/c12.webp',
  '/assets/c13.webp',
  '/assets/c14.webp',
  '/assets/c15.webp',
  '/assets/c16.webp',
  '/assets/c17.webp',
  '/assets/c18.webp',
  '/assets/c19.webp',
  '/assets/c20.webp',
  // Duplicate for seamless loop
  '/assets/c11.webp',
  '/assets/c12.webp',
  '/assets/c13.webp',
  '/assets/c14.webp',
  '/assets/c15.webp',
  '/assets/c16.webp',
  '/assets/c17.webp',
  '/assets/c18.webp',
  '/assets/c19.webp',
  '/assets/c20.webp',
  '/assets/c11.webp',
  '/assets/c12.webp',
  '/assets/c13.webp',
  '/assets/c14.webp',
  '/assets/c15.webp',
];

export function ClientShowcase() {
  return (
    <section id="clients-showcase" className="py-24 bg-white overflow-hidden relative">
       {/* Background Decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <motion.div
           className="text-center mb-16"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#D8B4FE] mb-6">
              <Users className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">Clients & Partners</span>
           </div>
           
           <h2 className="font-['Unbounded'] font-semibold text-3xl md:text-5xl text-neutral-900 mb-6">
              Our clients are <span className="text-shine font-bold">FLOURISHING</span> with our services
           </h2>
           <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
             We have been working with enormous clients and have been enhancing the success ratio.
           </p>
        </motion.div>

        {/* Row 1 - Moving Left */}
        <div className="mb-12 relative w-full overflow-hidden mask-fade">
          <motion.div 
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, // Adjust speed
              ease: "linear",
              repeat: Infinity 
            }}
          >
            {row1Logos.map((logo, index) => (
              <div key={`r1-${index}`} className="flex-shrink-0">
                <div className="w-48 h-24 bg-white border border-neutral-100 rounded-2xl flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <img 
                    src={logo} 
                    alt="Client Logo" 
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 transform group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="relative w-full overflow-hidden mask-fade">
           <motion.div 
            className="flex gap-8 w-max"
            animate={{ x: ["-50%", "0%"] }} // Start from shifted position and move to 0 for Rightwards movement
            transition={{ 
              duration: 35, 
              ease: "linear",
              repeat: Infinity 
            }}
          >
            {row2Logos.map((logo, index) => (
              <div key={`r2-${index}`} className="flex-shrink-0">
                 <div className="w-48 h-24 bg-white border border-neutral-100 rounded-2xl flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <img 
                    src={logo} 
                    alt="Client Logo" 
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 transform group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
