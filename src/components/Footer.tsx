const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
      <span>
        © {new Date().getFullYear()} Sanjaya J. Shetty.
      </span>

      <span className="flex items-center gap-1">
        Built with care, Scaffolded by
        <a
          href="https://lovable.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:opacity-80 transition"
        >
          <img
            src="/lovable-logo-icon.svg"
            alt="Lovable Logo"
            className="h-3 w-auto"
          />
          Lovable AI.
        </a>
      </span>
    </div>
  </footer>
);


export default Footer;
