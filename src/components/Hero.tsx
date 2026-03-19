import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "@/assets/hero-kitchen.jpg";

const Hero = () => {
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-success mb-4">
            Coming Soon
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            The First Smart Knife That Guides Your Cuts, Tracks Your Portions, and Keeps Itself Clean.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Consistent slices every time. Less food waste. Smarter cooking starts with the tool in your hand.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md" id="waitlist">
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
              {submitted ? "You're In! ✓" : "Join the Waitlist"}
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">
            No spam. Early-adopter pricing for waitlist members.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-soft-lg">
            <img
              src={heroImg}
              alt="Fresh vegetables being sliced on a marble kitchen counter"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
