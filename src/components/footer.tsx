import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-foreground">
            © {currentYear} Dao Chi Trung. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/MilesDao" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/milesdao/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="mailto:trungdao131105@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
