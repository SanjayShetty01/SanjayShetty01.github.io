const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
      <span>
        © {new Date().getFullYear()} Sanjaya J. Shetty.
      </span>

      <span className="flex items-center gap-1">
        Built with care, with help from
        <a
          href="https://loveable.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:opacity-80 transition"
        >
          <img
            src="/lovable-logo-icon.svg"
            alt="Loveable Logo"
            className="h-3 w-auto"
          />
          Loveable
        </a>
      </span>
    </div>
  </footer>
);


export default Footer;
