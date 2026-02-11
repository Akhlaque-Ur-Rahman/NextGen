import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'NexGen transformed how we operate. The automation features alone saved us 20+ hours per week. Highly recommended for any growing business.',
    rating: 5,
    image: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Innovate Labs',
    content: 'The best investment we made this year. The platform is intuitive, powerful, and the support team is incredibly responsive.',
    rating: 5,
    image: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Operations, DataFlow',
    content: 'We saw immediate improvements in team collaboration and productivity. The analytics dashboard gives us insights we never had before.',
    rating: 5,
    image: 'ER',
  },
  {
    name: 'David Park',
    role: 'Founder, CloudSync',
    content: 'Exceptional platform with enterprise-grade security. Our clients trust us more knowing we use NexGen to manage their data.',
    rating: 5,
    image: 'DP',
  },
  {
    name: 'Lisa Thompson',
    role: 'VP Product, Quantum Systems',
    content: 'The ROI was clear within the first month. NexGen scales with us and adapts to our changing needs effortlessly.',
    rating: 5,
    image: 'LT',
  },
];

export function Testimonials() {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 md:py-32 bg-[#FAFAFA] bg-dot-pattern relative">
       {/* Abstract Background Elements */}
       <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-16 gap-6 md:gap-8">
            <motion.div
              className="text-left w-full md:max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#D8B4FE] mb-6">
                <Star className="w-4 h-4 text-[#7C3AED] fill-[#7C3AED]" />
                <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">Testimonials</span>
              </div>
              <h2 className="font-['Unbounded'] font-semibold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4 md:mb-6">
                Trusted by <span className='text-shine font-bold' >thousands</span> 
              </h2>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                See what our customers are saying about their experience with NexGen.
              </p>
            </motion.div>

            {/* Custom Navigation Buttons */}
            <motion.div 
               className="hidden md:flex items-center gap-4"
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
            >
                <button 
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-[#7C3AED] hover:border-[#7C3AED] hover:bg-[#F3E8FF] transition-all duration-300 shadow-sm hover:shadow-md group"
                  aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => sliderRef.current?.slickNext()}
                  className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-[#7C3AED] hover:border-[#7C3AED] hover:bg-[#F3E8FF] transition-all duration-300 shadow-sm hover:shadow-md group"
                  aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>
        </div>

        <div className="testimonials-slider pb-12">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 md:px-4 h-full">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 h-full hover:shadow-xl hover:shadow-purple-500/5 transition-shadow duration-300 flex flex-col justify-between">
                  <div>
                      <Quote className="w-10 h-10 text-[#7C3AED] mb-4 opacity-30" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#7C3AED] text-[#7C3AED]" />
                        ))}
                      </div>
                      <p className="text-neutral-700 leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center shadow-md">
                      <span className="text-white font-['Unbounded'] font-semibold text-sm">
                        {testimonial.image}
                      </span>
                    </div>
                    <div>
                      <div className="font-['Unbounded'] font-semibold text-neutral-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -20px;
          text-align: left;
          padding-left: 10px;
        }
        .testimonials-slider .slick-dots li button:before {
          font-size: 10px;
          color: #7C3AED;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          font-size: 12px;
        }
        .testimonials-slider .slick-track {
           display: flex;
        }
        .testimonials-slider .slick-slide {
           height: auto;
        }
        .testimonials-slider .slick-slide > div {
           height: 100%;
        }
      `}</style>
    </section>
  );
}
