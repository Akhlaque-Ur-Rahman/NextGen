import { CheckCircle2, FileText, Layout, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Bubble3D } from './Bubble3D';

const steps = [
  {
    number: '01',
    title: 'Connect Your Systems',
    description: 'Seamlessly integrate with your existing tools and workflows in minutes, not days.',
  },
  {
    number: '02',
    title: 'Configure & Customize',
    description: 'Tailor the platform to match your unique business needs with our intuitive builder.',
  },
  {
    number: '03',
    title: 'Launch & Scale',
    description: 'Go live instantly and scale effortlessly as your business grows.',
  },
  {
    number: '04',
    title: 'Monitor & Optimize',
    description: 'Track performance metrics and continuously improve with actionable insights.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute inset-0 bg-spotlight pointer-events-none z-0"></div>

       {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <AnimatePresence>
            {[
              { icon: FileText, color: '#A78BFA', size: 55, x: '85%', y: '20%', delay: 0 },
              { icon: Layout, color: '#C4B5FD', size: 45, x: '10%', y: '60%', delay: 1.5 },
              { icon: Send, color: '#DDD6FE', size: 40, x: '80%', y: '75%', delay: 0.8 },
            ].map((bubble, i) => (
              <motion.div
                key={`process-bubble-${i}`}
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
            <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-neutral-900 mb-6">
            How it <span className="text-shine font-bold">works</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Get started in four simple steps. No technical expertise required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative p-6 md:p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full hover:-translate-y-1 overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors duration-500"></div>

                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <span className="font-['Unbounded'] font-semibold text-white text-sm">
                    {step.number}
                  </span>
                </div>
                <div className="mt-4 relative z-10">
                  <h3 className="font-['Unbounded'] font-semibold text-xl text-neutral-900 mb-3 group-hover:text-[#7C3AED] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 relative z-10">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#7C3AED] to-transparent transform -translate-y-1/2 opacity-30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
