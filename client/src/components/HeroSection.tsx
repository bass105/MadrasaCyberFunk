import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Cyberpunk Background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-navy to-background">
        <motion.div 
          className="absolute top-20 left-10 w-2 h-2 bg-cyber-blue rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-3 h-3 bg-cyber-cyan rounded-full"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyber-purple rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyber-blue rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="font-orbitron text-6xl md:text-8xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <motion.span 
              className="neon-text block"
              animate={{ textShadow: ["0 0 5px var(--cyber-blue)", "0 0 20px var(--cyber-blue)", "0 0 5px var(--cyber-blue)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MADRASAH
            </motion.span>
            <motion.span 
              className="text-cyber-cyan block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              ALIYAH
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              AL-MANSHURIYAH
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            &gt; Pendidikan_masa_depan.exe
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.button 
              className="cyber-border px-8 py-4 bg-primary text-primary-foreground font-bold hover:bg-primary/80 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-akses-sistem"
            >
              AKSES SISTEM
            </motion.button>
            <motion.button 
              className="cyber-border px-8 py-4 bg-transparent text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "var(--cyber-blue)", color: "var(--cyber-dark)" }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-pelajari"
            >
              PELAJARI LEBIH LANJUT
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated geometric shapes */}
      <motion.div 
        className="absolute bottom-10 left-10 w-20 h-20 border-2 border-cyber-blue rotate-45"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-20 right-10 w-16 h-16 border-2 border-cyber-cyan"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
