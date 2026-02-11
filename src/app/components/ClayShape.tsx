import { motion } from 'motion/react';

interface ClayShapeProps {
  type?: 'sphere' | 'torus' | 'box';
  color?: string;
  className?: string;
  delay?: number;
}

export function ClayShape({ 
  type = 'sphere', 
  color = '#A78BFA',
  className = '',
  delay = 0
}: ClayShapeProps) {
  const shapes = {
    sphere: (
      <motion.div
        className={`rounded-full ${className}`}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}dd, ${color}88)`,
          boxShadow: `0 20px 60px ${color}40`,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    ),
    torus: (
      <motion.div
        className={`rounded-full ${className}`}
        style={{
          background: `conic-gradient(from 45deg, ${color}dd, ${color}66, ${color}dd)`,
          boxShadow: `0 20px 60px ${color}40, inset 0 0 40px ${color}33`,
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />
    ),
    box: (
      <motion.div
        className={`rounded-3xl ${className}`}
        style={{
          background: `linear-gradient(135deg, ${color}dd, ${color}88)`,
          boxShadow: `0 20px 60px ${color}40`,
        }}
        animate={{
          y: [0, -25, 0],
          rotateX: [0, 15, 0],
          rotateY: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    ),
  };

  return shapes[type];
}
