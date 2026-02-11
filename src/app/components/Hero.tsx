import { ArrowRight, Shield, Zap, Globe, Lock, Activity, Award, Lightbulb } from 'lucide-react';
import { Bubble3D } from './Bubble3D';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 'innovation',
    badge: 'Our Approach',
    badgeIcon: Lightbulb,
    headline: (
      <>
        Building Trust Through{' '}
        <span className="text-[#7C3AED] block mt-2">
          INNOVATION & <br className="hidden md:block" /> COMPLIANCE
        </span>
      </>
    ),
    description: 'At NEXTBIGBOX, we are redefining digital onboarding. From Aadhaar eSign to AI-powered eKYC, we deliver secure, scalable solutions that accelerate growth.',
    primaryBtn: 'Get Started',
    secondaryBtn: 'Watch Demo',
    bubbles: [
      { icon: Shield, color: '#7C3AED', size: 80, x: '10%', y: '20%', delay: 0 },
      { icon: Zap, color: '#A78BFA', size: 60, x: '85%', y: '15%', delay: 1 },
      { icon: Activity, color: '#C4B5FD', size: 50, x: '15%', y: '70%', delay: 0.5 },
    ]
  },
  {
    id: 'security',
    badge: 'Bank-Grade Security',
    badgeIcon: Shield,
    headline: (
      <>
        Uncompromising{' '}
        <span className="text-[#7C3AED] block mt-2">
          SAFETY & <br className="hidden md:block" /> DATA PRIVACY
        </span>
      </>
    ),
    description: 'Protect your business with our ISO 27001 certified platform. We ensure end-to-end encryption and compliance with the latest data protection regulations.',
    primaryBtn: 'Security Overview',
    secondaryBtn: 'Compliance',
    bubbles: [
      { icon: Lock, color: '#2DD4BF', size: 70, x: '12%', y: '25%', delay: 0 }, // Teal
      { icon: Shield, color: '#14B8A6', size: 90, x: '80%', y: '20%', delay: 0.8 },
      { icon: Award, color: '#5EEAD4', size: 55, x: '85%', y: '75%', delay: 1.5 },
    ]
  },
  {
    id: 'scale',
    badge: 'Global Scale',
    badgeIcon: Globe,
    headline: (
      <>
        Scale Your{' '}
        <span className="text-[#7C3AED] block mt-2">
          OPERATIONS & <br className="hidden md:block" /> REACH
        </span>
      </>
    ),
    description: 'Our infrastructure handles millions of verifications daily. Expand your business globally with a platform built for unlimited scale and reliability.',
    primaryBtn: 'Start Scaling',
    secondaryBtn: 'View API Docs',
    bubbles: [
      { icon: Globe, color: '#6366F1', size: 85, x: '15%', y: '20%', delay: 0.2 }, // Indigo
      { icon: Zap, color: '#818CF8', size: 65, x: '82%', y: '15%', delay: 1.2 },
      { icon: Activity, color: '#A5B4FC', size: 50, x: '80%', y: '65%', delay: 0.7 },
    ]
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60"></div>
      <div className="absolute inset-0 bg-spotlight"></div>

      {/* Floating Bubbles Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <AnimatePresence mode="wait">
            {slide.bubbles.map((bubble, i) => (
              <motion.div
                key={`${slide.id}-bubble-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: bubble.delay * 0.5 }}
                className="absolute"
                style={{ left: bubble.x, top: bubble.y }}
              >
                 <Bubble3D 
                    icon={bubble.icon} 
                    color={bubble.color} 
                    size={bubble.size} 
                    delay={bubble.delay}
                 />
              </motion.div>
            ))}
         </AnimatePresence>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E8FF] border border-[#D8B4FE] rounded-full mb-8 shadow-sm backdrop-blur-sm bg-opacity-80">
                  <slide.badgeIcon className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7C3AED]">
                    {slide.badge}
                  </span>
                </div>
              </motion.div>

              <h1 className="font-['Unbounded'] font-semibold text-4xl md:text-6xl leading-[1.1] text-neutral-900 mb-6">
                {slide.headline}
              </h1>

              <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  className="group px-8 py-4 bg-[#7C3AED] text-white rounded-full hover:bg-[#6D28D9] transition-all flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 font-semibold btn-shine"
                >
                  {slide.primaryBtn}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-neutral-700 rounded-xl hover:bg-neutral-50 transition-colors border border-neutral-200">
                  {slide.secondaryBtn}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-neutral-800' : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <motion.div
            className="mt-12 flex items-center justify-center gap-8 flex-wrap mb-10 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
             <div className="text-center border-2 px-4 sm:px-8 py-4 rounded-xl bg-white border-dashed">
               <div className="font-['Unbounded'] text-lg sm:text-2xl font-semibold text-neutral-900">99.9%</div>
               <div className="text-xs text-neutral-600 mt-1 uppercase tracking-wider">Uptime</div>
             </div>
             <div className="w-px h-8 bg-neutral-300 hidden sm:block"></div>
             <div className="text-center border-2 px-4 sm:px-8 py-4 rounded-xl bg-white border-dashed">
               <div className="font-['Unbounded'] text-lg sm:text-2xl font-semibold text-neutral-900">500K+</div>
               <div className="text-xs text-neutral-600 mt-1 uppercase tracking-wider">Users</div>
             </div>
             <div className="w-px h-8 bg-neutral-300 hidden sm:block"></div>
             <div className="text-center border-2 px-4 sm:px-8 py-4 rounded-xl bg-white border-dashed">
                <div className="font-['Unbounded'] text-lg sm:text-2xl font-semibold text-neutral-900">24/7</div>
                <div className="text-xs text-neutral-600 mt-1 uppercase tracking-wider">Support</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
