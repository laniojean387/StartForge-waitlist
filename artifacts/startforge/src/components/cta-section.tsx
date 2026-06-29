import { WaitlistForm } from "./waitlist-form";

export function CtaSection() {
  return (
    <section style={{ padding: "4rem 1rem 6rem", position: "relative" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
        <div style={{
          position: "relative",
          borderRadius: "2rem",
          padding: "4rem 2rem",
          textAlign: "center",
          overflow: "hidden",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}>
          {/* Glow */}
          <div style={{
            position: "absolute",
            inset: 0, top: "-6rem",
            zIndex: 0,
            height: "16rem",
            opacity: 0.6,
            filter: "blur(90px)",
            background: "radial-gradient(ellipse at center, #33d1ff 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              margin: "0 auto 1rem",
              maxWidth: "34rem",
            }}>
              Pret a construire quelque chose de <span className="text-gradient">grand</span> ?
            </h2>
            <p style={{ color: "var(--color-muted)", maxWidth: "28rem", margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
              Les places sont limitees. Reservez votre acces maintenant et soyez parmi les premiers a rejoindre l'ecosystem StartForge.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
