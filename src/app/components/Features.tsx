import { Shield, Zap, Users, BarChart3, Lock, Workflow, Settings, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Bubble3D } from './Bubble3D';

const features = [
  {
    icon: Shield,
    title: 'Digital KYC Solutions',
    description: 'Comprehensive identity verification suite including Video KYC, Digital KYC, and C-KYC solutions.',
  },
  {
    icon: Zap,
    title: 'eSign Services',
    description: 'Secure digital signing capabilities including Aadhaar eSign and document workflow automation.',
  },
  {
    icon:  Workflow,
    title: 'Verification APIs',
    description: 'Powerful APIs for PAN, GST, Bank Account, and other identity document verifications.',
  },
  {
    icon: Users,
    title: 'Customer Onboarding',
    description: 'End-to-end digital onboarding flows designed to maximize conversion and compliance.',
  },
  {
    icon: Lock,
    title: 'Fraud Prevention',
    description: 'Advanced AI/ML algorithms to detect and prevent sophisticated fraud attempts in real-time.',
  },
  {
    icon: BarChart3,
    title: 'Compliance Management',
    description: 'Stay compliant with evolving regulations including RBI guidelines and data privacy laws.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-[0.6]"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
          }}
        />
      </div>

      <div className="absolute inset-0 bg-spotlight pointer-events-none z-0"></div>
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <AnimatePresence>
            {[
              { icon: Settings, color: '#A78BFA', size: 60, x: '5%', y: '15%', delay: 0 },
              { icon: Box, color: '#C4B5FD', size: 50, x: '90%', y: '25%', delay: 1 },
              { icon: Zap, color: '#DDD6FE', size: 40, x: '10%', y: '80%', delay: 2 },
            ].map((bubble, i) => (
              <motion.div
                key={`feature-bubble-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.5, delay: bubble.delay * 0.5 }}
                className="absolute"
                style={{ left: bubble.x, top: bubble.y }}
              >
                 <Bubble3D {...bubble} />
              </motion.div>
            ))}
         </AnimatePresence>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#D8B4FE] mb-6">
            <Zap className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">Features</span>
          </div>
          <h2 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-neutral-900 mb-6">
            Everything you need to <span className="text-shine">succeed</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Powerful features designed to streamline your workflow and drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-6 md:p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Abstract Pattern */}
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-purple-100 group-hover:text-purple-200 transition-colors duration-500"
                >
                  <circle cx="100" cy="20" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                  <circle cx="100" cy="20" r="60" stroke="currentColor" strokeWidth="2" className="opacity-30" />
                  <circle cx="100" cy="20" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" className="opacity-20" />
                  <path d="M100 20 L20 100" stroke="currentColor" strokeWidth="1" className="opacity-10" />
                </svg>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#EDE9FE] to-[#F3E8FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner relative z-10">
                <feature.icon className="w-7 h-7 text-[#7C3AED] group-hover:text-[#6D28D9] transition-colors" />
              </div>
              <h3 className="font-['Unbounded'] font-semibold text-xl text-neutral-900 mb-3 group-hover:text-[#7C3AED] transition-colors relative z-10">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
