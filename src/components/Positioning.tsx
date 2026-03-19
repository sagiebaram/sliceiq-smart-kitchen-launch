import { motion } from "framer-motion";

const Positioning = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tight text-primary-foreground leading-tight"
        >
          SliceIQ isn't just a knife — it's a cooking accountability system.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto"
        >
          From portion control to technique improvement, every cut becomes data you can learn from.
        </motion.p>
      </div>
    </section>
  );
};

export default Positioning;
