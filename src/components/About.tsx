import { GraduationCap, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <GraduationCap className="w-24 h-24 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Your Photo Here</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-neon-cyan/30 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-purple-accent/30 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in delay-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground/90">
                I graduated in B.Tech with Computer Science Engineering from ANA Group of Institutions in 2023. 
                Currently seeking a beginner role to enhance and explore my technical knowledge gained during my academic journey.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                As a fresher, I have a strong foundation in modern web technologies including HTML, CSS, JavaScript, 
                Python, Java, and MySQL. I've completed several personal projects to enhance my skills and stay 
                updated with industry trends.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Passionate about learning new technologies and possess the ability to handle work pressure while 
                maintaining quality and efficiency in deliverables.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-2 gap-4 pt-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors group">
                <Target className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-lg mb-2">Goal-Oriented</h3>
                <p className="text-sm text-muted-foreground">Focused on delivering results and continuous improvement</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors group">
                <Zap className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-lg mb-2">Quick Learner</h3>
                <p className="text-sm text-muted-foreground">Rapidly adapting to new technologies and methodologies</p>
              </Card>
            </div>

            {/* Education */}
            <div className="pt-6 border-t border-border/50">
              <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-lg">Bachelor of Technology - Computer Science Engineering</p>
                  <p className="text-primary">ANA Group of Institutions</p>
                  <p className="text-sm text-muted-foreground">Graduated 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
