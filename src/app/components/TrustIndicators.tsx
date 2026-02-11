import { motion } from 'motion/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: 'TechCorp', color: '#7C3AED' },
  { name: 'Innovate', color: '#A78BFA' },
  { name: 'DataFlow', color: '#6B7280' },
  { name: 'CloudSync', color: '#7C3AED' },
  { name: 'Nexus', color: '#A78BFA' },
  { name: 'Quantum', color: '#6B7280' },
  { name: 'CyberSys', color: '#7C3AED' },
  { name: 'BlockChain', color: '#A78BFA' },
];

export function TrustIndicators() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-white border-y border-neutral-200 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
           className="text-center mb-12"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
           <h2 className="font-['Unbounded'] font-semibold text-2xl md:text-3xl lg:text-5xl text-neutral-900 mb-10">
              Trusted by <span className="text-shine">Industry Leaders</span>
           </h2>
        </motion.div>

        <div className="trust-slider">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-4">
                <div className="flex items-center justify-center h-16">
                   <div 
                      className="font-['Unbounded'] font-semibold text-sm md:text-base lg:text-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer whitespace-nowrap"
                      style={{ color: logo.color }}
                   >
                     {logo.name}
                   </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
