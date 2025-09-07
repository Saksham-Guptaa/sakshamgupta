import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cpu,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["C++", "JavaScript (ES6+)", "TypeScript", "Java", "Solidity"],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React Native",
      ],
    },
    {
      title: "Backend Development",
      icon: Cpu,
      color: "text-success",
      bgColor: "bg-success/10",
      skills: [
        "Node.js",
        "Express.js",
        "Spring Boot",
        "RESTful APIs",
        "Microservices",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-warning",
      bgColor: "bg-warning/10",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      title: "Web3 & Blockchain",
      icon: Smartphone,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        "Smart Contracts",
        "Hardhat",
        "Ethers.js",
        "Web3.js",
        "DeFi Protocols",
        "ERC Standards",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Git", "GitHub", "Bitbucket", "Kubernetes", "Jenkins", "NGINX"],
    },
  ];

  const coreExpertise = [
    { skill: "System Design", level: 90 },
    { skill: "Data Structures & Algorithms", level: 88 },
    { skill: "Distributed Systems", level: 85 },
    { skill: "Performance Optimization", level: 92 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group interactive-card"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-2 md:p-3 rounded-lg ${category.bgColor} mr-3 md:mr-4`}
                  >
                    <category.icon
                      className={`h-5 w-5 md:h-6 md:w-6 ${category.color}`}
                    />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 md:px-3 py-1 bg-muted rounded-full text-xs md:text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Expertise Progress Bars */}
          <div className="bg-card/50 rounded-xl p-4 md:p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
              Core Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {coreExpertise.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground text-sm md:text-base">
                      {item.skill}
                    </span>
                    <span className="text-primary font-semibold text-sm md:text-base">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications or Achievements */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Agile Development",
                "CI/CD Pipelines",
                "Cloud Architecture",
                "API Design",
                "Security Best Practices",
                "Code Review",
                "Team Leadership",
                "Technical Documentation",
              ].map((expertise, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium hover:from-primary/20 hover:to-accent/20 transition-all duration-200"
                >
                  {expertise}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
