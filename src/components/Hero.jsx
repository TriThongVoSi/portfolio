import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { name, role, summary } = portfolioData.personalInfo;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary font-mono tracking-wider text-sm md:text-base uppercase"
          >
            Hello, I am
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-text-primary"
          >
            {name}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold text-text-primary"
          >
            {role}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed pt-4"
          >
            {summary}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#case-studies" className="px-8 py-4 bg-primary text-bg-main hover:bg-primary-hover rounded-full font-bold transition-colors w-full sm:w-auto focus-ring">
              View Case Studies
            </a>
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="px-8 py-4 bg-surface hover:bg-surface-hover border border-surface-border text-text-primary rounded-full font-bold transition-colors w-full sm:w-auto focus-ring">
              Visit GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
