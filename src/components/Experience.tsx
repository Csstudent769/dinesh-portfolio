import { Briefcase, Calendar, Sparkles, TrendingUp, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">My Journey</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in delay-200">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-neon-cyan to-purple-accent/50 rounded-full shadow-lg shadow-primary/30"></div>

            {/* Experience Item */}
            <Card className="relative ml-24 overflow-hidden group animate-fade-in delay-300">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative p-10 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02] duration-300">
                {/* Timeline Dot with Enhanced Design */}
                <div className="absolute -left-[5.5rem] top-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl animate-pulse"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-2xl shadow-primary/50 border-4 border-background group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-3xl font-heading font-bold mb-3 group-hover:text-gradient transition-colors">
                        Process Expert
                      </h3>
                      <p className="text-xl text-primary font-bold mb-2">Provana India</p>
                      <p className="text-muted-foreground">Leading process optimization and workflow efficiency initiatives</p>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-full backdrop-blur-xl shadow-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm font-bold">June 2024 - Present</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-foreground/90">
                    <p className="text-lg leading-relaxed">
                      Leading process optimization initiatives to enhance operational efficiency and streamline workflows 
                      across the organization. Implementing data-driven solutions and automation strategies.
                    </p>
                    
                    <div className="pt-6">
                      <p className="font-bold text-lg mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Key Responsibilities
                      </p>
                      <ul className="space-y-3">
                        {[
                          { text: "Analyzing and optimizing business processes for improved efficiency", icon: Lightbulb },
                          { text: "Implementing workflow automation solutions using technical expertise", icon: Sparkles },
                          { text: "Collaborating with cross-functional teams to identify improvement areas", icon: Users },
                          { text: "Managing data analysis and reporting using MS Excel and other tools", icon: TrendingUp },
                          { text: "Ensuring quality standards and continuous process improvement", icon: Briefcase }
                        ].map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <li key={index} className="flex items-start gap-4 group/item">
                              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 group-hover/item:scale-110 group-hover/item:bg-primary/20 transition-all">
                                <IconComponent className="w-4 h-4 text-primary" />
                              </div>
                              <span className="flex-1 pt-1">{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div className="pt-6 border-t-2 border-border/30">
                    <p className="text-sm font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      Skills Applied
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Process Optimization", "Data Analysis", "MS Excel", "Workflow Automation", "Team Collaboration"].map((skill, index) => (
                        <span 
                          key={index}
                          className="group/skill relative"
                        >
                          <div className="absolute inset-0 bg-gradient-primary rounded-full blur opacity-0 group-hover/skill:opacity-30 transition-opacity"></div>
                          <span className="relative px-4 py-2 bg-primary/10 border-2 border-primary/20 rounded-full text-sm font-semibold hover:bg-primary/20 hover:border-primary/40 hover:scale-110 transition-all inline-block">
                            {skill}
                          </span>
                        </span>
                      ))}
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

export default Experience;
