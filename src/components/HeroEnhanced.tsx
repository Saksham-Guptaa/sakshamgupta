import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, Download } from "lucide-react";

const HeroEnhanced = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          {/* <div className="mb-8">
            <span className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              👋 Hello, I'm Saksham Gupta
            </span>
          </div> */}

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Full Stack Developer</span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-3 h-6 w-6" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Contact Links */}
          <div className="mb-16">
            <div className="flex justify-center gap-8">
              {[
                {
                  icon: Mail,
                  href: "mailto:creator.sakshamgupta@gmail.com",
                  label: "Email",
                },
                {
                  icon: Github,
                  href: "https://github.com/saksham-guptaa",
                  label: "GitHub",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="p-4 rounded-xl bg-card/50 hover:bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  aria-label={contact.label}
                >
                  <contact.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Built", value: "15+" },
              { label: "Happy Clients", value: "10+" },
              { label: "Technologies", value: "20+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
