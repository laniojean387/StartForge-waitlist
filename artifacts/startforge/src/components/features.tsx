const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.04-4.79V8.28a2.5 2.5 0 0 1 1.8-4.22Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.04-4.79V8.28a2.5 2.5 0 0 0-1.8-4.22Z" />
      </svg>
    ),
    title: "Matching IA de Co-Fondateurs",
    desc: "Notre algorithme analyse vos competences, traits de personnalite et vision produit pour vous connecter avec les associes avec qui vous avez le plus de chances de reussir.",
    span: "lg:col-span-3",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01M7 17h.01M12 17h.01M17 17h.01" />
      </svg>
    ),
    title: "Startup Rooms",
    desc: "Espaces virtuels immersifs pour brainstormer, iterer et construire votre MVP. Outils integres : task board, modele financier, pitch deck IA.",
    span: "lg:col-span-2",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Conseiller IA 24/7",
    desc: "Un advisor strategique base sur les meilleurs LLMs. Il challenge vos hypotheses, prepare vos pitchs et identifie les failles de votre business plan.",
    span: "lg:col-span-2",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Acces Investisseurs",
    desc: "Reseau d'angels, VCs et family offices. Soumettez votre dossier directement depuis la plateforme quand vous etes prets.",
    span: "lg:col-span-3",
  },
];

const PRINCIPLES = [
  { title: "Merite avant tout", desc: "L'acces aux ressources et aux connexions repose sur la qualite de votre projet, pas sur votre reseau de depart." },
  { title: "Vitesse d'execution", desc: "De l'idee au premier client en 90 jours. Notre methode compresse les cycles d'iteration." },
  { title: "Communaute elite", desc: "Chaque membre est selectionne manuellement. La qualite de la communaute est notre meilleure feature." },
];

export function Features() {
  return (
    <section id="features" style={{ padding: "5rem 1rem 6rem", position: "relative" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ maxWidth: "38rem", margin: "0 auto", textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--color-brand)", marginBottom: "0.75rem",
          }}>
            Fonctionnalites
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Tout ce dont vous avez besoin pour reussir
          </h2>
          <p style={{ color: "var(--color-muted)", lineHeight: 1.65, margin: 0 }}>
            Une plateforme complete — pas un autre annuaire de profils.
          </p>
        </div>

        {/* Bento grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1.25rem",
        }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="card"
              style={{
                gridColumn: f.span === "lg:col-span-3" ? "span 3" : "span 2",
                borderRadius: "1.5rem",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top shimmer on hover — CSS trick via ::before would need styled-components, skip */}
              <span style={{
                position: "absolute", top: "1.25rem", right: "1.5rem",
                fontSize: "3.5rem", fontWeight: 800, color: "rgba(255,255,255,0.03)",
                lineHeight: 1, pointerEvents: "none",
              }}>
                0{i + 1}
              </span>
              <div style={{
                marginBottom: "1.5rem",
                width: "3rem", height: "3rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "0.875rem",
                background: "linear-gradient(135deg, rgba(51,209,255,0.2), rgba(123,97,255,0.12))",
                color: "var(--color-brand-light)",
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.5rem", color: "var(--color-text)" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-muted)", margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="glass" style={{
          marginTop: "1.25rem",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}>
          {PRINCIPLES.map((p, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "1rem" }}>
              <span style={{
                position: "absolute", left: 0, top: "0.25rem",
                bottom: "0.25rem", width: "2px", borderRadius: "9999px",
                background: "linear-gradient(to bottom, var(--color-brand), var(--color-accent))",
              }} />
              <h3 style={{ fontWeight: 700, color: "var(--color-text)", margin: "0 0 0.35rem", fontSize: "0.95rem" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--color-muted)", margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
