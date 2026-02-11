import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ClayShape } from '../components/ClayShape';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@nextbigbox.in',
    description: 'Send us an email anytime',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '1800-123-120555',
    description: 'Mon-Fri from 9am to 6pm',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Hari Vihar, Kakrola, New Delhi',
    description: 'Our headquarters',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Monday - Friday: 8am - 6pm PST',
    description: 'Weekend support available',
  },
];

const offices = [
  {
    city: 'New Delhi',
    country: 'India',
    address: '2nd Floor, Property No.67A & 68, Hari Vihar, Kakrola, New Delhi 110078',
    isHQ: true,
  },
  {
    city: 'Mumbai',
    country: 'India',
    address: 'BKC, Bandra East, Mumbai, Maharashtra 400051',
    isHQ: false,
  },
  {
    city: 'Bangalore',
    country: 'India',
    address: 'Koramangala, Bangalore, Karnataka 560034',
    isHQ: false,
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] overflow-hidden">
        <ClayShape 
          type="sphere" 
          color="#EDE9FE" 
          className="absolute top-10 right-[15%] w-48 h-48 opacity-20 blur-[2px]"
          delay={0}
        />
        <ClayShape 
          type="box" 
          color="#C4B5FD" 
          className="absolute bottom-10 left-[10%] w-56 h-56 opacity-20 blur-[2px]"
          delay={0.5}
        />
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Unbounded'] font-semibold text-5xl md:text-6xl text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-purple-100 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="bg-white rounded-2xl p-6 text-center border border-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#EDE9FE] flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-[#7C3AED]" />
                </div>
                <h3 className="font-['Unbounded'] font-semibold text-lg text-neutral-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-[#7C3AED] font-medium mb-1">{method.value}</p>
                <p className="text-sm text-neutral-600">{method.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Unbounded'] font-semibold text-3xl text-neutral-900 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-neutral-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-neutral-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#7C3AED] text-white rounded-xl hover:bg-[#6D28D9] transition-colors shadow-lg shadow-purple-500/20"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Unbounded'] font-semibold text-3xl text-neutral-900 mb-6">
                Our Global Offices
              </h2>
              <div className="space-y-6 mb-12">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-neutral-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-['Unbounded'] font-semibold text-lg text-neutral-900">
                        {office.city}
                      </h3>
                      {office.isHQ && (
                        <span className="bg-[#7C3AED] text-white text-xs px-3 py-1 rounded-full">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-600 text-sm mb-1">{office.country}</p>
                    <p className="text-neutral-500 text-sm">{office.address}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#EDE9FE] to-[#F9FAFB] rounded-2xl p-8">
                <h3 className="font-['Unbounded'] font-semibold text-xl text-neutral-900 mb-4">
                  Need immediate assistance?
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Our support team is available 24/7 to help with any urgent issues. 
                  Use the live chat in the bottom right corner for instant support.
                </p>
                <button className="px-6 py-3 bg-[#7C3AED] text-white rounded-xl hover:bg-[#6D28D9] transition-colors">
                  Start Live Chat
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Unbounded'] font-semibold text-4xl text-neutral-900 mb-6">
              Visit Our Headquarters
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Drop by our New Delhi office for a coffee and chat about how we can help your business.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#EDE9FE] to-[#F9FAFB] rounded-3xl h-96 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#7C3AED] mx-auto mb-4" />
              <p className="text-neutral-600">2nd Floor, Property No.67A & 68, Hari Vihar, Kakrola, New Delhi 110078</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
