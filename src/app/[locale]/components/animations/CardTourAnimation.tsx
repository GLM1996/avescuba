import React, { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

interface CardTourAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  animateOnce?: boolean;
}

export const CardTourAnimation: React.FC<CardTourAnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  style = {},
  animateOnce = true,
}) => (
  <motion.div
    style={style}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay }}
    viewport={{ once: animateOnce, margin: "-50px" }}
  >
    {children}
  </motion.div>
);
