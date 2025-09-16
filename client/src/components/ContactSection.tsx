import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: "📍",
    title: "Alamat",
    content: "Jl. Pendidikan No. 123, Jakarta Selatan"
  },
  {
    icon: "📞",
    title: "Telepon",
    content: "+62 21 1234 5678"
  },
  {
    icon: "✉️",
    title: "Email",
    content: "info@al-manshuriyah.sch.id"
  }
];

export default function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Sukses!",
      description: "Pesan Anda telah dikirim! Terima kasih.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20" ref={ref} data-testid="contact-section">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-4" data-testid="text-kontak-title">
            HUBUNGI KAMI
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="cyber-card p-8 rounded-xl">
              <h3 className="font-orbitron text-2xl font-bold text-cyber-cyan mb-6" data-testid="text-informasi-kontak">
                INFORMASI KONTAK
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="w-12 h-12 bg-cyber-blue/20 rounded-lg flex items-center justify-center text-xl">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{info.title}</p>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="cyber-card p-8 rounded-xl" onSubmit={handleSubmit} data-testid="contact-form">
              <h3 className="font-orbitron text-2xl font-bold text-cyber-cyan mb-6" data-testid="text-kirim-pesan">
                KIRIM PESAN
              </h3>
              
              <div className="space-y-4">
                <div>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-cyber-dark border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    data-testid="input-nama"
                  />
                </div>
                <div>
                  <input 
                    type="email"
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-cyber-dark border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Pesan Anda" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-cyber-dark border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors resize-none text-foreground placeholder-muted-foreground"
                    data-testid="textarea-pesan"
                  />
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full cyber-border px-8 py-4 bg-primary text-primary-foreground font-bold hover:bg-primary/80 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-kirim-pesan"
                >
                  KIRIM PESAN
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
