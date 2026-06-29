const STEPS = [
  {
    num: "01",
    title: "Inscrivez-vous",
    desc: "Rejoignez la liste d'attente. Notre equipe examine chaque candidature pour garantir la qualite de la communaute.",
  },
  {
    num: "02",
    title: "Completez votre profil",
    desc: "Decrivez vos competences, votre vision et ce que vous cherchez dans un co-fondateur. L'IA commence a travailler.",
  },
  {
    num: "03",
    title: "Recevez vos matchs",
    desc: "Nous vous presentons des profils complementaires selectionnes par notre algorithme. Un match, une room dediee.",
  },
  {
    num: "04",
    title: "Lancez votre startup",
    desc: "Construisez votre MVP dans une Startup Room, validez votre marche et pitchez aux investisseurs de notre reseau.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" style={{ padding: "5rem 1rem 6rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--color-brand)", marginBottom: "0.75rem",
          }}>
            Comment ca marche
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 1rem" }}>
            De l'idee au lancement en 4 etapes
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: "absolute",
                  top: "1.75rem",
                  left: "calc(100% - 0.75rem)",
                  width: "1.5rem",
                  height: "1px",
                  background: "linear-gradient(to right, var(--color-brand), var(--color-accent))",
                  opacity: 0.3,
                  display: "none", // visible at lg only via inline is complex; skip for now
                }} />
              )}
              <div className="card" style={{ borderRadius: "1.25rem", padding: "1.75rem", height: "100%" }}>
                <span style={{
                  display: "inline-block",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  background: "linear-gradient(100deg, var(--color-brand), var(--color-accent))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  marginBottom: "1rem",
                }}>
                  {s.num}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.6rem", color: "var(--color-text)" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-muted)", margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
