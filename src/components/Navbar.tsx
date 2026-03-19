import logo from "@/assets/sliceiq-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="SliceIQ" className="h-10" />
        </a>
        <a
          href="#waitlist"
          className="h-11 px-6 rounded-full bg-accent text-accent-foreground font-semibold text-sm inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg active:scale-95"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
