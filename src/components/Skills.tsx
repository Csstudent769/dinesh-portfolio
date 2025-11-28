import { Code2, Database, TrendingUp, Zap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-neon-blue",
      skills: [
        { name: "HTML & CSS", level: 85 },
        { name: "JavaScript", level: 75 },
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "text-neon-cyan",
      skills: [
        { name: "Python", level: 80 },
        { name: "Java", level: 70 },
        { name: "MySQL", level: 75 },
      ]
    },
    {
      icon: TrendingUp,
      title: "Data & Analysis",
      color: "text-purple-accent",
      skills: [
        { name: "MS Excel", level: 85 },
        { name: "Data Analysis", level: 75 },
      ]
    },
    {
      icon: Zap,
      title: "Process & Automation",
      color: "text-primary",
      skills: [
        { name: "Process Optimization", level: 90 },
        { name: "Workflow Automation", level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">What I know</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">My Skills</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 duration-300">
                  <div className={`p-4 bg-gradient-to-br from-${category.color}/10 to-${category.color}/5 rounded-2xl border-2 border-${category.color}/20 inline-block mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <IconComponent className={`w-10 h-10 ${category.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-6 group-hover:text-gradient transition-colors">{category.title}</h3>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">{skill.name}</span>
                          <span className="text-xs font-bold px-2 py-1 bg-primary/10 border border-primary/20 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="relative h-2.5 bg-background/50 rounded-full overflow-hidden border border-border/30">
                          <div 
                            className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full shadow-lg shadow-primary/50 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Tech Stack Tags */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-500">
          {["HTML", "CSS", "JavaScript", "Python", "Java", "MySQL", "Excel", "Process Optimization", "Automation"].map((tech, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <span className="relative px-6 py-3 bg-card/40 backdrop-blur-xl border-2 border-primary/20 rounded-full text-sm font-semibold hover:bg-primary/10 hover:border-primary/40 hover:scale-110 transition-all cursor-default shadow-lg inline-block">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
