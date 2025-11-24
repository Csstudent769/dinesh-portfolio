import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in delay-200">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-neon-cyan to-transparent"></div>

            {/* Experience Item */}
            <Card className="relative ml-20 p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all group hover:scale-[1.02]">
              {/* Timeline Dot */}
              <div className="absolute -left-[4.5rem] top-8 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center glow-blue">
                <Briefcase className="w-6 h-6 text-white" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-gradient transition-colors">
                      Process Expert
                    </h3>
                    <p className="text-lg text-primary font-semibold">Provana India</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">June 2024 - Present</span>
                  </div>
                </div>

                <div className="space-y-3 text-foreground/90">
                  <p className="leading-relaxed">
                    Leading process optimization initiatives to enhance operational efficiency and streamline workflows 
                    across the organization.
                  </p>
                  
                  <div className="pt-4">
                    <p className="font-semibold mb-3">Key Responsibilities:</p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Analyzing and optimizing business processes for improved efficiency",
                        "Implementing workflow automation solutions using technical expertise",
                        "Collaborating with cross-functional teams to identify improvement areas",
                        "Managing data analysis and reporting using MS Excel and other tools",
                        "Ensuring quality standards and continuous process improvement"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills Used */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold mb-3">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Process Optimization", "Data Analysis", "MS Excel", "Workflow Automation", "Team Collaboration"].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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
