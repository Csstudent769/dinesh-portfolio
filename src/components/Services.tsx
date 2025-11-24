import { Code2, Server, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

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
      color: "neon-blue"
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
      color: "neon-cyan"
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
      color: "purple-accent"
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Providing comprehensive web development and process optimization solutions 
            to help businesses establish their digital presence and improve efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                {/* Icon with Glow */}
                <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 border border-${service.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-gradient transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full bg-${service.color} mt-2 flex-shrink-0`}></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
