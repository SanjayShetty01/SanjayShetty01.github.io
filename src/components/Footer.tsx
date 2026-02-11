const Footer = () => (
  <footer className="py-8 px-6 border-t border-border text-center">
    <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
      © {new Date().getFullYear()} Sanjaya J. Shetty. Built with care, with help from
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
        Loveable.
      </a>
    </p>
  </footer>
);


export default Footer;
