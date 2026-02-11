
import { Shield, Zap, Users, BarChart3, Lock, Workflow, Globe, Smartphone, Database, Cloud, Settings, HeadphonesIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import { ClayShape } from '../components/ClayShape';

const allFeatures = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with industry standards to keep your data safe.',
    benefits: ['SOC 2 Type II Certified', 'End-to-end encryption', 'Regular security audits', 'GDPR compliant'],
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures your team can work without interruption or delay.',
    benefits: ['99.9% uptime SLA', 'Global CDN', 'Sub-second response times', 'Real-time sync'],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools that bring your entire organization together.',
    benefits: ['Live co-editing', 'Team workspaces', 'Role-based permissions', 'Activity tracking'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Make data-driven decisions with comprehensive analytics and reporting.',
    benefits: ['Custom dashboards', 'Predictive analytics', 'Export to CSV/PDF', 'Automated reports'],
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data belongs to you. We never share or sell your information.',
    benefits: ['Zero-knowledge architecture', 'Data portability', 'Right to deletion', 'Transparent policies'],
  },
  {
    icon: Workflow,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and focus on what truly matters for growth.',
    benefits: ['Workflow builder', 'AI-powered suggestions', 'Trigger-based actions', 'Custom integrations'],
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serve customers worldwide with multi-language and multi-currency support.',
    benefits: ['20+ languages', 'Multi-currency', 'Regional compliance', 'Local hosting options'],
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Access your work from anywhere with our native mobile applications.',
    benefits: ['iOS & Android apps', 'Offline mode', 'Push notifications', 'Responsive design'],
  },
  {
    icon: Database,
    title: 'Unlimited Storage',
    description: 'Store all your data without worrying about limits or additional costs.',
    benefits: ['Scalable storage', 'Automatic backups', 'Version history', 'File previews'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Built on reliable cloud infrastructure for maximum availability.',
    benefits: ['Multi-region hosting', 'Auto-scaling', 'Disaster recovery', '99.99% availability'],
  },
  {
    icon: Settings,
    title: 'Customizable',
    description: 'Tailor every aspect of the platform to match your unique workflow.',
    benefits: ['Custom fields', 'Branded interface', 'API access', 'Webhook support'],
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our expert support team is always available to help you succeed.',
    benefits: ['Live chat support', 'Email & phone', 'Knowledge base', 'Dedicated account manager'],
  },
];

const showcaseItems = [
  {
    title: 'Intuitive Dashboard',
    description: 'Get a complete overview of your business metrics at a glance',
    image: '📊',
  },
  {
    title: 'Advanced Reporting',
    description: 'Generate detailed reports with just a few clicks',
    image: '📈',
  },
  {
    title: 'Team Management',
    description: 'Easily manage team members, roles, and permissions',
    image: '👥',
  },
  {
    title: 'Integration Hub',
    description: 'Connect with 100+ tools and services seamlessly',
    image: '🔗',
  },
  {
    title: 'Smart Workflows',
    description: 'Automate complex processes with our visual builder',
    image: '⚡',
  },
];

export function FeaturesPage() {
  const showcaseSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
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
              Powerful Features for Modern Teams
            </h1>
            <p className="text-lg text-purple-100 leading-relaxed">
              Everything you need to streamline operations, enhance collaboration, and drive growth—all in one platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase Slider */}
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
              See it in action
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Explore the key features that make NexGen the perfect solution for your business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto showcase-slider">
            <Slider {...showcaseSettings}>
              {showcaseItems.map((item, index) => (
                <div key={index}>
                  <div className="bg-gradient-to-br from-[#EDE9FE] to-[#F9FAFB] rounded-3xl p-8 md:p-16 text-center">
                    <div className="text-8xl mb-8">{item.image}</div>
                    <h3 className="font-['Unbounded'] font-semibold text-3xl text-neutral-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-neutral-600 max-w-xl mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <style>{`
          .showcase-slider .slick-dots {
            bottom: -60px;
          }
          .showcase-slider .slick-dots li button:before {
            font-size: 12px;
            color: #7C3AED;
            opacity: 0.3;
          }
          .showcase-slider .slick-dots li.slick-active button:before {
            opacity: 1;
          }
        `}</style>
      </section>

      {/* All Features Grid */}
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
              Complete feature set
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Discover all the tools and capabilities designed to help your business thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#EDE9FE] flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#7C3AED]" />
                </div>
                <h3 className="font-['Unbounded'] font-semibold text-xl text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ClayShape 
              type="torus" 
              color="#EDE9FE" 
              className="absolute top-0 right-0 w-64 h-64 opacity-10"
              delay={0}
            />
            <div className="relative z-10">
              <h2 className="font-['Unbounded'] font-semibold text-4xl md:text-5xl text-white mb-6">
                Ready to experience all features?
              </h2>
              <p className="text-lg text-purple-100 mb-10 max-w-2xl mx-auto">
                Start your free 14-day trial and discover how NexGen can transform your business.
              </p>
              <button className="px-8 py-4 bg-white text-[#7C3AED] rounded-xl hover:bg-neutral-100 transition-all shadow-2xl">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
