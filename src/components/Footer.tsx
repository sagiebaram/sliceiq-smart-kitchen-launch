import logo from "@/assets/sliceiq-logo.png";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SliceIQ" className="h-36" />
        </div>
        <p className="text-sm text-muted-foreground">The smartest cut in your kitchen.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 SliceIQ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
