import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface Bubble3DProps {
  icon: LucideIcon;
  color: string;
  size?: number;
  delay?: number;
  className?: string;
  xRange?: number[];
  yRange?: number[];
  duration?: number;
}

export function Bubble3D({ 
  icon: Icon, 
  color, 
  size = 64, 
  delay = 0, 
  className = '',
  xRange = [-10, 10], // Default horizontal float range
  yRange = [-15, 15], // Default vertical float range
  duration = 4
}: Bubble3DProps) {
  return (
    <motion.div
      className={`relative flex items-center justify-center rounded-full backdrop-blur-sm pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}33, ${color}11)`,
        boxShadow: `
          inset 0 0 20px ${color}22,
          0 10px 40px ${color}33,
          0 0 0 1px ${color}22
        `,
        border: `1px solid ${color}33`
      }}
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: yRange,
        x: xRange,
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }}
    >
      {/* Glossy Reflection */}
      <div className="absolute top-2 left-3 w-1/3 h-1/4 bg-white/20 rounded-full blur-[2px]" />
      <div className="absolute bottom-2 right-3 w-1/5 h-1/5 bg-white/10 rounded-full blur-[2px]" />

      {/* Icon */}
      <Icon 
        size={size * 0.5} 
        color={color} 
        style={{ filter: `drop-shadow(0 0 10px ${color}66)` }}
      />
    </motion.div>
  );
}
