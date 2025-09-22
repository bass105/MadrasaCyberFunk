import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const navigationItems = [
  { href: "#home", label: "Beranda", icon: "🏠" },
  { href: "#profile", label: "Profil", icon: "👥" },
  { href: "#gallery", label: "Galeri", icon: "🖼️" },
  { href: "#programs", label: "Program", icon: "📚" },
  { href: "#news", label: "Berita", icon: "📰" },
  { href: "#contact", label: "Kontak", icon: "📞" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for navigation
  const navY = useTransform(scrollY, [0, 100], [0, -5]);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href);
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Fix memory leak by using stable function reference
    const handleMediaChange = () => setPrefersReducedMotion(mediaQuery.matches);

    window.addEventListener("scroll", handleScroll);
    mediaQuery.addEventListener('change', handleMediaChange);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    setIsMobileMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "glassmorphism-strong shadow-2xl border-b border-cyber-blue/50" 
          : "glassmorphism border-b border-cyber-blue/20"
      }`}
      style={{ y: !prefersReducedMotion ? navY : 0 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="font-orbitron text-xl font-bold neon-text cursor-pointer"
            whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
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
                whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
                whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
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
            whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
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
                whileHover={!prefersReducedMotion ? { x: 10 } : {}}
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
