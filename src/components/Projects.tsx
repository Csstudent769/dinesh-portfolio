import { ExternalLink, Github, Sparkles, Code, Database, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Responsive Portfolio Website",
      description: "A modern personal portfolio built using HTML, CSS, and JavaScript featuring smooth animations, responsive design, and interactive elements.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      gradient: "from-neon-blue to-neon-cyan",
      icon: Code
    },
    {
      title: "Data Analysis Dashboard",
      description: "A Python and Excel-based project showcasing data insights and trends with interactive visual charts and comprehensive analytics.",
      tags: ["Python", "MS Excel", "Data Analysis", "Visualization"],
      gradient: "from-neon-cyan to-purple-accent",
      icon: Database
    },
    {
      title: "Workflow Automation Script",
      description: "A Python automation tool designed to improve efficiency and reduce manual tasks through intelligent workflow optimization.",
      tags: ["Python", "Automation", "Process Optimization", "Scripting"],
      gradient: "from-purple-accent to-neon-blue",
      icon: Bot
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">My Work</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            A showcase of projects demonstrating technical skills and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Header with Enhanced Gradient */}
                <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                      <div className="relative w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-2xl">
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay with Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Button size="sm" className="gradient-primary glow-blue backdrop-blur-xl">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20 backdrop-blur-xl">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all">
                  <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold hover:bg-primary/20 hover:border-primary/30 hover:scale-110 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center animate-fade-in delay-500">
          <Button size="lg" className="gradient-primary glow-blue group">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
