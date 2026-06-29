import { useState } from "react";
import { joinWaitlist } from "@/lib/waitlist";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const result = await joinWaitlist(email);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.error);
    }
  }

  if (status === "success") {
    return (
      <div
        className="glass animate-fade-up"
        style={{
          maxWidth: "28rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          borderRadius: "1rem",
          padding: "1rem 1.25rem",
          textAlign: "left",
        }}
      >
        <span style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: "2.5rem", height: "2.5rem", borderRadius: "9999px", flexShrink: 0,
          background: "linear-gradient(135deg, #33d1ff, #7b61ff)",
        }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2.5">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <div>
          <p style={{ fontWeight: 700, color: "var(--color-text)", margin: 0, fontSize: "0.95rem" }}>
            Acces reserve !
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", margin: "0.15rem 0 0" }}>
            Nous vous contacterons en priorite au lancement.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "30rem", margin: "0 auto", width: "100%" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
      >
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: 1, minWidth: "0" }}>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="votre@email.com"
              required
              className="glass"
              style={{
                height: "3rem",
                width: "100%",
                borderRadius: "9999px",
                padding: "0 1.25rem",
                fontSize: "0.9rem",
                color: "var(--color-text)",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = "rgba(51,209,255,0.45)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(51,209,255,0.15)";
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary"
            style={{
              height: "3rem",
              borderRadius: "9999px",
              padding: "0 1.5rem",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            {status === "loading" ? (
              <>
                <svg style={{ animation: "spin 1s linear infinite", width: "1rem", height: "1rem" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </>
            ) : (
              <>
                Rejoindre la liste
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div>

        <p
          style={{
            margin: "0.15rem 0 0 0.5rem",
            fontSize: "0.8rem",
            minHeight: "1.2em",
            color: status === "error" ? "#ff6b6b" : "var(--color-muted)",
            transition: "color 0.2s",
          }}
        >
          {status === "error" ? message : "Pas de spam. Acces prioritaire garanti."}
        </p>
      </form>
    </div>
  );
}
