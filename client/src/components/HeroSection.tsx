import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

// Particle system configuration
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 0.5,
    colorIndex: Math.floor(Math.random() * 3)
  }));
};

const getParticleClass = (colorIndex: number) => {
  switch(colorIndex) {
    case 0: return 'bg-cyber-blue';
    case 1: return 'bg-cyber-cyan';
    case 2: return 'bg-cyber-purple';
    default: return 'bg-cyber-blue';
  }
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Reduce particles for better performance
  const particleCount = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 8 : 15); // Further reduced
  const [particles] = useState(() => generateParticles(particleCount));
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 300], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  // Mouse tracking and motion preference detection
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    // Mouse tracking (only if motion is allowed)
    const handleMouseMove = (e: MouseEvent) => {
      if (!prefersReducedMotion) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [prefersReducedMotion]);

  const gridLines = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => i);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Advanced Cyberpunk Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: !prefersReducedMotion ? opacity : 1 }}
      >
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-navy to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyber-purple/5 to-cyber-blue/10" />
        
        {/* Dynamic grid system */}
        <div className="absolute inset-0 data-grid opacity-20" />
        
        {/* Circuit pattern overlay */}
        <motion.div 
          className="absolute inset-0 circuit-pattern opacity-30"
          style={{ y: !prefersReducedMotion ? y1 : 0 }}
        />
      </motion.div>

      {/* Advanced particle system */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: !prefersReducedMotion ? y2 : 0 }}
      >
        {!prefersReducedMotion && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-1 h-1 ${getParticleClass(particle.colorIndex)} rounded-full`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, particle.size, 0]
            }}
            transition={{
              duration: particle.speed * 4,
              repeat: Infinity,
              delay: particle.id * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Interactive holographic elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          x: !prefersReducedMotion ? mousePosition.x * 0.015 : 0, // Reduced intensity
          y: !prefersReducedMotion ? y3 : 0
        }}
      >
        {/* Floating geometric shapes with parallax */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyber-blue/20 rotate-45"
          animate={{ 
            rotate: [45, 405], 
            scale: [1, 1.1, 1],
            borderColor: ["rgba(0, 212, 255, 0.2)", "rgba(0, 255, 255, 0.4)", "rgba(0, 212, 255, 0.2)"]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/4 w-48 h-48 border border-cyber-cyan/30"
          animate={{ 
            rotate: [0, 360], 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Data streams - reduced for performance */}
        {!prefersReducedMotion && gridLines.slice(0, 4).map((line) => (
          <motion.div
            key={line}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyber-cyan/40 to-transparent"
            style={{ 
              left: `${line * 25}%`,
              willChange: 'transform, opacity'
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: line * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Main content with enhanced animations */}
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        style={{ y: !prefersReducedMotion ? y1 : 0 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Enhanced typography with multiple animation layers */}
          <motion.div className="relative mb-6">
            <motion.h1 
              className="font-orbitron text-6xl md:text-8xl xl:text-9xl font-black relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              <motion.span 
                className="block relative"
                animate={!prefersReducedMotion ? { 
                  opacity: [1, 0.8, 1]
                } : {}}
                transition={!prefersReducedMotion ? { duration: 4, repeat: Infinity } : {}}
              >
                <span className="cyber-text-gradient">MADRASAH</span>
                {/* Holographic overlay */}
                <span className="absolute inset-0 cyber-text-gradient opacity-50 blur-sm">MADRASAH</span>
              </motion.span>
              
              <motion.span 
                className="block text-cyber-cyan relative"
                initial={{ opacity: 0, x: -100, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                ALIYAH
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-transparent opacity-30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                />
              </motion.span>
              
              <motion.span 
                className="block relative overflow-hidden"
                initial={{ opacity: 0, x: 100, rotateY: -90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <span className="cyber-text-gradient">AL-MANSHURIYAH</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 3 }}
                />
              </motion.span>
            </motion.h1>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 border border-cyber-blue/30 rotate-45"
              animate={{ 
                rotate: [45, 225, 45],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-16 h-16 border border-cyber-cyan/40"
              animate={{ 
                rotate: [0, 180, 360],
                borderRadius: ["0%", "50%", "0%"]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Enhanced subtitle with typewriter effect */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.p className="text-xl md:text-2xl text-muted-foreground font-mono glassmorphism inline-block px-6 py-3 rounded-lg">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, delay: 2 }}
              >
                &gt; Pendidikan_masa_depan.exe
              </motion.span>
              <motion.span
                className="inline-block w-3 h-6 bg-cyber-cyan ml-2"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.p>
          </motion.div>
          
          {/* Enhanced action buttons */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.button 
              className="group relative px-10 py-4 font-bold overflow-hidden glassmorphism-strong rounded-lg"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-akses-sistem"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-cyan opacity-20"
                whileHover={{ opacity: 0.4 }}
              />
              <span className="relative z-10 text-cyber-blue group-hover:text-white transition-colors">
                AKSES SISTEM
              </span>
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyber-blue to-cyber-cyan"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              className="group relative px-10 py-4 font-bold overflow-hidden cyber-border-animated rounded-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-pelajari"
            >
              <span className="relative z-10 text-cyber-cyan group-hover:text-white transition-colors">
                PELAJARI LEBIH LANJUT
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-0 group-hover:opacity-20 transition-opacity"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Advanced floating elements with mouse interaction */}
      <motion.div 
        className="absolute bottom-10 left-10 particle-effect"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: !prefersReducedMotion ? mousePosition.x * 0.05 : 0, // Reduced and gated
          y: !prefersReducedMotion ? mousePosition.y * 0.05 : 0
        }}
      >
        <div className="w-24 h-24 border-2 border-cyber-blue rotate-45 glassmorphism" />
      </motion.div>
      
      <motion.div 
        className="absolute top-20 right-10 holographic"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          x: !prefersReducedMotion ? -mousePosition.x * 0.03 : 0, // Reduced and gated
          y: !prefersReducedMotion ? -mousePosition.y * 0.03 : 0
        }}
      >
        <div className="w-20 h-20 border-2 border-cyber-cyan rounded-lg" />
      </motion.div>

      {/* Scan line effect - only if motion allowed */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"
          style={{ willChange: 'transform' }}
          animate={{ y: [0, "100vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      )}
    </section>
  );
}
