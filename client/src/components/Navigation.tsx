import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navigationItems = [
  { href: "#home", label: "Beranda" },
  { href: "#profile", label: "Profil" },
  { href: "#gallery", label: "Galeri" },
  { href: "#programs", label: "Program" },
  { href: "#news", label: "Berita" },
  { href: "#contact", label: "Kontak" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-cyber-blue/30 transition-all duration-300 ${
        isScrolled ? "bg-background/80 glow-effect" : "bg-background/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="font-orbitron text-xl font-bold neon-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick("#home")}
            data-testid="logo"
          >
            AL-MANSHURIYAH
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.href}
                className="hover:text-cyber-blue transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                onClick={() => handleNavClick(item.href)}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            className="md:hidden text-cyber-blue"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 border-t border-cyber-blue/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navigationItems.map((item) => (
              <motion.button
                key={item.href}
                className="block w-full text-left py-2 hover:text-cyber-blue transition-colors duration-300"
                whileHover={{ x: 10 }}
                onClick={() => handleNavClick(item.href)}
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
