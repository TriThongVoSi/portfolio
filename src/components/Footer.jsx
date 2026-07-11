import { portfolioData } from '../data/portfolio';
import { Mail } from 'lucide-react';

export default function Footer() {
  const { name, github, linkedin, email } = portfolioData.personalInfo;
  
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-slate-400 max-w-sm">
              Building robust backend systems and intuitive digital products.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href={github} target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={`mailto:${email}`} className="p-3 bg-slate-900 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p>Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
