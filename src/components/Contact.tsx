import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "creator.sakshamgupta@gmail.com",
      href: "mailto:creator.sakshamgupta@gmail.com",
      color: "text-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#",
      color: "text-success",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "saksham-gupta",
      href: "https://github.com/saksham-guptaa",
      color: "text-foreground",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work
              together to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  I'm always excited to discuss new opportunities, innovative
                  projects, and potential collaborations. Whether you're looking
                  for a full-stack developer, Web3 engineer, or technical
                  consultant, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-3 md:gap-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="block p-3 md:p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group interactive-card"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <contact.icon
                          className={`h-4 w-4 md:h-5 md:w-5 ${contact.color} group-hover:scale-110 transition-transform`}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm md:text-base">
                          {contact.label}
                        </div>
                        <div className="text-muted-foreground text-xs md:text-sm">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="p-4 md:p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                <h4 className="font-semibold mb-2 text-foreground text-sm md:text-base">
                  Availability
                </h4>
                <p className="text-muted-foreground text-xs md:text-sm mb-3">
                  Currently available for freelance projects and full-time
                  opportunities.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                  <span className="text-success text-xs md:text-sm font-medium">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS • © 2025 Saksham
              Gupta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
