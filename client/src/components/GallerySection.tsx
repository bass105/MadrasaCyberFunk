import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Students in Computer Lab",
    title: "Lab Komputer"
  },
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern Interactive Classroom",
    title: "Ruang Kelas"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern School Library",
    title: "Perpustakaan"
  },
  {
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Islamic Study Session",
    title: "Kajian Islam"
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern Science Laboratory",
    title: "Lab Sains"
  },
  {
    src: "https://images.unsplash.com/photo-1564769625392-651b2f7d8c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "School Mosque Interior",
    title: "Masjid Sekolah"
  }
];

export default function GallerySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-20 bg-secondary/50" ref={ref} data-testid="gallery-section">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-4" data-testid="text-galeri-title">
            GALERI SEKOLAH
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="cyber-card rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" 
              }}
              data-testid={`gallery-item-${index}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-cyber-cyan" data-testid={`text-${item.title.toLowerCase().replace(" ", "-")}`}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
