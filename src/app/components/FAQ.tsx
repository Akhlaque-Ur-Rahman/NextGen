import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'How quickly can I get started?',
    answer: 'You can be up and running in under 10 minutes. Our intuitive onboarding process guides you through setup, and our team is available 24/7 if you need assistance.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 email and chat support for all plans, with dedicated account managers for enterprise customers. We also offer comprehensive documentation and video tutorials.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer: 'Yes! We offer native integrations with over 100+ popular tools and platforms. Our API also allows for custom integrations to fit your specific needs.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-grade encryption, comply with SOC 2 Type II standards, and regularly undergo third-party security audits. Your data is stored in secure, redundant data centers.',
  },
  {
    question: 'What happens after my free trial ends?',
    answer: 'You can choose to upgrade to a paid plan or continue with our free tier. No credit card is required for the trial, and you can cancel anytime without any obligations.',
  },
  {
    question: 'Do you offer custom enterprise plans?',
    answer: 'Yes, we work with enterprise clients to create custom solutions tailored to their specific requirements, including dedicated infrastructure, SLAs, and compliance needs.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-neutral-900 mb-6">
            Frequently asked <span className='text-shine font-bold' >questions</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Have a different question? Contact our support team anytime.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#FAFAFA] rounded-xl px-6 border border-neutral-200"
              >
                <AccordionTrigger className="text-left font-['Unbounded'] font-medium text-neutral-900 hover:text-[#7C3AED] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
