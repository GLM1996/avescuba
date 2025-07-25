import React, { CSSProperties } from 'react';
import { motion } from 'framer-motion';

interface BackgroundAnimationProps {
  animation?: 'rotate' | 'slide';
  duration?: number;
  style?: CSSProperties;
  backgroundImage?: string; // requires full "url(...)"
  overlayOpacity?: number;
}

export const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({
  animation = 'slide',
  duration = 1.5,
  style = {},
  backgroundImage = '',
  overlayOpacity = 0.6,
}) => {
  const variants = {
    rotate: {
      initial: { rotate: 0 },
      animate: { rotate: 360 },
    },
    slide: {
      initial: { x: '-100vw' },
      animate: { x: 0 },
    },
  };

  return (
    <motion.div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage, ...style }}
      initial={variants[animation].initial}
      animate={variants[animation].animate}
      transition={{ duration, ease: 'easeInOut' }}
    >
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
    </motion.div>
  );
};
