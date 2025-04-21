import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent leading-tight">
        jamiw sucks at dev
      </h1>
      <p className="text-dark-400 text-lg animate-pulse">
        he stinks
      </p>
    </motion.div>
  );
};

export default Home;
