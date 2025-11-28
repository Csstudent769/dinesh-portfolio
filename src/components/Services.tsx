import { Code2, Server, Wrench, Sparkles, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Design & Development",
      description: "Creating modern, responsive, and user-friendly websites using the latest web technologies and best practices.",
      features: [
        "Custom website development",
        "Responsive design for all devices",
        "Modern UI/UX implementation",
        "Performance optimization"
      ],
      gradient: "from-neon-blue to-primary"
    },
    {
      icon: Server,
      title: "Complete Hosting & Management",
      description: "End-to-end website hosting solutions with ongoing maintenance and technical support.",
      features: [
        "Domain & hosting setup",
        "SSL certificate installation",
        "Regular backups & security",
        "Technical support & updates"
      ],
      gradient: "from-neon-cyan to-accent"
    },
    {
      icon: Wrench,
      title: "Process Optimization",
      description: "Streamlining workflows and automating repetitive tasks to improve efficiency and productivity.",
      features: [
        "Workflow analysis & improvement",
        "Custom automation solutions",
        "Data-driven optimization",
        "Continuous improvement strategy"
      ],
      gradient: "from-purple-accent to-primary"
    }
  ];

  return (
    <section id="services" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">What I Offer</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">Services</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Comprehensive solutions to help businesses establish their digital presence and optimize operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-10 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 duration-300 h-full flex flex-col">
                  {/* Icon with Enhanced Design */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all border-2 border-white/10`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-gradient transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 group/item">
                        <div className="p-1.5 bg-primary/10 rounded-lg border border-primary/20 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-primary/20 transition-all">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient}`}></div>
                        </div>
                        <span className="text-sm flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 group/btn backdrop-blur-xl"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
