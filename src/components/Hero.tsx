import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Available for Opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Hello, I'm <br />
                <span className="text-gradient">Dinesh Yadav</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Web Designer & Developer
              </p>
              <p className="text-xl text-muted-foreground">
                Process Expert | Technical Enthusiast
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              B.Tech CSE Graduate with expertise in web development, process optimization, 
              and workflow automation. Passionate about creating efficient digital solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gradient-primary glow-blue group hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary backdrop-blur-sm"
              >
                View Projects
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-heading font-bold text-primary">6+</p>
                <p className="text-sm text-muted-foreground">Months Experience</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Skills Mastered</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">2023</p>
                <p className="text-sm text-muted-foreground">B.Tech Graduate</p>
              </div>
            </div>
          </div>

          {/* Right - Profile Image Placeholder */}
          <div className="relative flex items-center justify-center animate-fade-in delay-300">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 backdrop-blur-sm bg-card/30 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-muted-foreground">Profile Picture</p>
                  <p className="text-xs text-muted-foreground/60">Add your professional photo here</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
