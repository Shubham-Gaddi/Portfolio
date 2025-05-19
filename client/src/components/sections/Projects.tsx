import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "@/lib/framer-animations";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    title: "AI Integration for Indiana Supreme Court",
    description: "Worked as a student consultant on the Indiana Supreme Court and NCSI's AI Integration and Education initiative, achieving all KPIs and SLAs within set timeframes.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["AI Integration", "Project Management", "Data Analytics", "KPI Tracking"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/shubhamgaddi"
  },
  {
    id: 2,
    title: "Recommendation Algorithm for Sign-ups",
    description: "Developed and deployed a recommendation algorithm at Postman to boost sign-ups, achieving annual targets 25% quicker than forecasts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Recommendation Systems"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/shubhamgaddi"
  },
  {
    id: 3,
    title: "User Health Policies for User Retention",
    description: "Established 'user health policies' at Postman based on market research and competitor analysis to analyze user retention, reducing unhealthy customer churn by 12%.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Market Research", "Data Analytics", "Competitor Analysis", "User Retention"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/shubhamgaddi"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="projects" className="py-24" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.2}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
          <p className="text-primary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in frontend development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              custom={0.3 + index * 0.1}
            >
              <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-primary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-neutral px-2 py-1 rounded text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.demoLink} 
                      className="text-accent hover:text-accent/80 flex items-center transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="text-accent hover:text-accent/80 flex items-center transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" /> GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.6}
          className="text-center mt-12"
        >
          <a href="#" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300">
            View All Projects 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
