import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, ChevronRight, Layout } from 'lucide-react';

const AcademicPoster = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="@container panel p-8 md:p-12 mb-16 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
      
      <div className="flex flex-col @md:flex-row gap-10">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-surface-hover text-text-primary rounded-full text-sm font-bold border border-surface-border">
            Academic Research / System Architecture
          </div>
          <h3 className="text-3xl @md:text-4xl font-bold text-text-primary">{project.title}</h3>
          <p className="text-text-secondary text-lg leading-relaxed">{project.description}</p>
          
          <div className="pt-6 border-t border-surface-border">
            <h4 className="text-xl font-semibold mb-4 text-text-primary">Multi-Agent Workflow</h4>
            <div className="grid grid-cols-1 @sm:grid-cols-3 gap-6">
              {project.agents.map((agent, idx) => (
                <div key={idx} className="bg-surface-hover p-5 rounded-xl border border-surface-border hover:border-primary transition-colors">
                  <div className="mb-4 text-text-primary">
                    <agent.icon size={32} aria-hidden="true" />
                  </div>
                  <h5 className="font-semibold text-text-primary mb-2">{agent.name}</h5>
                  <p className="text-sm text-text-secondary leading-relaxed">{agent.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductShowcase = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="@container panel p-8 md:p-12 mb-16 flex flex-col @lg:flex-row gap-10 items-center border-t-4 border-t-primary"
    >
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl @md:text-4xl font-bold text-text-primary">{project.title}</h3>
        <p className="text-text-secondary text-lg leading-relaxed">{project.description}</p>
        
        <div>
          <h4 className="text-lg font-semibold mb-3 text-text-primary">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-text-secondary">
                <ChevronRight className="text-primary shrink-0 mt-1" size={18} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-4">
          {project.techStack.map(tech => (
            <span key={tech} className="px-3 py-1 bg-surface-hover text-text-primary font-medium rounded text-sm border border-surface-border">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="pt-6">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-bg-main font-bold rounded-lg hover:bg-primary-hover transition-colors focus-ring"
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
            View Source Code
          </a>
        </div>
      </div>
      
      {/* Product Image or Placeholder */}
      <div className="flex-1 w-full @lg:w-1/2 aspect-video bg-surface-hover rounded-xl border border-surface-border flex items-center justify-center relative overflow-hidden group">
         {project.images && project.images.length > 0 ? (
           <img 
             src={project.images[0]} 
             alt={`${project.title} UI`} 
             loading="lazy"
             className="w-full h-full object-cover"
           />
         ) : (
           <div className="text-text-secondary flex flex-col items-center gap-3 font-medium">
             <Layout size={48} className="opacity-50" aria-hidden="true" />
             <span>Product UI / Architecture Diagram</span>
           </div>
         )}
      </div>
    </motion.div>
  );
};

export default function CaseStudies() {
  const { caseStudies } = portfolioData;

  return (
    <section id="case-studies" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">Case Studies</h2>
          <div className="w-24 h-2 bg-primary mb-6"></div>
          <p className="text-xl text-text-secondary max-w-2xl">
            A deep dive into selected projects, focusing on architecture, system design, and product value.
          </p>
        </div>

        <div>
          {caseStudies.map((project) => (
            project.type === 'academic' 
              ? <AcademicPoster key={project.id} project={project} />
              : <ProductShowcase key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
