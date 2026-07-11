import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Code2, Database, Layout, Server, Cloud, Shield, Activity, Cpu } from 'lucide-react';

const categoryIcons = {
  languages: <Code2 className="text-primary-400" size={24} />,
  frameworks: <Layout className="text-accent-400" size={24} />,
  infrastructure: <Database className="text-emerald-400" size={24} />,
  devops: <Cloud className="text-blue-400" size={24} />,
  concepts: <Cpu className="text-orange-400" size={24} />
};

export default function TechStack() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="tech-stack" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  {categoryIcons[category] || <Server size={24} />}
                </div>
                <h3 className="text-xl font-semibold capitalize">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <motion.span
                    key={item}
                    variants={itemVariants}
                    className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 rounded-full text-sm text-slate-300 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
