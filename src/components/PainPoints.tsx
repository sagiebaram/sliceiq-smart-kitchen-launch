import { motion } from "framer-motion";
import { Scale, Clock, Droplets } from "lucide-react";

const points = [
  {
    icon: Scale,
    text: "Most home cooks over-portion every meal.",
  },
  {
    icon: Clock,
    text: "Inconsistent cuts waste time and food.",
  },
  {
    icon: Droplets,
    text: "Cleaning slows your prep down.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-4 p-6 rounded-3xl bg-card shadow-soft"
          >
            <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center text-success shrink-0">
              <point.icon className="w-6 h-6" />
            </div>
            <p className="text-foreground font-medium leading-snug">{point.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PainPoints;
