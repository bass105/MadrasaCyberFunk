import { motion } from "framer-motion";

const quickLinks = [
  { href: "#home", label: "Beranda" },
  { href: "#profile", label: "Profil" },
  { href: "#programs", label: "Program" },
  { href: "#contact", label: "Kontak" }
];

const programs = [
  "Program Reguler",
  "Program IT", 
  "Program Sains",
  "Program Bahasa"
];

const socialLinks = [
  { icon: "📘", href: "#", label: "Facebook" },
  { icon: "📷", href: "#", label: "Instagram" },
  { icon: "📺", href: "#", label: "YouTube" },
  { icon: "🎵", href: "#", label: "TikTok" }
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/30 py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.h3 
              className="font-orbitron text-xl font-bold neon-text mb-4"
              whileHover={{ scale: 1.05 }}
              data-testid="footer-logo"
            >
              AL-MANSHURIYAH
            </motion.h3>
            <p className="text-muted-foreground text-sm" data-testid="footer-description">
              Madrasah Aliyah yang mengintegrasikan teknologi modern dengan nilai-nilai Islam untuk menciptakan generasi unggul.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-cyber-cyan mb-4" data-testid="footer-quick-links-title">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    className="text-muted-foreground hover:text-cyber-blue transition-colors text-left"
                    whileHover={{ x: 5 }}
                    onClick={() => handleLinkClick(link.href)}
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-cyber-cyan mb-4" data-testid="footer-programs-title">
              PROGRAM STUDI
            </h4>
            <ul className="space-y-2 text-sm">
              {programs.map((program, index) => (
                <li key={index} className="text-muted-foreground" data-testid={`footer-program-${index}`}>
                  {program}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-cyber-cyan mb-4" data-testid="footer-social-title">
              SOCIAL MEDIA
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300 glow-effect"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-cyber-blue/30 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm font-mono" data-testid="footer-copyright">
            &copy; 2024 Madrasah Aliyah AL-MANSHURIYAH. All rights reserved. | Powered by Cyberfunk Technology
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
