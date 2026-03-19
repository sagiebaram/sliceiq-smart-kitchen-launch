import { motion } from "framer-motion";
import { useState } from "react";

const WaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 px-6" id="waitlist-bottom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
          Be First to Cut Smarter.
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Join the waitlist to lock in early-adopter pricing and be among the first to experience SliceIQ.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 h-14 px-5 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
          />
          <button
            type="submit"
            className="h-14 px-8 rounded-2xl bg-accent text-accent-foreground font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg active:scale-95 whitespace-nowrap"
          >
            {submitted ? "You're In! ✓" : "Join Waitlist"}
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          No spam. Early-adopter pricing for waitlist members.
        </p>
      </motion.div>
    </section>
  );
};

export default WaitlistCTA;
