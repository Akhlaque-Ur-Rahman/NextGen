import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Layers, Database, Key, RefreshCw } from 'lucide-react';
import { Bubble3D } from './Bubble3D';

const products = [
  {
    title: 'KYC Hub',
    description: 'All-in-one identity verification platform.',
    features: ['Video KYC', 'Document Verification', 'Face Match'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'SignRight',
    description: 'Legally binding digital signatures.',
    features: ['Aadhaar eSign', 'Document Workflow', 'Audit Trails'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'VerifyAPI',
    description: 'Developer-friendly verification APIs.',
    features: ['PAN & GST', 'Bank Verification', 'Udyam Check'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
  }
];

export function HomeProducts() {
  return (
    <section className="py-32 bg-[#FAFAFA] relative overflow-hidden">
       {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <AnimatePresence>
            {[
              { icon: Database, color: '#8b5cf6', size: 65, x: '5%', y: '30%', delay: 0 },
              { icon: Key, color: '#a78bfa', size: 50, x: '90%', y: '15%', delay: 1 },
              { icon: RefreshCw, color: '#c4b5fd', size: 45, x: '50%', y: '85%', delay: 2 },
            ].map((bubble, i) => (
              <motion.div
                key={`product-bubble-${i}`}
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
            <Layers className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">Our Solutions</span>
          </div>
          <h2 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-neutral-900 mb-6">
            Our <span className="text-shine">Core Products</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Scalable solutions built for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group relative hover:-translate-y-1"
              initial="rest"
              whileInView="show"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                rest: { opacity: 0, y: 20 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }
              }}
            >
              {index === 1 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg shadow-purple-500/30">
                  POPULAR
                </div>
              )}
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8 relative overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors duration-500"></div>

                <h3 className="font-['Unbounded'] font-semibold text-2xl text-neutral-900 mb-3 group-hover:text-[#7C3AED] transition-colors relative z-10">
                  {product.title}
                </h3>
                <p className="text-neutral-600 mb-6 line-clamp-2 relative z-10">
                  {product.description}
                </p>
                <motion.div 
                  className="space-y-3 mb-8 relative z-10"
                  variants={{
                    hover: {
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                >
                  {product.features.map((feature, i) => (
                    <motion.div key={i} className="flex items-center gap-2">
                      <motion.div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        variants={{
                          rest: { backgroundColor: "#EDE9FE", color: "#7C3AED" },
                          hover: { backgroundColor: "#7C3AED", color: "#FFFFFF" }
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="w-3 h-3 text-current" />
                      </motion.div>
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <button className="w-full py-3 border border-[#7C3AED] text-[#7C3AED] rounded-xl font-medium hover:bg-[#7C3AED] hover:text-white transition-colors flex items-center justify-center gap-2 group/btn btn-shine overflow-hidden relative shadow-sm hover:shadow-purple-500/25 z-10">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
