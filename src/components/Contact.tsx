import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Send, Github, Linkedin, Youtube, Instagram, Facebook, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Get in Touch</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">Contact Me</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-lg shadow-primary/50"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6 text-gradient">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                I'm always interested in hearing about new opportunities and projects. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>

            {/* Enhanced Contact Cards */}
            <div className="space-y-6">
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">Email</h4>
                      <p className="text-sm text-muted-foreground">dy0630449@gmail.com</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 bg-card/40 backdrop-blur-xl border-2 border-primary/20 hover:border-accent/40 transition-all hover:scale-105">
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-neon-cyan rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-neon-cyan flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">Location</h4>
                      <p className="text-sm text-muted-foreground">New Delhi, India</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Follow Me
              </h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Github, label: "GitHub", gradient: "from-primary to-neon-blue" },
                  { icon: Linkedin, label: "LinkedIn", gradient: "from-neon-cyan to-accent" },
                  { icon: Youtube, label: "YouTube", gradient: "from-purple-accent to-primary" },
                  { icon: Instagram, label: "Instagram", gradient: "from-accent to-neon-cyan" },
                  { icon: Facebook, label: "Facebook", gradient: "from-neon-blue to-primary" }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={index} className="group/social relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-2xl blur-lg opacity-0 group-hover/social:opacity-50 transition-opacity`}></div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="relative w-14 h-14 border-2 border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 backdrop-blur-xl group-hover/social:rotate-12"
                      >
                        <IconComponent className="w-6 h-6" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="relative overflow-hidden animate-fade-in delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <div className="relative p-10 bg-card/40 backdrop-blur-xl border-2 border-primary/20">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Name
                    </label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-background/50 border-2 border-border/50 focus:border-primary transition-all h-12 text-base backdrop-blur-xl"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-background/50 border-2 border-border/50 focus:border-primary transition-all h-12 text-base backdrop-blur-xl"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this about?" 
                    className="bg-background/50 border-2 border-border/50 focus:border-primary transition-all h-12 text-base backdrop-blur-xl"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Message
                  </label>
                  <Textarea 
                    placeholder="Your message..." 
                    rows={6}
                    className="bg-background/50 border-2 border-border/50 focus:border-primary transition-all resize-none text-base backdrop-blur-xl"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary glow-blue group text-base py-6 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                  Send Message
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
