import { motion } from 'motion/react';
import { Shield, FileSignature, Database, ScanLine, Smartphone, Lock } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: ScanLine,
    title: "Digital KYC Solutions",
    description: "Comprehensive identity verification suite including Aadhaar KYC, Video KYC, and DigiLocker integration. Ensure 100% compliance with RBI & SEBI guidelines.",
    features: ["Aadhaar Offline XML", "Video KYC (V-CIP)", "DigiLocker KYC", "Face Match & Liveness"]
  },
  {
    icon: FileSignature,
    title: "eSign Services",
    description: "Legally binding digital signatures for all your documents. Support for Aadhaar eSign, DSC-based signing, and document workflow automation.",
    features: ["Aadhaar eSign", "DSC Token Signing", "Document Workflow", "Bulk Signing"]
  },
  {
    icon: Database,
    title: "Verification APIs",
    description: "Real-time verification APIs for onboarding and fraud prevention. Verify individuals and businesses instantly with our robust API suite.",
    features: ["PAN Verification", "GST Verification", "Bank Account Validation", "Udyam Aadhaar Check"]
  },
  {
    icon: Smartphone,
    title: "Customer Onboarding",
    description: "End-to-end digital onboarding journeys optimized for conversion. Reduce drop-offs and onboard customers in minutes, not days.",
    features: ["Mobile-first Journeys", "OCR Data Extraction", "Form Autofill", "Real-time Dashboard"]
  },
  {
    icon: Lock,
    title: "Fraud Prevention",
    description: "Advanced AI-powered fraud detection to protect your business. Detect synthetic identities, document tampering, and suspicious patterns.",
    features: ["Identity Fraud Check", "Document Forgery Detection", "Geo-fencing", "Device Fingerprinting"]
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Stay ahead of regulatory changes with our compliance-first approach. We manage the complexity of regulations so you can focus on growth.",
    features: ["Regulatory Reporting", "Audit Trails", "Data residency compliance", "ISO 27001 Certified"]
  }
];

export function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-neutral-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Empowering businesses with secure, scalable, and compliant digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border border-neutral-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-[#7C3AED] transition-colors">
                <service.icon className="w-6 h-6 text-[#7C3AED] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-['Unbounded'] font-semibold text-xl text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-neutral-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="inline-flex items-center text-[#7C3AED] font-medium hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
