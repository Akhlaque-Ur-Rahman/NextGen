import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    title: "KYC Hub",
    tagline: "The Ultimate Identity Verification Platform",
    description: "A unified platform for all your KYC needs. Orchestrate workflows, manage verification rules, and view customer profiles in one place.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    features: ["No-code workflow builder", "Centralized data repository", "Real-time analytics dashboard", "Multi-user access control"]
  },
  {
    title: "SignRight",
    tagline: "Secure Digital Document Signing",
    description: "Enterprise-grade digital signing solution. Send, track, and manage documents for signature with ease. Aadhaar eSign and DSC supported.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    features: ["Bulk document signing", "Template management", "Audit trail & evidence", "API integration"]
  },
  {
    title: "VerifyAPI",
    tagline: "Developer-First Verification Suite",
    description: "Powerful APIs for every verification need. Documentation, sandboxes, and SDKs to get you up and running in hours.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
    features: ["Restful API architecture", "99.9% uptime SLA", "Comprehensive documentation", "Dedicated support channel"]
  }
];

export function ProductsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-neutral-900 mb-6">
            Our Products
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
             Innovation-driven products designed to simplify complex business processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 group">
                  <div className="absolute inset-0 bg-[#7C3AED]/10 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-purple-100 text-[#7C3AED] text-sm font-semibold rounded-full mb-4">
                  {product.title}
                </div>
                <h2 className="font-['Unbounded'] font-semibold text-3xl text-neutral-900 mb-4">
                  {product.tagline}
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-neutral-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="px-8 py-4 bg-[#7C3AED] text-white rounded-xl hover:bg-[#6D28D9] transition-all flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 font-semibold">
                  Explore {product.title}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
