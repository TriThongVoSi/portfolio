import Hero from './components/Hero';
import TechStack from './components/TechStack';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-primary-500/30 selection:text-primary-100">
      <Hero />
      <TechStack />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;
