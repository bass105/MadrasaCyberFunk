import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15;
        const newProgress = prev + increment;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center flex-col z-50"
      style={{ 
        background: "linear-gradient(135deg, var(--cyber-dark) 0%, var(--cyber-navy) 100%)" 
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="loading-screen"
    >
      <div className="text-center">
        <motion.div 
          className="mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 mx-auto border-4 border-cyber-blue rounded-full border-t-transparent" />
        </motion.div>
        
        <motion.h1 
          className="font-orbitron text-4xl font-bold neon-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          AL-MANSHURIYAH
        </motion.h1>
        
        <motion.p 
          className="text-cyber-cyan font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Memuat sistem cyberfunk...
        </motion.p>
        
        <motion.div 
          className="mt-8 w-64 bg-cyber-dark rounded-full h-2 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="progress-bar h-2 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
