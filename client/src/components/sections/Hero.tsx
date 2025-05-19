import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.2}
          >
            <span className="text-accent font-light text-lg">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-2 mb-6">Shubham Gaddi</h1>
            <p className="text-xl text-primary leading-relaxed mb-8">
              A result-driven data professional with expertise in analytics, data science, and product-based solutions. Currently pursuing a Master's in Business Analytics at Purdue University.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-neutral hover:bg-neutral/90 text-primary"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.4}
          >
            <div className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto shadow-lg overflow-hidden">
              <img 
                src="/src/assets/profile-photo.jpg"
                alt="Shubham Gaddi Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
