import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCounter } from "@/hooks/useCounter";

const programs = [
  {
    icon: "📖",
    title: "PROGRAM REGULER",
    description: "Kurikulum nasional dengan penguatan materi keagamaan",
    percentage: 95,
    label: "95% Tingkat Kelulusan"
  },
  {
    icon: "💻",
    title: "PROGRAM IT",
    description: "Fokus pada teknologi informasi dan programming",
    percentage: 88,
    label: "88% Masuk PTN"
  },
  {
    icon: "🔬",
    title: "PROGRAM SAINS",
    description: "Penguatan matematika dan ilmu pengetahuan alam",
    percentage: 92,
    label: "92% Prestasi Olimpiade"
  }
];

const statistics = [
  { value: 850, label: "Total Siswa" },
  { value: 65, label: "Guru & Staff" },
  { value: 25, label: "Tahun Berdiri" },
  { value: 98, label: "% Akreditasi" }
];

export default function ProgramsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="programs" className="py-20" ref={ref} data-testid="programs-section">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-4" data-testid="text-program-title">
            PROGRAM STUDI
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="cyber-card p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              data-testid={`program-card-${index}`}
            >
              <div className="text-4xl text-cyber-blue mb-4">
                {program.icon}
              </div>
              <h3 className="font-orbitron text-xl font-bold text-cyber-cyan mb-4">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {program.description}
              </p>
              <div className="bg-cyber-dark rounded-full h-2 mb-2 overflow-hidden">
                <motion.div 
                  className="progress-bar h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${program.percentage}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                />
              </div>
              <p className="text-sm text-cyber-cyan">{program.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl font-orbitron font-bold neon-text">
                <CounterDisplay value={stat.value} isVisible={inView} />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterDisplay({ value, isVisible }: { value: number; isVisible: boolean }) {
  const displayValue = useCounter(value, isVisible);
  return <span data-testid="counter-value">{displayValue}</span>;
}
