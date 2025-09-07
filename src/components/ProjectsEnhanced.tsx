import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Star,
  Users,
  TrendingUp,
  Calendar,
  Building,
  Zap,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  type: "Personal" | "Professional";
  featured: boolean;
  stats: {
    impact: string;
    users: string;
    performance: string;
  };
  company?: string;
  period?: string;
  github?: string;
  demo?: string;
  image: string;
  achievements?: string[];
}

const ProjectsEnhanced = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const allProjects: Project[] = [
    // Featured Projects - Top Priority
    {
      id: "nebula-accelerator",
      title: "NebulaAccelerator",
      description:
        "Venture studio platform for a VC firm with comprehensive startup acceleration tools, portfolio management, and investor relations.",
      longDescription:
        "Built a full-featured venture studio platform for a VC firm providing comprehensive startup acceleration tools, portfolio management, investor relations, and deal flow management. Features include startup onboarding, milestone tracking, investor dashboard, and comprehensive analytics for portfolio performance.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Venture Capital Tools",
        "Portfolio Management",
      ],
      category: "SaaS",
      type: "Professional",
      company: "NebulaAccelerator",
      period: "2024",
      featured: true,
      stats: {
        impact: "Venture studio platform",
        users: "Portfolio management",
        performance: "Full functionalities",
      },
      github: "#",
      demo: "https://www.nebulaaccelerator.org/",
      image: "nebulaaccelerator.png",
      achievements: [
        "Built comprehensive venture studio platform",
        "Implemented portfolio management system",
        "Created investor relations dashboard",
        "Developed startup acceleration tools",
      ],
    },
    {
      id: "the-brand-global",
      title: "TheBrandGlobal",
      description:
        "World-class UK magazine website with news and blog platform, serving global readership with premium content delivery.",
      longDescription:
        "Developed a sophisticated magazine website for TheBrandGlobal, a world-class UK publication. Features include dynamic news feed, blog management system, premium content delivery, subscription management, and global content distribution with SEO optimization for international reach.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Content Management",
        "SEO Optimization",
        "Subscription System",
        "Global Distribution",
      ],
      category: "Web Platform",
      type: "Professional",
      company: "TheBrandGlobal",
      period: "2024",
      featured: true,
      stats: {
        impact: "World-class magazine",
        users: "Global readership",
        performance: "Premium content",
      },
      github: "#",
      demo: "https://thebrandglobal.com/",
      image: "thebrandglobal.png",
      achievements: [
        "Built world-class magazine platform",
        "Implemented global content distribution",
        "Created premium subscription system",
        "Optimized for international SEO",
      ],
    },
    {
      id: "global-shooting-league",
      title: "GlobalShootingLeague",
      description:
        "Sports foundation platform for shooting sports with tournament management, athlete profiles, and event coordination.",
      longDescription:
        "Developed a comprehensive sports foundation platform for GlobalShootingLeague featuring tournament management, athlete registration, event coordination, scoring systems, and community engagement tools. Built to support the global shooting sports community with professional-grade features.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Sports Management",
        "Tournament System",
        "Athlete Profiles",
        "Event Coordination",
      ],
      category: "Web Platform",
      type: "Professional",
      company: "GlobalShootingLeague",
      period: "2024",
      featured: true,
      stats: {
        impact: "Sports foundation",
        users: "Global athletes",
        performance: "Tournament management",
      },
      github: "#",
      demo: "https://globalshootingleague.com/",
      image: "globalshootingleague.png",
      achievements: [
        "Built comprehensive sports foundation platform",
        "Implemented tournament management system",
        "Created athlete profile management",
        "Developed event coordination tools",
      ],
    },
    {
      id: "divine-readings",
      title: "DivineReadings",
      description:
        "Professional tarot reading website with booking system, client management, and mystical consultation services.",
      longDescription:
        "Created a complete tarot reading website for a professional tarot reader client featuring appointment booking, client management, service packages, payment integration, and consultation scheduling. Built with intuitive design to provide mystical and professional consultation experience.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Booking System",
        "Payment Integration",
        "Client Management",
        "Consultation Services",
      ],
      category: "Web Platform",
      type: "Professional",
      company: "DivineReadings",
      period: "2024",
      featured: true,
      stats: {
        impact: "Professional tarot services",
        users: "Client management",
        performance: "Booking system",
      },
      github: "#",
      demo: "https://divinereadings.co/",
      image: "divinereadings.png",
      achievements: [
        "Built professional tarot reading platform",
        "Implemented appointment booking system",
        "Created client management dashboard",
        "Integrated payment processing",
      ],
    },

    // Personal Projects
    {
      id: "boostmycause",
      title: "BoostMyCause",
      description:
        "A comprehensive crowd funding platform built on Ethereum testnet enabling secure, transparent fundraising campaigns with real-time tracking.",
      longDescription:
        "Developed a full-featured crowdfunding platform using React, Tailwind CSS, and Solidity smart contracts. Features include campaign creation, real-time donation tracking, milestone-based funding, and automated fund distribution with transparent blockchain transactions.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Solidity",
        "Ethers.js",
        "Web3",
        "Smart Contracts",
        "Ethereum",
      ],
      category: "Web3",
      type: "Personal",
      featured: true,
      stats: {
        impact: "25% faster processing",
        users: "500+ campaigns",
        performance: "Real-time tracking",
      },
      github: "#",
      demo: "https://boostmycause.netlify.app/",
      image: "boostmycause.png",
      achievements: [
        "Integrated real-time campaign tracking",
        "Reduced order processing time by 25%",
        "Built transparent blockchain funding system",
      ],
    },
    // {
    //   id: "fitgenix",
    //   title: "FitGenix",
    //   description:
    //     "Gamified fitness tracking mobile app with personalized diet plans, training routines, and level-based progression system.",
    //   longDescription:
    //     "Built using React Native, Java, Spring Boot, and PostgreSQL. Features include gamified fitness tracking, personalized workout plans, nutrition guidance, social challenges, and progress analytics with level-based progression system.",
    //   technologies: [
    //     "React Native",
    //     "Java",
    //     "Spring Boot",
    //     "PostgreSQL",
    //     "RESTful APIs",
    //     "Mobile Development",
    //   ],
    //   category: "Mobile App",
    //   type: "Personal",
    //   featured: true,
    //   stats: {
    //     impact: "Gamified experience",
    //     users: "Personal training",
    //     performance: "Level progression",
    //   },
    //   github: "#",
    //   demo: "#",
    //   image: "gradient-from-green-500-to-blue-600",
    //   achievements: [
    //     "Implemented gamified fitness tracking",
    //     "Created personalized diet and training plans",
    //     "Built level-based progression system",
    //   ],
    // },
    {
      id: "purigo",
      title: "Purigo E-commerce",
      description:
        "Full-stack e-commerce platform for local spice and pickle store with inventory management and order tracking.",
      longDescription:
        "Developed using React, Tailwind CSS, Firebase, and MongoDB. Features include product catalog, real-time inventory management, order tracking, customer management, and analytics dashboard for a local store selling pickles, seeds, and spices.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "SEO",
        "E-commerce",
        "Analytics",
      ],
      category: "E-commerce",
      type: "Personal",
      featured: true,
      stats: {
        impact: "40% traffic boost",
        users: "25% faster processing",
        performance: "SEO optimized",
      },
      github: "#",
      demo: "https://www.purigo.shop/",
      image: "purigo.png",
      achievements: [
        "Boosted site traffic by 40% through SEO optimization",
        "Reduced order processing time by 25%",
        "Implemented real-time inventory management",
      ],
    },
    {
      id: "utkarsh-2024",
      title: "Utkarsh-2024",
      description:
        "Annual college fest website with event registration, participant management, and real-time updates.",
      longDescription:
        "Built with React, Firebase, and JavaScript for the college's annual fest. Enabled 500+ attendees to register for various events with streamlined management and increased participation.",
      technologies: [
        "React",
        "Firebase",
        "JavaScript",
        "Event Management",
        "Registration System",
      ],
      category: "Event Platform",
      type: "Personal",
      featured: false,
      stats: {
        impact: "500+ attendees",
        users: "Event registration",
        performance: "Smooth management",
      },
      github: "#",
      demo: "https://utkarsh2024.netlify.app/",
      image: "utkarsh2024.png",
      achievements: [
        "Enabled 500+ attendees registration",
        "Streamlined event management process",
        "Increased overall fest participation",
      ],
    },
    // {
    //   id: "redgister",
    //   title: "RedGister",
    //   description:
    //     "Blockchain-based supply chain management system using Hyperledger for transparent product tracking.",
    //   longDescription:
    //     "Web3 supply chain management application built with Next.js, Hardhat, and Ethers.js. Provides end-to-end product tracking, authenticity verification, and supply chain transparency using Hyperledger blockchain technology.",
    //   technologies: [
    //     "Next.js",
    //     "Hardhat",
    //     "Ethers.js",
    //     "Hyperledger",
    //     "Blockchain",
    //     "Supply Chain",
    //   ],
    //   category: "Web3",
    //   type: "Personal",
    //   featured: false,
    //   stats: {
    //     impact: "Supply chain transparency",
    //     users: "Product authenticity",
    //     performance: "Blockchain verified",
    //   },
    //   github: "#",
    //   demo: "https://redgister.vercel.app/",
    //   image: "redgister.png",
    // },
    // {
    //   id: "campus-chronicles",
    //   title: "The Campus Chronicles",
    //   description:
    //     "College society website serving as a centralized platform for news, events, and student communication.",
    //   longDescription:
    //     "Developed using HTML, CSS, and JavaScript to serve 1,000+ students and faculty. Features include event calendars, news feeds, notice boards, and student engagement tools for the college media society.",
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Responsive Design",
    //     "Event Management",
    //   ],
    //   category: "Web Platform",
    //   type: "Personal",
    //   featured: false,
    //   stats: {
    //     impact: "1,000+ users served",
    //     users: "College-wide adoption",
    //     performance: "Enhanced communication",
    //   },
    //   github: "#",
    //   demo: "#",
    //   image: "thecampuschronicles.png",
    //   achievements: [
    //     "Facilitated communication for 1,000+ students",
    //     "Improved dissemination of important updates",
    //     "Enhanced user engagement and accessibility",
    //   ],
    // },

    // Professional Experience Projects
    {
      id: "rc-solutions",
      title: "Enterprise Java Applications",
      description:
        "Scalable Java-based applications for enterprise clients using Spring Boot, React, and MySQL.",
      longDescription:
        "Collaborated with cross-functional teams to design, develop, and maintain scalable Java-based applications. Leveraged Spring Boot, React, RESTful APIs, and MySQL to deliver high-performance solutions for enterprise clients.",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "Git",
        "Jira",
        "RESTful APIs",
      ],
      category: "Enterprise",
      type: "Professional",
      company: "R.C Solutions",
      period: "Jun 2025 – Present",
      featured: true,
      stats: {
        impact: "Enterprise solutions",
        users: "Multiple clients",
        performance: "High performance",
      },
      github: "#",
      demo: "https://www.startupdevta.com/",
      image: "Rc.png",
      achievements: [
        "Delivered enterprise-level solutions for multiple clients",
        "Improved application performance through optimization",
        "Collaborated in Agile development environment",
      ],
    },
    {
      id: "chillinq-app",
      title: "Chillinq Dating App",
      description:
        "Web3 dating mobile application with blockchain integration and seamless user experience.",
      longDescription:
        "Engineered a dating mobile application using Node.js and PostgreSQL, delivering a seamless user experience with an intuitive interface built with React Native for mobile compatibility and Web3 features.",
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Web3",
        "Mobile Development",
      ],
      category: "Mobile App",
      type: "Professional",
      company: "Chillinq",
      period: "2024",
      featured: true,
      stats: {
        impact: "200+ audience launch",
        users: "Dating platform",
        performance: "Seamless UX",
      },
      github: "#",
      demo: "https://www.chillinq.com/",
      image: "chillinq.png",
      achievements: [
        "Presented app to 200+ people at launch event",
        "Received positive feedback from users and stakeholders",
        "Built seamless mobile user experience",
      ],
    },
    {
      id: "shardz-platform",
      title: "Decentralized Video Platform",
      description:
        "Video-sharing platform and ecosystem with blockchain technology securing over $100K in grants.",
      longDescription:
        "Developed a decentralized video-sharing platform using Next.js, JavaScript, and Node.js. Contributed to the project's early-stage development and architecture, securing grants over $100K.",
      technologies: [
        "Next.js",
        "Node.js",
        "Blockchain",
        "Smart Contracts",
        "Decentralized Storage",
      ],
      category: "Web3",
      type: "Professional",
      company: "Shardz",
      period: "2024",
      featured: true,
      stats: {
        impact: "$100K+ grants",
        users: "Video creators",
        performance: "60% security boost",
      },
      github: "#",
      demo: "https://www.shardz.network/",
      image: "shardz.png",
      achievements: [
        "Contributed to securing $100K+ in grants",
        "Enhanced platform security by 60%",
        "Built scalable architecture for future growth",
      ],
    },
    {
      id: "wolf-decentralized",
      title: "Enterprise Blockchain Projects",
      description:
        "4 enterprise projects with comprehensive system architecture and responsive interfaces.",
      longDescription:
        "Contributed to development of 4 enterprise projects utilizing Next.js, Node.js, SQL, MongoDB. Designed comprehensive system architecture, data flow models, and responsive interfaces for web and mobile applications.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "SQL",
        "System Design",
        "Architecture",
      ],
      category: "Enterprise",
      type: "Professional",
      company: "Wolf Decentralized",
      period: "2024",
      featured: false,
      stats: {
        impact: "40% performance boost",
        users: "4 enterprise projects",
        performance: "System architecture",
      },
      github: "#",
      demo: "https://www.wolfdec.com/",
      image: "wolfdecentralized.png",
      achievements: [
        "Improved application performance by 40%",
        "Designed system architecture for 4 projects",
        "Participated in Agile development processes",
      ],
    },
    {
      id: "acebit-wallet",
      title: "AceBit On-Off Ramp Wallet",
      description:
        "Web3 wallet with secure transactions across 40+ chains and 100+ tokens.",
      longDescription:
        "Created a web3 On-Off Ramp wallet providing secure transactions, fast Crypto to Fiat and Fiat to Crypto transactions with access to 40+ Chains and 100+ Tokens. Developed SDK and documentation for developers.",
      technologies: [
        "Web3",
        "Blockchain",
        "Multi-chain",
        "SDK Development",
        "Documentation",
      ],
      category: "Web3",
      type: "Professional",
      company: "AceBit",
      period: "2023",
      featured: false,
      stats: {
        impact: "40+ chains support",
        users: "100+ tokens",
        performance: "Secure transactions",
      },
      github: "#",
      demo: "https://acebit.vercel.app/",
      image: "acebit.png",
      achievements: [
        "Created SDK and documentation for developers",
        "Enabled access to 40+ chains and 100+ tokens",
        "Provided secure crypto transactions",
      ],
    },
    {
      id: "syncvault-dapp",
      title: "SyncVault Web3 DApp",
      description:
        "Web3 DApp serving 700K+ creators with 35% performance improvements.",
      longDescription:
        "Architected and implemented Web3 DApp serving 700K+ creators and users. Engineered performance optimizations resulting in 35% faster load times and transformed the application to handle multiple instances simultaneously.",
      technologies: [
        "Web3",
        "DApp Development",
        "Performance Optimization",
        "Scalability",
      ],
      category: "Web3",
      type: "Professional",
      company: "SyncVault",
      period: "2023",
      featured: true,
      stats: {
        impact: "700K+ users served",
        users: "35% faster load times",
        performance: "98% satisfaction",
      },
      github: "#",
      demo: "https://app.syncvault.com/",
      image: "syncvault.png",
      achievements: [
        "Served 700K+ creators and users",
        "Improved load times by 35%",
        "Achieved 98% user satisfaction rate",
      ],
    },
    {
      id: "mudsplash-wallet",
      title: "MudSplash Web3 Wallet",
      description:
        "Mobile Web3 wallet application with secure crypto transactions and digital identity features.",
      longDescription:
        "Developed a mobile Web3 wallet application enabling secure crypto transactions, asset management, and digital identity features using Java, Spring Boot, React Native, PostgreSQL, blockchain, RESTful APIs, and JWT.",
      technologies: [
        "React Native",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Blockchain",
        "RESTful APIs",
        "JWT",
        "Mobile Development",
      ],
      category: "Mobile App",
      type: "Professional",
      company: "MudSplash Wallet",
      period: "2023",
      featured: false,
      stats: {
        impact: "Secure transactions",
        users: "Asset management",
        performance: "Digital identity",
      },
      github: "#",
      demo: "https://www.shardz.network/wallet",
      image: "mudsplash.png",
      achievements: [
        "Enabled secure crypto transactions",
        "Built comprehensive asset management",
        "Implemented digital identity features",
      ],
    },
    {
      id: "queue-wallet",
      title: "Queue Wallet",
      description:
        "Stellar-based on-ramp and off-ramp wallet for seamless crypto-to-fiat transactions.",
      longDescription:
        "Developed a Stellar blockchain-based wallet application providing secure on-ramp and off-ramp functionality for crypto-to-fiat transactions. Features include multi-currency support, real-time conversion rates, and seamless user experience for both mobile and web platforms.",
      technologies: [
        "Stellar Blockchain",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "On-Ramp/Off-Ramp",
        "Multi-currency",
        "Real-time Conversion",
      ],
      category: "Mobile App",
      type: "Professional",
      company: "Queue Wallet",
      period: "2023",
      featured: false,
      stats: {
        impact: "Stellar integration",
        users: "Multi-currency support",
        performance: "Real-time conversion",
      },
      github: "#",
      demo: "https://queuewallet.com/",
      image: "queuewallet.png",
      achievements: [
        "Integrated Stellar blockchain for transactions",
        "Implemented secure on-ramp/off-ramp functionality",
        "Built real-time currency conversion system",
      ],
    },
  ];

  const categories = [
    "All",
    "Web3",
    "Mobile App",
    "E-commerce",
    "Enterprise",
    "SaaS",
    "Web Platform",
    "Event Platform",
  ];

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive showcase of innovative solutions spanning Web3,
              mobile apps, enterprise platforms, and professional work
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-200 hover:scale-105 text-xs md:text-sm"
              >
                {category}
                <Badge variant="secondary" className="ml-1 md:ml-2 text-xs">
                  {category === "All"
                    ? allProjects.length
                    : allProjects.filter((p) => p.category === category).length}
                </Badge>
              </Button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Featured Projects */}
              {featuredProjects.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-semibold mb-8 text-center">
                    Featured Projects
                  </h3>
                  <div className="grid lg:grid-cols-1 gap-6 md:gap-8">
                    {featuredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 interactive-card">
                          <div className="flex flex-col lg:flex-row">
                            {/* Project Visual */}
                            <div className="lg:w-2/5">
                              <div className="h-48 md:h-64 lg:h-full relative overflow-hidden">
                                {project.image.endsWith(".png") ||
                                project.image.endsWith(".jpg") ||
                                project.image.endsWith(".jpeg") ? (
                                  <img
                                    src={`/${project.image}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div
                                    className={`w-full h-full bg-gradient-to-br ${project.image}`}
                                  />
                                )}
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                  <div className="text-white text-center">
                                    <motion.h4
                                      initial={{ scale: 0.9 }}
                                      whileInView={{ scale: 1 }}
                                      className="text-xl md:text-2xl font-bold mb-2"
                                    >
                                      {project.title}
                                    </motion.h4>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                                      <span className="px-2 md:px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm">
                                        {project.category}
                                      </span>
                                      {project.type === "Professional" && (
                                        <span className="px-2 md:px-3 py-1 bg-primary/30 rounded-full text-xs md:text-sm flex items-center gap-1">
                                          <Building className="h-3 w-3" />
                                          Professional
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Project Content */}
                            <div className="lg:w-3/5 p-4 md:p-6 lg:p-8">
                              <CardHeader className="p-0 mb-4">
                                <div className="flex items-start justify-between mb-2">
                                  <CardTitle className="text-xl md:text-2xl">
                                    {project.title}
                                  </CardTitle>
                                  <div className="flex items-center gap-2">
                                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current" />
                                    {project.type === "Professional" && (
                                      <Zap className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                                    )}
                                  </div>
                                </div>
                                {project.company && (
                                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                                    <Building className="h-4 w-4" />
                                    <span>{project.company}</span>
                                    {project.period && (
                                      <>
                                        <Calendar className="h-4 w-4 ml-2" />
                                        <span>{project.period}</span>
                                      </>
                                    )}
                                  </div>
                                )}
                                <CardDescription className="text-base">
                                  {project.longDescription}
                                </CardDescription>
                              </CardHeader>

                              <CardContent className="p-0">
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {project.technologies.map(
                                    (tech, techIndex) => (
                                      <motion.span
                                        key={techIndex}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                                      >
                                        {tech}
                                      </motion.span>
                                    )
                                  )}
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                  <div className="text-center">
                                    <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
                                    <div className="text-sm font-medium">
                                      {project.stats.impact}
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <Users className="h-5 w-5 text-accent mx-auto mb-1" />
                                    <div className="text-sm font-medium">
                                      {project.stats.users}
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <Star className="h-5 w-5 text-success mx-auto mb-1" />
                                    <div className="text-sm font-medium">
                                      {project.stats.performance}
                                    </div>
                                  </div>
                                </div>

                                {/* Achievements */}
                                {project.achievements && (
                                  <div className="mb-6">
                                    <h5 className="font-medium mb-2">
                                      Key Achievements:
                                    </h5>
                                    <ul className="space-y-1">
                                      {project.achievements.map(
                                        (achievement, achIndex) => (
                                          <li
                                            key={achIndex}
                                            className="text-sm text-muted-foreground flex items-start gap-2"
                                          >
                                            <TrendingUp className="h-3 w-3 text-success mt-1 flex-shrink-0" />
                                            {achievement}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                  {project.demo && (
                                    <Button
                                      size="sm"
                                      className="bg-primary hover:bg-primary/90 group"
                                      onClick={() =>
                                        window.open(project.demo, "_blank")
                                      }
                                    >
                                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                      Live Demo
                                    </Button>
                                  )}
                                </div>
                              </CardContent>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Projects Grid */}
              {otherProjects.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-8 text-center">
                    {featuredProjects.length > 0
                      ? "More Projects"
                      : "All Projects"}
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                  >
                    {otherProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 interactive-card h-full">
                          {/* Project Header */}
                          <div className="h-40 relative overflow-hidden">
                            {project.image.endsWith(".png") ||
                            project.image.endsWith(".jpg") ||
                            project.image.endsWith(".jpeg") ? (
                              <img
                                src={`/${project.image}`}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div
                                className={`w-full h-full bg-gradient-to-br ${project.image}`}
                              />
                            )}
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="text-center">
                                <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white font-medium">
                                  {project.category}
                                </span>
                                {project.type === "Professional" && (
                                  <div className="mt-2">
                                    <span className="px-2 py-1 bg-primary/30 rounded-full text-xs text-white flex items-center gap-1 justify-center">
                                      <Building className="h-3 w-3" />
                                      {project.company}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-xl">
                                {project.title}
                              </CardTitle>
                              {project.type === "Professional" && (
                                <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                              )}
                            </div>
                            {project.period && (
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                {project.period}
                              </div>
                            )}
                            <CardDescription>
                              {project.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="flex-1 flex flex-col">
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies
                                .slice(0, 3)
                                .map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project.technologies.length > 3 && (
                                <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                                  +{project.technologies.length - 3} more
                                </span>
                              )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-auto">
                              {project.demo && (
                                <Button
                                  size="sm"
                                  className="flex-1 bg-primary hover:bg-primary/90"
                                  onClick={() =>
                                    window.open(project.demo, "_blank")
                                  }
                                >
                                  <ExternalLink className="mr-1 h-3 w-3" />
                                  Demo
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* No projects found */}
              {filteredProjects.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-muted-foreground text-lg">
                    No projects found in the {activeCategory} category.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsEnhanced;
