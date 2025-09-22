import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingMessages = [
  "INITIATING QUANTUM CORE...",
  "LOADING NEURAL NETWORKS...",
  "SYNCING BLOCKCHAIN DATA...",
  "ACTIVATING CYBER PROTOCOLS...",
  "SYSTEM READY FOR DEPLOYMENT"
];

const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [matrixRain, setMatrixRain] = useState<string[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const initialPrefersReduced = mediaQuery.matches;
    setPrefersReducedMotion(initialPrefersReduced);

    // Generate matrix rain with reduced frequency
    const generateMatrixRain = () => {
      const columns = initialPrefersReduced ? 0 : 20; // Further reduced for performance
      const rain = [];
      for (let i = 0; i < columns; i++) {
        rain.push(matrixChars.charAt(Math.floor(Math.random() * matrixChars.length)));
      }
      setMatrixRain(rain);
    };

    generateMatrixRain();
    const matrixInterval = initialPrefersReduced ? undefined : setInterval(generateMatrixRain, 500);

    // Progress and phase management
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 8 + 2;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          setCurrentPhase(4);
          return 100;
        } else if (newProgress >= 80) {
          setCurrentPhase(3);
        } else if (newProgress >= 60) {
          setCurrentPhase(2);
        } else if (newProgress >= 30) {
          setCurrentPhase(1);
        }
        
        return newProgress;
      });
    }, 150);

    // Random glitch effect - only if motion allowed
    const glitchInterval = initialPrefersReduced ? undefined : setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000); // Further increased for performance

    return () => {
      clearInterval(interval);
      if (matrixInterval) clearInterval(matrixInterval);
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center flex-col z-50 overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, var(--cyber-dark) 0%, var(--cyber-navy) 50%, #0a0a0f 100%)" 
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      data-testid="loading-screen"
    >
      {/* Matrix Rain Background - only if motion allowed */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 opacity-20">
          {matrixRain.map((char, i) => (
            <motion.div
              key={i}
              className="absolute text-cyber-blue font-mono text-sm"
              style={{
                left: `${(i * 100) / matrixRain.length}%`,
                top: "-10px",
                willChange: 'transform, opacity'
              }}
              animate={{
                y: ["0vh", "110vh"],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 4, // Increased from 3 to 4 for smoother animation
                repeat: Infinity,
                delay: i * 0.15, // Increased delay for less crowded effect
                ease: "linear"
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      )}

      {/* Geometric Background Elements - simplified for performance */}
      {!prefersReducedMotion && (
        <>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyber-blue/30 rotate-45"
            style={{ willChange: 'transform' }}
            animate={{ 
              rotate: [45, 405], 
              scale: [1, 1.1, 1] // Reduced scale change
            }}
            transition={{ 
              duration: 10, // Slower for better performance
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-cyber-cyan/20"
            style={{ willChange: 'transform, opacity' }}
            animate={{ 
              rotate: [0, 360], 
              opacity: [0.2, 0.6, 0.2] // Reduced max opacity
            }}
            transition={{ 
              duration: 8, // Slower rotation
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </>
      )}

      <div className="text-center relative z-10">
        {/* Main Logo with Glitch Effect */}
        <motion.div 
          className="mb-12 relative"
          animate={!prefersReducedMotion && glitchActive ? { scale: [1, 1.02, 0.98, 1] } : {}}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="relative"
            animate={{
              filter: glitchActive 
                ? ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                : "hue-rotate(0deg)"
            }}
          >
            <motion.h1 
              className={`font-orbitron text-6xl md:text-8xl font-black neon-text ${glitchActive ? 'animate-glitch' : ''}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              AL-MANSHURIYAH
            </motion.h1>
            {!prefersReducedMotion && glitchActive && (
              <>
                <div className="absolute inset-0 font-orbitron text-6xl md:text-8xl font-black text-red-500 opacity-50 animate-glitch-1">
                  AL-MANSHURIYAH
                </div>
                <div className="absolute inset-0 font-orbitron text-6xl md:text-8xl font-black text-cyan-400 opacity-50 animate-glitch-2">
                  AL-MANSHURIYAH
                </div>
              </>
            )}
          </motion.div>
        </motion.div>

        {/* Holographic Loading Ring */}
        <motion.div className="relative mb-8">
          <motion.div 
            className="w-40 h-40 mx-auto relative"
            animate={!prefersReducedMotion ? { rotate: 360 } : {}}
            transition={!prefersReducedMotion ? { duration: 4, repeat: Infinity, ease: "linear" } : {}}
          >
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple bg-clip-border">
              <div className="absolute inset-1 rounded-full bg-cyber-dark" />
            </div>
            <div className="absolute inset-4 rounded-full border-2 border-cyber-blue/50" />
            <motion.div 
              className="absolute inset-6 rounded-full bg-cyber-blue/20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
          
          {/* Center progress indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="font-orbitron text-2xl font-bold text-cyber-cyan"
              animate={{ 
                textShadow: [
                  "0 0 5px var(--cyber-cyan)",
                  "0 0 20px var(--cyber-cyan)",
                  "0 0 5px var(--cyber-cyan)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Message with Typewriter Effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase}
            className="font-mono text-lg text-cyber-cyan mb-8 min-h-[24px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {loadingMessages[currentPhase] || loadingMessages[0]}
            </motion.span>
            <motion.span
              className="inline-block w-2 h-5 bg-cyber-cyan ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Advanced Progress Bar */}
        <motion.div 
          className="relative w-80 h-3 bg-cyber-dark/50 rounded-full mx-auto border border-cyber-blue/30 overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple relative overflow-hidden"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent animate-pulse" />
        </motion.div>

        {/* System Status Indicators */}
        <motion.div 
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {['CPU', 'RAM', 'GPU', 'NET'].map((item, index) => (
            <motion.div
              key={item}
              className="flex items-center space-x-2"
              animate={{
                opacity: progress > (index + 1) * 20 ? 1 : 0.3
              }}
            >
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  progress > (index + 1) * 20 
                    ? 'bg-green-400' 
                    : 'bg-cyber-blue/50'
                }`}
                animate={{
                  scale: progress > (index + 1) * 20 ? [1, 1.5, 1] : 1,
                  boxShadow: progress > (index + 1) * 20 
                    ? ["0 0 5px #4ade80", "0 0 15px #4ade80", "0 0 5px #4ade80"]
                    : "0 0 0px transparent"
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="font-mono text-xs text-muted-foreground">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
