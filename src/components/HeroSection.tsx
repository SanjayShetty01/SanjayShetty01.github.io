import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-28 h-28 rounded-full bg-muted mx-auto mb-8 flex items-center justify-center text-3xl font-bold text-primary" style={{ fontFamily: "'DM Serif Display', serif" }}>
          SJS
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
          Sanjaya J. Shetty
        </h1>

        <p className="text-lg sm:text-xl text-primary font-medium mb-6">
          R Developer & Data Analyst
        </p>

        <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          Building tools and insights with data. Passionate about statistical computing, 
          open-source contributions, and turning complex data into clear stories.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/SanjayShetty01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
