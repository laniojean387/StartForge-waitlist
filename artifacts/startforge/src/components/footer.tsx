export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--color-border)",
      padding: "2.5rem 1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
      maxWidth: "72rem",
      margin: "0 auto",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{
          width: "1.5rem", height: "1.5rem", borderRadius: "0.375rem",
          background: "linear-gradient(135deg, #33d1ff, #7b61ff)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span style={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.01em", color: "var(--color-text)" }}>
          StartForge
        </span>
      </div>

      <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", margin: 0 }}>
        © {new Date().getFullYear()} StartForge. Tous droits reserves.
      </p>

      <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.8rem" }}>
        <a href="#" style={{ color: "var(--color-muted)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}>
          Confidentialite
        </a>
        <a href="#" style={{ color: "var(--color-muted)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}>
          Conditions
        </a>
      </div>
    </footer>
  );
}
