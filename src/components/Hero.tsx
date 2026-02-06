import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code2, Sparkles, Award, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/dinesh-yadav.jpg";

const Hero = () => {
  const floatingSkills = [
    { name: "React", icon: "⚛️", delay: "0s", position: "top-1/4 left-[15%]" },
    { name: "Python", icon: "🐍", delay: "0.5s", position: "top-1/3 right-[20%]" },
    { name: "JavaScript", icon: "⚡", delay: "1s", position: "bottom-1/3 left-[10%]" },
    { name: "MySQL", icon: "🗄️", delay: "1.5s", position: "bottom-1/4 right-[15%]" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-primary/5">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-accent/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-purple-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.4s" }}></div>
      </div>

      {/* Floating Skill Badges */}
      <div className="absolute inset-0 hidden lg:block">
        {floatingSkills.map((skill, index) => (
          <div
            key={index}
            className={`absolute ${skill.position} animate-float`}
            style={{ animationDelay: skill.delay, animationDuration: "6s" }}
          >
            <div className="px-4 py-2 bg-card/40 backdrop-blur-xl border border-primary/20 rounded-full flex items-center gap-2 shadow-lg hover:scale-110 hover:border-primary/40 transition-all cursor-default group">
              <span className="text-2xl group-hover:scale-125 transition-transform">{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge with Enhanced Design */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 backdrop-blur-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all group">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Available for Opportunities</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>

            <div className="space-y-6">
              {/* Main Heading with Stagger Animation */}
              <div className="space-y-3">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tight">
                  <span className="block animate-fade-in">Hello, I'm</span>
                  <span className="block text-gradient animate-fade-in delay-100 hover:scale-105 transition-transform inline-block">
                    Dinesh Yadav
                  </span>
                </h1>
              </div>

              {/* Enhanced Subtitle with Icon */}
              <div className="space-y-3 animate-fade-in delay-200">
                <p className="text-2xl md:text-4xl font-heading font-semibold text-foreground/90 flex items-center gap-3">
                  <Code2 className="w-8 h-8 text-primary" />
                  Web Designer & Developer
                </p>
                <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    <span>Process Expert</span>
                  </div>
                  <span className="text-primary">|</span>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span>Technical Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed animate-fade-in delay-300">
              B.Tech CSE Graduate with expertise in <span className="text-primary font-semibold">web development</span>, <span className="text-accent font-semibold">process optimization</span>, 
              and workflow automation. Passionate about creating efficient digital solutions.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
              <Button 
                size="lg" 
                className="gradient-primary glow-blue group hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all px-8 py-6 text-base"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary backdrop-blur-xl px-8 py-6 text-base hover:scale-105 transition-all group"
              >
                View Projects
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Stats with Cards */}
            <div className="flex flex-wrap gap-6 pt-8 animate-fade-in delay-500">
              {[
                { value: "6+", label: "Months Experience", icon: "💼" },
                { value: "10+", label: "Skills Mastered", icon: "🚀" },
                { value: "2023", label: "B.Tech Graduate", icon: "🎓" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative px-6 py-4 bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl hover:border-primary/40 transition-all hover:scale-110 cursor-default">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl">{stat.icon}</span>
                      <p className="text-3xl font-heading font-bold text-gradient">{stat.value}</p>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Enhanced Profile Section */}
          <div className="relative flex items-center justify-center animate-fade-in delay-300">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: "3s" }}></div>
              <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-ping" style={{ animationDuration: "4s", animationDelay: "0.5s" }}></div>
              
              {/* Main Glow Effect */}
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-40 animate-pulse"></div>
              
              {/* Profile Container with Glassmorphism */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/40 backdrop-blur-2xl bg-gradient-to-br from-card/50 to-card/30 shadow-2xl hover:scale-105 transition-transform duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                
                <div className="relative h-full flex items-center justify-center">
                  <img 
                    src={profilePhoto} 
                    alt="Dinesh Yadav" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-neon-cyan/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: "4s" }}></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "0.5s" }}></div>
              <div className="absolute top-1/4 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "1s" }}></div>
              
              {/* Decorative Geometric Shapes */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-neon-cyan/30 rounded-lg rotate-12 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 border-2 border-purple-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Scroll</p>
          <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex items-start justify-center p-2 group-hover:border-primary transition-colors">
            <div className="w-2 h-4 bg-gradient-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
