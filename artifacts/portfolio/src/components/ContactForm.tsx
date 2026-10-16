import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mvznnnva";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  "Free homepage preview",
  "Local business website",
  "Google Business Profile setup",
  "Business Website",
  "Landing Page",
  "Full-Stack App",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setForm({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
        const errMsg = data.errors
          ? data.errors.map((err: { message: string }) => err.message).join(". ")
          : "Something went wrong. Please try again.";
        setErrorMessage(errMsg);
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none transition-all duration-200 contact-input";

  return (
    <div
      className="w-full p-7 md:p-8 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center gap-4"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "rgba(232,160,32,0.12)" }}>
              <CheckCircle2 className="w-8 h-8" style={{ color: "hsl(36,88%,52%)" }} />
            </div>
            <h4 className="font-display font-bold text-xl text-white">Message Sent!</h4>
            <p className="font-sans text-white/45 max-w-xs text-sm">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 font-sans text-sm text-white/50 hover:text-white/80 transition-colors underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
            data-testid="contact-form"
          >
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="font-sans text-xs font-medium text-white/55 uppercase tracking-wide">
                  Name <span style={{ color: "hsl(36,88%,52%)" }}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputBase}
                  data-testid="input-name"
                  disabled={status === "loading"}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="font-sans text-xs font-medium text-white/55 uppercase tracking-wide">
                  Email <span style={{ color: "hsl(36,88%,52%)" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputBase}
                  data-testid="input-email"
                  disabled={status === "loading"}
                />
              </div>
            </div>

            {/* Project Type dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="projectType" className="font-sans text-xs font-medium text-white/55 uppercase tracking-wide">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className={`${inputBase} contact-select`}
                data-testid="input-project-type"
                disabled={status === "loading"}
              >
                <option value="" disabled>Select a project type…</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Message textarea */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="font-sans text-xs font-medium text-white/55 uppercase tracking-wide">
                Message <span style={{ color: "hsl(36,88%,52%)" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or idea…"
                value={form.message}
                onChange={handleChange}
                className={`${inputBase} resize-none`}
                data-testid="input-message"
                disabled={status === "loading"}
              />
            </div>

            {/* Error */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-3 p-4 rounded-xl text-sm"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    color: "#f87171",
                  }}
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gold submit button */}
            <button
              type="submit"
              disabled={status === "loading"}
              data-testid="button-submit"
              className="contact-submit-btn w-full h-12 rounded-full font-sans font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message →"
              )}
            </button>

            {/* Reply note */}
            <p className="font-sans text-center text-white/35 text-xs">
              I typically reply within 24 hours
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
