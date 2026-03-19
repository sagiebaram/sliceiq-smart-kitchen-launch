import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Standard",
    price: "$149",
    description: "The smart knife that changes how you cook.",
    features: [
      "Precision Guide System",
      "Auto-Clean coating",
      "USB-C magnetic charger",
      "1-year sensor warranty",
    ],
    highlight: false,
  },
  {
    name: "Premium Bundle",
    price: "$229",
    description: "Full ecosystem with app integration and extras.",
    features: [
      "Everything in Standard",
      "Smart Portion Tracker app",
      "Recipe-synced cutting guides",
      "Premium carry case",
      "2-year extended warranty",
    ],
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-accent mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Choose your SliceIQ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className={`relative overflow-hidden p-10 rounded-[2rem] bg-card shadow-soft ${tier.highlight ? "ring-2 ring-accent" : ""}`}
            >
              <span className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                Coming Soon
              </span>
              <h3 className="text-2xl font-display font-bold text-foreground mb-1">{tier.name}</h3>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground ml-1 text-sm">estimated</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-success shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`block text-center h-12 leading-[3rem] rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                  tier.highlight
                    ? "bg-accent text-accent-foreground hover:shadow-soft-lg"
                    : "bg-primary text-primary-foreground hover:shadow-soft-lg"
                }`}
              >
                Join Waitlist for Early Pricing
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
