import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "@/lib/framer-animations";

const skills = [
  "Python", "SQL", "R", "NumPy", "Pandas", 
  "Scikit-learn", "Tensorflow", "Looker", "Tableau", "Git",
  "Databricks", "Snowflake", "MongoDB", "Machine Learning", "A/B Testing"
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <section id="about" className="py-24 bg-neutral" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0.2}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Minimal workspace setup" 
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0.4}
          >
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-primary mb-6 leading-relaxed">
              Result driven data professional with a knack for data-based storytelling and ~4 years of experience in designing solutions
              to product-based problem statements, user journeys, analytics, and data science. Currently pursuing a Master of Science in Business Analytics and Information Management at Purdue University's Daniels School of Business.
            </p>
            <p className="text-primary mb-6 leading-relaxed">
              Previously worked as a Data Analyst II at Postman where I managed end-to-end product analytics for multiple business units, led cross-functional teams, and built recommendation algorithms that achieved impressive results. As a student consultant, I've worked with the Indiana Supreme Court and NCSI on AI integration initiatives.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-white px-3 py-1 rounded-md text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
