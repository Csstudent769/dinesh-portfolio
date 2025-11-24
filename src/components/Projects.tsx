import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Responsive Portfolio Website",
      description: "A modern personal portfolio built using HTML, CSS, and JavaScript featuring smooth animations, responsive design, and interactive elements.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Data Analysis Dashboard",
      description: "A Python and Excel-based project showcasing data insights and trends with interactive visual charts and comprehensive analytics.",
      tags: ["Python", "MS Excel", "Data Analysis", "Visualization"],
      gradient: "from-neon-cyan to-purple-accent"
    },
    {
      title: "Workflow Automation Script",
      description: "A Python automation tool designed to improve efficiency and reduce manual tasks through intelligent workflow optimization.",
      tags: ["Python", "Automation", "Process Optimization", "Scripting"],
      gradient: "from-purple-accent to-neon-blue"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">My Work</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing a selection of projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all group hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-heading font-bold group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in delay-500">
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:border-primary">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
