import { GraduationCap, Target, Zap, Code, Sparkles, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/dinesh-yadav.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Get to know me</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Enhanced Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main Card with Glassmorphism */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-card/70 to-card/50 backdrop-blur-2xl p-10 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
                
                <img 
                  src={profilePhoto} 
                  alt="Dinesh Yadav" 
                  className="relative w-full h-full object-cover object-top rounded-2xl"
                />
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 border-2 border-neon-cyan/30 rounded-3xl -z-10 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-purple-accent/30 rounded-3xl -z-10 animate-float" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 -right-6 w-20 h-20 bg-neon-cyan/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-1/4 -left-6 w-24 h-24 bg-purple-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>

          {/* Right - Enhanced Content */}
          <div className="space-y-8 animate-fade-in delay-200">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-foreground/90 font-medium">
                I graduated in <span className="text-primary font-semibold">B.Tech with Computer Science Engineering</span> from ANA Group of Institutions in 2023. 
                Currently seeking a beginner role to enhance and explore my technical knowledge gained during my academic journey.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                As a fresher, I have a strong foundation in modern web technologies including <span className="text-accent font-semibold">HTML, CSS, JavaScript, 
                Python, Java, and MySQL</span>. I've completed several personal projects to enhance my skills and stay 
                updated with industry trends.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Passionate about learning new technologies and possess the ability to handle work pressure while 
                maintaining quality and efficiency in deliverables.
              </p>
            </div>

            {/* Enhanced Key Highlights */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-gradient transition-colors">Goal-Oriented</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Focused on delivering results and continuous improvement</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-accent/40 transition-all hover:scale-105 duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Zap className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-gradient transition-colors">Quick Learner</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Rapidly adapting to new technologies and methodologies</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden md:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-purple-accent/40 transition-all hover:scale-[1.02] duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-accent/10 rounded-2xl border border-purple-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Code className="w-8 h-8 text-purple-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-gradient transition-colors">Technical Expertise</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Strong foundation in web development, databases, and programming with hands-on project experience</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Enhanced Education */}
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-primary rounded-2xl shadow-lg shadow-primary/20">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-2xl mb-4 flex items-center gap-2">
                      Education
                      <Trophy className="w-5 h-5 text-primary" />
                    </h3>
                    <div className="space-y-2">
                      <p className="font-bold text-xl text-gradient">Bachelor of Technology</p>
                      <p className="text-lg text-foreground/90">Computer Science Engineering</p>
                      <p className="text-primary font-semibold">ANA Group of Institutions</p>
                      <div className="flex items-center gap-2 pt-2">
                        <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                          <p className="text-sm font-medium">Graduated 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
