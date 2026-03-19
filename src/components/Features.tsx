import { motion } from "framer-motion";
import { Crosshair, BarChart3, Sparkles } from "lucide-react";

const features = [
  {
    icon: Crosshair,
    title: "Precision Guide System",
    description: "Chef-level consistent cuts without professional skills. Sensor-guided feedback helps you slice with confidence every time.",
  },
  {
    icon: BarChart3,
    title: "Smart Portion Tracker",
    description: "Real-time slice weight tied to your macros or recipes. Know exactly how much you're cutting — down to the gram.",
  },
  {
    icon: Sparkles,
    title: "Auto-Clean Mechanism",
    description: "Less food adhesion, faster cleanup, more time cooking. A proprietary surface coating keeps your blade fresh between cuts.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-accent mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Smart by design. Simple to use.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="group p-8 rounded-[2rem] bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center text-success mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
