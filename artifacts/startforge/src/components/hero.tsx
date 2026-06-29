import { WaitlistForm } from "./waitlist-form";

const LOGOS = ["Y Combinator", "Product Hunt", "Indie Hackers", "BpiFrance", "Station F"];

export function Hero() {
  return (
    <section
      id="waitlist"
      style={{ position: "relative", padding: "9rem 1rem 6rem", textAlign: "center" }}
    >
      <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

        {/* Badge */}
        <div className="animate-fade-up" style={{ animationDelay: "0.04s", display: "flex", justifyContent: "center" }}>
          <span className="glass" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            borderRadius: "9999px", padding: "0.35rem 1rem",
            fontSize: "0.78rem", fontWeight: 600, color: "var(--color-muted)",
          }}>
            <span style={{ position: "relative", display: "flex", width: "0.5rem", height: "0.5rem" }}>
              <span style={{
                position: "absolute", inset: 0, borderRadius: "9999px",
                backgroundColor: "var(--color-brand)", opacity: 0.75,
                animation: "ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite",
              }} />
              <span style={{
                position: "relative", width: "0.5rem", height: "0.5rem",
                borderRadius: "9999px", backgroundColor: "var(--color-brand)",
              }} />
              <style>{`@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`}</style>
            </span>
            Acces anticipé — Places limitées
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up"
          style={{
            animationDelay: "0.11s",
            marginTop: "1.75rem",
            fontSize: "clamp(2.2rem, 7vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "var(--color-text)",
          }}
        >
          Construisez votre{" "}
          <span className="text-gradient">startup de demain</span>,{" "}
          <br />aujourd'hui.
        </h1>

        {/* Subline */}
        <p
          className="animate-fade-up"
          style={{
            animationDelay: "0.19s",
            marginTop: "1.5rem",
            fontSize: "1.1rem",
            lineHeight: 1.65,
            color: "var(--color-muted)",
            maxWidth: "38rem",
            margin: "1.5rem auto 0",
          }}
        >
          StartForge connecte les fondateurs visionnaires avec les bons co-fondateurs,
          valide vos idées par l'IA et vous propulse de l'idée au MVP en quelques semaines.
        </p>

        {/* Form */}
        <div className="animate-fade-up" style={{ animationDelay: "0.27s", marginTop: "2.5rem" }}>
          <WaitlistForm />
        </div>

        {/* Social proof */}
        <div
          className="animate-fade-up"
          style={{
            animationDelay: "0.35s",
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
            Fondateurs de l'écosystème
          </p>
          <div className="marquee-mask" style={{ overflow: "hidden", width: "100%", maxWidth: "36rem" }}>
            <div style={{ display: "flex", gap: "2.5rem", width: "max-content", animation: "marquee 18s linear infinite" }}>
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "rgba(122, 154, 184, 0.5)",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
