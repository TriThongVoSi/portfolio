import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { name, role, summary } = portfolioData.personalInfo;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 font-mono tracking-wider text-sm md:text-base uppercase"
          >
            Hello, I am
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            {name}
          </motion.h1>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-gradient"
          >
            {role}
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed pt-4"
          >
            {summary}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#case-studies" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium transition-colors w-full sm:w-auto shadow-lg shadow-primary-500/25">
              View Case Studies
            </a>
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="px-8 py-4 glass-panel hover:bg-slate-800/50 text-white rounded-full font-medium transition-colors w-full sm:w-auto">
              Visit GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
