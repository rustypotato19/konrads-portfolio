import { useEffect, useState } from "react";

export default function Contact() {

  useEffect(() => {
    document.title = "Contact Konrad";
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("https://aboutkonrad.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2000);
    } else {
      setStatus("idle");
    }
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black via-[#020f05] to-[#001a0a] text-green-200">
      <a
        href="/"
        className="fixed top-4 left-4 bg-linear-to-br from-green-700 to-green-900 text-green-200 px-4 py-2 rounded-lg hover:from-green-900 hover:to-green-700 transition-all duration-200 hover:scale-[102%] font-bold hover:cursor-pointer"
      >
        Home
      </a>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-green-400 lowercase">
            contact
          </h1>

          <p className="mt-4 max-w-xl text-green-300/80 lowercase leading-relaxed">
            open to collaboration, freelance work, internships, or interesting
            technical discussions. feel free to reach out.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-6">
          {/* Direct Contact */}
          <section>
            <h2 className="text-xl text-green-400 lowercase mb-6">direct</h2>

            <div className="space-y-4 text-green-300/80 lowercase">
              <p>
                email:{" "}
                <a
                  href="mailto:konradmitura8@gmail.com"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  konradmitura8@gmail.com
                </a>
              </p>

              <p>
                phone: <span className="text-green-400">+44 7365 485090</span>
              </p>

              <p>
                github:{" "}
                <a
                  href="https://github.com/rustypotato19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  github.com/rustypotato19
                </a>
              </p>

              <p>
                linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/konrad-mitura-3961451b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  Konrad Mitura
                </a>
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-xl text-green-400 lowercase mb-6">message</h2>

            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
              <Input
                label="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              <Input
                label="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              <Textarea
                label="message"
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  w-full rounded-xl bg-green-500 px-4 py-3
                  font-semibold text-black
                  shadow-lg shadow-green-500/30
                  transition
                  hover:bg-green-400 hover:shadow-green-400/50 hover:cursor-pointer
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {status === "sending"
                  ? "sending..."
                  : status === "sent"
                    ? "message sent ✓"
                    : "send message"}
              </button>
            </form>
          </section>
        </div>

        <footer className="pt-16 border-t border-green-500/20 text-sm text-green-400/60 lowercase">
          © {new Date().getFullYear()} aboutkonrad.com
        </footer>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-green-400/70 lowercase mb-2">
        {label}
      </label>
      <input
        {...props}
        required
        className="
          rounded-xl border border-green-500/20 bg-black/50
          px-4 py-3 text-green-200 lowercase
          focus:outline-none focus:border-green-400
          focus:ring-1 focus:ring-green-400
        "
      />
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-green-400/70 lowercase mb-2">
        {label}
      </label>
      <textarea
        {...props}
        required
        rows={5}
        className="
          rounded-xl border border-green-500/20 bg-black/50
          px-4 py-3 text-green-200 lowercase resize-none
          focus:outline-none focus:border-green-400
          focus:ring-1 focus:ring-green-400
        "
      />
    </div>
  );
}
