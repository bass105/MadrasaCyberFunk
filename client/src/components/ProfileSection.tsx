import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProfileSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="profile" className="py-20 relative" ref={ref} data-testid="profile-section">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-4" data-testid="text-profil-title">
            PROFIL SEKOLAH
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern Islamic School Building" 
              className="rounded-xl shadow-2xl cyber-border"
              data-testid="img-sekolah"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="cyber-card p-8 rounded-xl">
              <h3 className="font-orbitron text-2xl font-bold text-cyber-cyan mb-6" data-testid="text-visi-misi">
                VISI & MISI
              </h3>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="font-bold text-cyber-blue mb-2">VISI:</h4>
                  <p className="text-muted-foreground" data-testid="text-visi">
                    "Menjadi lembaga pendidikan Islam yang unggul dalam teknologi dan spiritualitas di era digital."
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="font-bold text-cyber-blue mb-2">MISI:</h4>
                  <ul className="text-muted-foreground space-y-2" data-testid="text-misi">
                    <li>• Mengintegrasikan teknologi modern dengan nilai-nilai Islam</li>
                    <li>• Mencetak generasi yang siap menghadapi tantangan masa depan</li>
                    <li>• Membangun karakter islami yang berakhlak mulia</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
