import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 40,
        padding: scrolled ? "0.5rem 0" : "1rem 0",
        transition: "padding 0.3s ease",
      }}
    >
      <nav
        className={scrolled ? "glass" : ""}
        style={{
          maxWidth: "72rem",
          margin: scrolled ? "0 0.75rem" : "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "0.75rem 1.5rem",
          borderRadius: scrolled ? "1rem" : "0",
          transition: "all 0.3s ease",
          border: scrolled ? undefined : "none",
          background: scrolled ? undefined : "transparent",
          backdropFilter: scrolled ? undefined : "none",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <div style={{
            width: "2rem", height: "2rem",
            borderRadius: "0.5rem",
            background: "linear-gradient(135deg, #33d1ff, #7b61ff)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span style={{
            fontWeight: 800,
            fontSize: "1.1rem",
            background: "linear-gradient(100deg, #80e8ff, #7b61ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}>
            StartForge
          </span>
        </a>

        {/* Nav links — desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", fontSize: "0.875rem", color: "var(--color-muted)" }}>
          <a href="#features" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}>
            Fonctionnalites
          </a>
          <a href="#how" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}>
            Comment ca marche
          </a>
          <a href="#waitlist" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}>
            FAQ
          </a>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="btn-primary"
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Rejoindre
        </a>
      </nav>
    </header>
  );
}
