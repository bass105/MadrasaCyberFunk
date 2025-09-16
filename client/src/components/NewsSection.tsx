import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const news = [
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Students Celebrating Achievement",
    date: "15 NOV 2024",
    title: "Prestasi Gemilang di Olimpiade Sains",
    excerpt: "Tim sains AL-MANSHURIYAH berhasil meraih medali emas dalam kompetisi tingkat nasional..."
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Technology Enhanced Learning",
    date: "10 NOV 2024",
    title: "Peluncuran Sistem E-Learning Baru",
    excerpt: "Platform pembelajaran digital terbaru dengan fitur AI dan VR telah diluncurkan..."
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Robotics Project Development",
    date: "05 NOV 2024",
    title: "Program Robotik Tingkat Lanjut",
    excerpt: "Siswa mengembangkan robot pintar untuk kompetisi internasional tahun depan..."
  }
];

const newsTickerItems = [
  "[BREAKING] Siswa AL-MANSHURIYAH meraih juara 1 Olimpiade Sains Nasional 2024",
  "[UPDATE] Pendaftaran siswa baru tahun 2024/2025 telah dibuka",
  "[INFO] Sistem pembelajaran hybrid dimulai semester depan",
  "[ACHIEVEMENT] Tim robotik sekolah lolos ke tingkat internasional"
];

export default function NewsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="news" className="py-20 bg-secondary/50" ref={ref} data-testid="news-section">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-4" data-testid="text-berita-title">
            BERITA & PENGUMUMAN
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto" />
        </motion.div>

        {/* Scrolling News Ticker */}
        <motion.div 
          className="mb-12 bg-cyber-dark border border-cyber-blue rounded-lg p-4 overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="news-ticker"
        >
          <div className="news-scroll whitespace-nowrap">
            <span className="text-cyber-cyan font-mono">
              {newsTickerItems.join(" • ")} •{" "}
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.article
              key={index}
              className="cyber-card rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" 
              }}
              data-testid={`news-article-${index}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.src}
                  alt={article.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-cyber-cyan text-sm font-mono mb-2" data-testid={`news-date-${index}`}>
                  {article.date}
                </div>
                <h3 className="font-bold text-lg mb-3" data-testid={`news-title-${index}`}>
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`news-excerpt-${index}`}>
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
