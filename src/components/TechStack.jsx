import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Code2, Database, Layout, Server, Cloud, Shield, Activity, Cpu } from 'lucide-react';

const categoryIcons = {
  languages: <Code2 className="text-text-primary" size={24} aria-hidden="true" />,
  frameworks: <Layout className="text-text-primary" size={24} aria-hidden="true" />,
  infrastructure: <Database className="text-text-primary" size={24} aria-hidden="true" />,
  devops: <Cloud className="text-text-primary" size={24} aria-hidden="true" />,
  concepts: <Cpu className="text-text-primary" size={24} aria-hidden="true" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Technical Arsenal</h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="@container panel p-8 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-surface-border pb-4">
                <div className="p-3 bg-surface-hover rounded-lg border border-surface-border">
                  {categoryIcons[category] || <Server size={24} aria-hidden="true" />}
                </div>
                <h3 className="text-xl font-bold capitalize text-text-primary">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <motion.span
                    key={item}
                    variants={itemVariants}
                    className="px-4 py-2 bg-surface-hover hover:bg-surface-border border border-surface-border rounded-md text-sm font-medium text-text-primary transition-colors cursor-default"
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
