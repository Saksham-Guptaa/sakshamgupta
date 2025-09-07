import { Briefcase, Calendar, MapPin, Users, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Java Developer",
      company: "R.C Solutions",
      type: "Full Time",
      location: "Delhi",
      period: "March 2025 – Present",
      description:
        "Collaborate with cross-functional teams to design, develop, and maintain scalable Java-based applications, leveraging expertise in Java (Spring Boot, React, RESTful APIs, Jira, Git, MySQL) to deliver high-performance solutions for enterprise clients.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Git", "Jira"],
      achievements: [
        "Delivered enterprise-level solutions for multiple clients",
        "Improved application performance through optimization",
        "Collaborated in Agile development environment",
      ],
    },
    {
      title: "App Developer",
      company: "Chillinq",
      type: "Contract",
      location: "Remote",
      period: "2023",
      description:
        "Engineered a dating mobile application using Node.js and PostgreSQL, delivering a seamless user experience with an intuitive interface built with React Native for mobile compatibility.",
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Mobile Development",
      ],
      achievements: [
        "Presented app to 200+ people at launch event",
        "Received positive feedback from users and stakeholders",
        "Built seamless mobile user experience",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Shardz",
      type: "Internship",
      location: "Remote",
      period: "2024",
      description:
        "Developed a decentralized video-sharing platform using Next.js, JavaScript, and Node.js, contributing to the project's early-stage development and architecture, securing grants over $100K.",
      technologies: ["Next.js", "Node.js", "Blockchain", "Smart Contracts"],
      achievements: [
        "Contributed to securing $100K+ in grants",
        "Enhanced platform security by 60%",
        "Built scalable architecture for future growth",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Wolf Decentralized",
      type: "Internship",
      location: "Remote",
      period: "2024",
      description:
        "Contributed to development of 4 enterprise projects utilizing Next.js, Node.js, SQL, MongoDB. Designed comprehensive system architecture and responsive interfaces.",
      technologies: ["Next.js", "Node.js", "MongoDB", "SQL", "System Design"],
      achievements: [
        "Improved application performance by 40%",
        "Designed system architecture for 4 projects",
        "Participated in Agile development processes",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Nebulex Def Tech Foundation",
      type: "Internship",
      location: "Remote",
      period: "2024",
      description:
        "Worked on 4 industry-level SaaS projects including Sports Gir foundation, The Brand Global, and Nebula Accelerator, serving 3K+ users with 60% conversion rates.",
      technologies: [
        "SaaS Development",
        "Full Stack",
        "Performance Optimization",
      ],
      achievements: [
        "Engineered products serving 3K+ users",
        "Achieved 60% conversion rates",
        "Delivered industry-level SaaS solutions",
      ],
    },
    {
      title: "Web Developer",
      company: "SyncVault",
      type: "Contract",
      location: "Remote",
      period: "2025",
      description:
        "Architected and implemented Web3 DApp serving 700K+ creators and users. Engineered performance optimizations resulting in 35% faster load times.",
      technologies: ["Web3", "DApp Development", "Performance Optimization"],
      achievements: [
        "Served 700K+ creators and users",
        "Improved load times by 35%",
        "Achieved 98% user satisfaction rate",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building impactful solutions across startups and enterprises, with
              a focus on performance and user experience
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 group"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 shadow-card">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
                            exp.type === "Full Time"
                              ? "bg-success/10 text-success"
                              : exp.type === "Internship"
                              ? "bg-accent/10 text-accent"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-base md:text-lg font-medium text-primary mb-3">
                        {exp.company}
                      </h4>

                      <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Experience */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Leadership & Organizations
            </h3>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">
                    Tech Lead - The Campus Chronicles
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    College Media Society | Led a team of 8 developers in
                    organizing technical events and workshops
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Team Leadership
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      Mentoring
                    </span>
                    <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">
                      Event Management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
