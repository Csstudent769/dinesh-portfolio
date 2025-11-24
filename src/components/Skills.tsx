import { Code2, Database, TrendingUp, Zap } from "lucide-react";
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
    <section id="skills" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">What I know</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <category.icon className={`w-12 h-12 ${category.color} mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="font-heading font-semibold text-lg mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in delay-500">
          {["HTML", "CSS", "JavaScript", "Python", "Java", "MySQL", "Excel", "Process Optimization", "Automation"].map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
