import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { ClayShape } from '../components/ClayShape';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 29, annually: 290 },
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 team members',
      '50 GB storage',
      'Basic analytics',
      'Email support',
      'Mobile apps',
      'API access',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: { monthly: 79, annually: 790 },
    description: 'Ideal for growing businesses',
    features: [
      'Up to 50 team members',
      '500 GB storage',
      'Advanced analytics',
      'Priority support',
      'Mobile apps',
      'API access',
      'Custom integrations',
      'Advanced workflows',
      'Team permissions',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 199, annually: 1990 },
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Mobile apps',
      'API access',
      'Custom integrations',
      'Advanced workflows',
      'Advanced permissions',
      'SSO & SAML',
      'Custom SLA',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees or hidden costs. You only pay the subscription price.',
  },
  {
    question: 'Do you offer discounts for nonprofits?',
    answer: 'Yes, we offer special pricing for nonprofits and educational institutions. Contact our sales team.',
  },
];

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] overflow-hidden">
        <ClayShape 
          type="torus" 
          color="#EDE9FE" 
          className="absolute top-10 right-[12%] w-52 h-52 opacity-20 blur-[2px]"
          delay={0}
        />
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Unbounded'] font-semibold text-5xl md:text-6xl text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-purple-100 leading-relaxed mb-8">
              Choose the perfect plan for your business. No hidden fees, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-2">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  !isAnnual ? 'bg-white text-[#7C3AED] shadow-lg' : 'text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  isAnnual ? 'bg-white text-[#7C3AED] shadow-lg' : 'text-white'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-[#A78BFA] text-white px-2 py-1 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-3xl p-8 border-2 ${
                  plan.highlighted
                    ? 'border-[#7C3AED] shadow-2xl shadow-purple-500/20 scale-105'
                    : 'border-neutral-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#7C3AED] text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-['Unbounded'] font-semibold text-2xl text-neutral-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-6">{plan.description}</p>
                  <div className="mb-2">
                    <span className="font-['Unbounded'] font-semibold text-5xl text-neutral-900">
                      ${isAnnual ? plan.price.annually : plan.price.monthly}
                    </span>
                    <span className="text-neutral-600 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-[#7C3AED]">
                      ${(plan.price.annually / 12).toFixed(0)}/month billed annually
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-4 rounded-xl mb-8 transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-lg shadow-purple-500/30'
                      : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-neutral-900 mb-6">
              Compare Plans
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              See detailed feature comparison across all plans.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="text-left py-4 px-6 font-['Unbounded'] font-semibold text-neutral-900">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 font-['Unbounded'] font-semibold text-neutral-900">
                    Starter
                  </th>
                  <th className="text-center py-4 px-6 font-['Unbounded'] font-semibold text-[#7C3AED]">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 font-['Unbounded'] font-semibold text-neutral-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Team Members', '10', '50', 'Unlimited'],
                  ['Storage', '50 GB', '500 GB', 'Unlimited'],
                  ['Analytics', 'Basic', 'Advanced', 'Enterprise'],
                  ['Support', 'Email', 'Priority', '24/7 Dedicated'],
                  ['Custom Integrations', '—', '✓', '✓'],
                  ['SSO & SAML', '—', '—', '✓'],
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-200">
                    <td className="py-4 px-6 text-neutral-900">{row[0]}</td>
                    <td className="py-4 px-6 text-center text-neutral-600">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-neutral-600 bg-[#EDE9FE]/30">
                      {row[2]}
                    </td>
                    <td className="py-4 px-6 text-center text-neutral-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-neutral-900 mb-6">
              Pricing FAQs
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-['Unbounded'] font-semibold text-neutral-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
