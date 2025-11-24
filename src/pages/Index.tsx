import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-bg border-t border-primary/10 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-2xl font-heading font-bold">
              <span className="text-gradient">Dinesh Yadav</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Dinesh Yadav. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Built with passion using React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
