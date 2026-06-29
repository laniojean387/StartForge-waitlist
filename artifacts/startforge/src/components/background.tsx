export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div style={{ position: "absolute", inset: 0, backgroundColor: "var(--color-bg)" }} />
      <div className="grid-overlay" style={{ position: "absolute", inset: 0 }} />

      {/* Cyan blob — top center */}
      <div
        className="animate-aurora"
        style={{
          position: "absolute",
          top: "-10rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "560px",
          height: "560px",
          borderRadius: "9999px",
          opacity: 0.45,
          filter: "blur(130px)",
          background: "radial-gradient(circle, #33d1ff 0%, transparent 65%)",
        }}
      />
      {/* Purple blob — top left */}
      <div
        className="animate-aurora"
        style={{
          position: "absolute",
          top: "4rem",
          left: "-10rem",
          width: "460px",
          height: "460px",
          borderRadius: "9999px",
          opacity: 0.35,
          filter: "blur(130px)",
          animationDelay: "-8s",
          background: "radial-gradient(circle, #7b61ff 0%, transparent 65%)",
        }}
      />
      {/* Violet blob — top right */}
      <div
        className="animate-aurora"
        style={{
          position: "absolute",
          top: "6rem",
          right: "-10rem",
          width: "480px",
          height: "480px",
          borderRadius: "9999px",
          opacity: 0.28,
          filter: "blur(130px)",
          animationDelay: "-15s",
          background: "radial-gradient(circle, #a855f7 0%, transparent 65%)",
        }}
      />

      {/* Bottom fade to near-black */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          bottom: 0,
          height: "50%",
          alignSelf: "flex-end",
          background: "linear-gradient(to bottom, transparent, var(--color-bg))",
          marginTop: "auto",
        }}
      />

      {/* Film grain — premium texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          mixBlendMode: "soft-light",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
