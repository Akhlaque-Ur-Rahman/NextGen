import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Target, Heart, Lightbulb, Award } from 'lucide-react';
import { ClayShape } from '../components/ClayShape';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We exist to empower businesses with tools that drive real growth and efficiency.',
  },
  {
    icon: Heart,
    title: 'Customer-Centric',
    description: 'Every decision we make starts with understanding and serving our customers better.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we build and deliver.',
  },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'Chief Executive Officer',
    bio: '15+ years leading technology companies',
    initials: 'AM',
  },
  {
    name: 'Jordan Liu',
    role: 'Chief Technology Officer',
    bio: 'Former VP Engineering at Fortune 500',
    initials: 'JL',
  },
  {
    name: 'Sam Patel',
    role: 'Chief Product Officer',
    bio: 'Product visionary with 10+ years experience',
    initials: 'SP',
  },
  {
    name: 'Casey Wong',
    role: 'Chief Design Officer',
    bio: 'Award-winning UX design leader',
    initials: 'CW',
  },
  {
    name: 'Taylor Kim',
    role: 'VP of Engineering',
    bio: 'Built scalable systems for millions of users',
    initials: 'TK',
  },
  {
    name: 'Morgan Davis',
    role: 'VP of Customer Success',
    bio: 'Dedicated to customer satisfaction and growth',
    initials: 'MD',
  },
];

const milestones = [
  { year: '2020', event: 'Company Founded', description: 'Started with a vision to transform business operations' },
  { year: '2021', event: 'Series A Funding', description: 'Raised $10M to accelerate product development' },
  { year: '2022', event: '10K Customers', description: 'Reached milestone of 10,000 active customers' },
  { year: '2023', event: 'Global Expansion', description: 'Expanded operations to 50+ countries' },
  { year: '2024', event: 'Series B Funding', description: 'Secured $50M for continued growth' },
  { year: '2025', event: 'Industry Leader', description: 'Recognized as category leader by analysts' },
  { year: '2026', event: '100K+ Customers', description: 'Serving over 100,000 businesses worldwide' },
];

export function AboutPage() {
  const teamSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] overflow-hidden">
        <ClayShape 
          type="sphere" 
          color="#EDE9FE" 
          className="absolute top-10 right-[10%] w-56 h-56 opacity-20 blur-[2px]"
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
              Building the Future of Work
            </h1>
            <p className="text-lg text-purple-100 leading-relaxed">
              We're on a mission to empower businesses worldwide with intelligent solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Unbounded'] font-semibold text-4xl text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  NexGen was born from a simple observation: businesses were struggling with fragmented tools, 
                  complex workflows, and the inability to scale efficiently. We knew there had to be a better way.
                </p>
                <p>
                  In 2020, our founders came together with a shared vision—to create a unified platform that would 
                  eliminate complexity and empower teams to focus on what truly matters: growth and innovation.
                </p>
                <p>
                  Today, we serve over 100,000 businesses across 50+ countries, helping them transform operations, 
                  enhance collaboration, and achieve their goals faster than ever before.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#EDE9FE] to-[#F9FAFB] rounded-3xl p-16 text-center">
                <div className="text-8xl mb-6">🚀</div>
                <div className="font-['Unbounded'] text-5xl font-semibold text-[#7C3AED] mb-2">100K+</div>
                <div className="text-neutral-600">Businesses Empowered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center border border-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#EDE9FE] flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#7C3AED]" />
                </div>
                <h3 className="font-['Unbounded'] font-semibold text-xl text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Slider */}
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
              Meet Our Leadership
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              The experienced team driving innovation and growth at NexGen.
            </p>
          </motion.div>

          <div className="team-slider -mx-4">
            <Slider {...teamSettings}>
              {team.map((member, index) => (
                <div key={index} className="px-4">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-['Unbounded'] font-semibold text-2xl">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="font-['Unbounded'] font-semibold text-lg text-neutral-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#7C3AED] text-sm mb-2">{member.role}</p>
                    <p className="text-neutral-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <style>{`
          .team-slider .slick-dots {
            bottom: -50px;
          }
          .team-slider .slick-dots li button:before {
            font-size: 10px;
            color: #7C3AED;
            opacity: 0.3;
          }
          .team-slider .slick-dots li.slick-active button:before {
            opacity: 1;
          }
        `}</style>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Key milestones in our growth story.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-[#7C3AED] flex items-center justify-center">
                    <span className="font-['Unbounded'] font-semibold text-white text-sm">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="font-['Unbounded'] font-semibold text-xl text-neutral-900 mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
