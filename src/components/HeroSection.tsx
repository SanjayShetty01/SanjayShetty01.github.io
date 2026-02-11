import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-8">
          <img
            src="/profile.jpg"
            alt="Sanjaya J. Shetty"
            className="w-full h-full object-cover rounded-full border border-border shadow-md"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
          Sanjaya J. Shetty
        </h1>

        <p className="text-lg sm:text-xl text-primary font-medium mb-6">
          R & AWS Developer
        </p>

        <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          Building scalable analytics and modelling systems for finance and risk.
          Passionate about statistical computing, cloud infrastructure, and
          transforming complexity into clarity.
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
            href="https://www.linkedin.com/in/sanjaya-j-shetty/"
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
