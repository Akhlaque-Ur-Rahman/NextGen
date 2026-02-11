import { ArrowRight } from 'lucide-react';
import { ClayShape } from './ClayShape';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <ClayShape 
          type="box" 
          color="#EDE9FE" 
          className="absolute top-10 right-20 w-64 h-64 blur-[2px]"
          delay={0}
        />
        <ClayShape 
          type="sphere" 
          color="#C4B5FD" 
          className="absolute bottom-10 left-10 w-48 h-48 blur-[2px]"
          delay={0.5}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-lg text-purple-100 mb-10 leading-relaxed">
            Join thousands of businesses already using our platform to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-white text-[#7C3AED] rounded-xl hover:bg-neutral-100 transition-all flex items-center gap-2 shadow-2xl btn-shine">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent text-white rounded-xl hover:bg-white/10 transition-colors border border-white/30">
              Schedule a Demo
            </button>
          </div>
          <p className="text-sm text-purple-200 mt-8">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
