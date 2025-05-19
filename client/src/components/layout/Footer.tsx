import { Link } from "wouter";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" }
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-semibold tracking-tight text-primary">
              Shubham Gaddi
            </Link>
            <p className="text-primary mt-2">Data Analyst & Business Analytics Professional</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-primary hover:text-accent transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </nav>
          
          <div className="mt-6 md:mt-0 flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-secondary hover:text-accent transition-colors duration-300" 
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-secondary text-sm">&copy; {currentYear} Shubham Gaddi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
