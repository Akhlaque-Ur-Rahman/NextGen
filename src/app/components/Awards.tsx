import { motion } from 'motion/react';
import { Award, ShieldCheck, Trophy } from 'lucide-react';

const awards = [
  {
    title: "Best Fintech Solution 2023",
    organization: "Global Tech Awards",
    icon: Trophy,
    description: "Recognized for excellence in digital KYC and compliance automation."
  },
  {
    title: "ISO 27001 Certified",
    organization: "International Standards",
    icon: ShieldCheck,
    description: "Meeting the highest standards for information security management."
  },
  {
    title: "Innovation Excellence",
    organization: "Digital India Summit",
    icon: Award,
    description: "Awarded for pioneering contributions to digital identity verification."
  }
];

export function Awards() {
  return (
    <section className="py-20 bg-white border-t border-neutral-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E8FF] border border-[#D8B4FE] rounded-full mb-6 py-1">
            <Trophy className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">Our Achievements</span>
          </div>
          <h2 className="font-['Unbounded'] font-semibold text-3xl md:text-4xl text-neutral-900">
            Our <span className='text-shine font-bold' >Recognitions & Awards</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-neutral-50 hover:bg-purple-50 transition-colors border border-dashed border-neutral-300 hover:border-purple-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-[#7C3AED]">
                <award.icon className="w-8 h-8" />
              </div>
              <h3 className="font-['Unbounded'] font-semibold text-lg text-neutral-900 mb-2">
                {award.title}
              </h3>
              <div className="text-sm font-medium text-purple-600 mb-3">{award.organization}</div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
