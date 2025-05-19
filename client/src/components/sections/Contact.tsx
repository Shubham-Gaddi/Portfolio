import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "@/lib/framer-animations";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    // In a real application, this would submit to your backend
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }
  
  const contactInfo = [
    { 
      icon: Mail, 
      title: "Email", 
      content: "sgaddi@purdue.edu", 
      link: "mailto:sgaddi@purdue.edu" 
    },
    { 
      icon: MapPin, 
      title: "Location", 
      content: "West Lafayette, IN", 
      link: null 
    },
    { 
      icon: Linkedin, 
      title: "LinkedIn", 
      content: "linkedin.com/in/shubham-gaddi", 
      link: "https://www.linkedin.com/in/shubham-gaddi/" 
    },
    { 
      icon: Github, 
      title: "GitHub", 
      content: "github.com/shubhamgaddi", 
      link: "https://github.com/shubhamgaddi" 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-neutral" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.2}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-primary max-w-2xl mx-auto">
            Looking to connect? I'm open to discussing job opportunities, data science projects, and collaboration. Feel free to reach out.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.4}
        >
          <Card className="max-w-3xl mx-auto shadow-md">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-6">Contact Me</h3>
              <p className="text-primary text-lg mb-6">Feel free to reach out via email:</p>
              
              <div className="flex items-center justify-center space-x-2 text-xl">
                <Mail className="text-accent h-6 w-6" />
                <a 
                  href="mailto:sgaddi@purdue.edu" 
                  className="text-accent hover:text-accent/80 font-medium transition-colors duration-300"
                >
                  sgaddi@purdue.edu
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 flex justify-center space-x-6">
                {contactInfo.slice(1).map((item, index) => {
                  const Icon = item.icon;
                  return item.link ? (
                    <a 
                      key={index}
                      href={item.link} 
                      className="text-secondary hover:text-accent transition-colors duration-300 flex flex-col items-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={item.title}
                    >
                      <Icon className="h-6 w-6 mb-2" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  ) : (
                    <div key={index} className="flex flex-col items-center text-secondary">
                      <Icon className="h-6 w-6 mb-2" />
                      <span className="text-sm">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
