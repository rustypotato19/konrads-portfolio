import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import PageContainer from "../../components/PageContainer";
import { validateEmailFormat } from "../../utils/regex";
import { ArrowBigLeftDashIcon } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const formVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMEssage] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setStatus("sending");

    if (!validateEmailFormat(form.email)) {
      setStatus("error");
      setStatusMEssage("Invalid Email.");
      return;
    }

    const response = await fetch("https://aboutkonrad.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("sent");
      setStatusMEssage(null);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2000);
    } else {
      setStatus("idle");
    }
  }

  return (
    <PageContainer>
      <motion.div
        className="max-w-8xl w-fit mx-auto px-6 py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.header className="mb-16 flex flex-col" variants={itemVariants}>
          <div className="flex gap-3 sm:gap-5 max-w-fit items-center">
            <a
              href="/"
              className="
                w-10 h-10
                flex items-center justify-center
                text-(--s-h-green)
                hover:text-(--s-green)
                hover:scale-110
                transition-all duration-150
              "
              aria-label="Go back to homepage"
            >
              <ArrowBigLeftDashIcon className="w-8 h-8 sm:w-12 sm:h-12 relative top-1.5" />
            </a>

            <h1 className="text-4xl sm:text-5xl font-semibold text-(--s-h-green) lowercase">
              contact
            </h1>
          </div>

          <p className="mt-4 max-w-xl text-(--s-green)/80 lowercase leading-relaxed">
            open to collaboration, freelance work, internships, or interesting
            technical discussions. feel free to reach out!
          </p>
        </motion.header>

        <div className="grid md:grid-cols-3 gap-12 mb-6 w-full">
          {/* Direct Contact */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl text-(--s-h-green) lowercase mb-6 font-bold">
              direct
            </h2>

            <motion.div
              className="space-y-4 text-(--s-green)/80 lowercase"
              variants={formVariants}
            >
              <motion.p variants={itemVariants}>
                email:{" "}
                <a
                  href="mailto:konradmitura8@gmail.com"
                  className="
                    text-(--s-h-green)
                    hover:text-(--t-h-green)
                    transition
                  "
                  aria-label="Link to email Konrad"
                >
                  konradmitura8@gmail.com
                </a>
              </motion.p>

              <motion.p variants={itemVariants}>
                phone:{" "}
                <span className="text-(--s-h-green)">+44 7365 485090</span>
              </motion.p>

              <motion.p variants={itemVariants}>
                github:{" "}
                <a
                  href="https://github.com/rustypotato19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-(--s-h-green)
                    hover:text-(--t-h-green)
                    transition
                  "
                  aria-label="Link to Konrad's GitHub profile"
                >
                  github.com/rustypotato19
                </a>
              </motion.p>

              <motion.p variants={itemVariants}>
                linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/konrad-mitura-3961451b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-(--s-h-green)
                    hover:text-(--t-h-green)
                    transition
                  "
                  aria-label="Link to Konrad's LinkedIn profile"
                >
                  Konrad Mitura
                </a>
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Contact Form */}
          <motion.section className="col-span-2" variants={itemVariants}>
            <h2 className="text-xl text-(--s-h-green) lowercase mb-6 font-bold">
              message
            </h2>

            <motion.form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="space-y-6"
              variants={formVariants}
            >
              <motion.div variants={itemVariants}>
                <Input
                  label="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-2"
                variants={itemVariants}
              >
                <Input
                  label="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <p className="text-(--t-h-green)/40 text-xs">
                  * Please check that your email is correct, otherwise I will
                  not be able to contact you.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Textarea
                  label="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={
                    status === "idle"
                      ? {
                          scale: 1.01,
                        }
                      : undefined
                  }
                  whileTap={
                    status === "idle"
                      ? {
                          scale: 0.98,
                        }
                      : undefined
                  }
                  transition={{ duration: 0.15 }}
                  className="
                    w-full rounded-xl
                    bg-(--s-h-green)
                    px-4 py-3
                    font-semibold
                    text-(--p-green)
                    shadow-lg shadow-(--s-green)/30
                    transition
                    hover:bg-(--t-h-green)
                    hover:shadow-(--s-h-green)/50
                    hover:cursor-pointer
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  {status === "error"
                    ? statusMessage
                    : status === "sending"
                      ? "sending..."
                      : status === "sent"
                        ? "message sent ✓"
                        : "send message"}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.section>
        </div>

        {/* Footer */}
        <motion.footer
          className="
            pt-16
            border-t border-(--s-green)/20
            text-sm text-(--t-h-green)/60
            lowercase
          "
          variants={itemVariants}
        >
          © {new Date().getFullYear()} aboutkonrad.com
        </motion.footer>
      </motion.div>
    </PageContainer>
  );
}

/* ---------- Components ---------- */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-(--s-h-green)/70 lowercase mb-2">
        {label}
      </label>

      <input
        {...props}
        required
        className="
          rounded-xl
          border border-(--s-green)/20
          bg-(--p-green)/50
          px-4 py-3
          text-(--t-h-green)
          lowercase
          focus:outline-none
          focus:border-(--s-h-green)
          focus:ring-1
          focus:ring-(--s-h-green)
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
      <label className="text-sm text-(--s-h-green)/70 lowercase mb-2">
        {label}
      </label>

      <textarea
        {...props}
        required
        rows={5}
        className="
          rounded-xl
          border border-(--s-green)/20
          bg-(--p-green)/50
          px-4 py-3
          text-(--t-h-green)
          lowercase
          resize-none
          focus:outline-none
          focus:border-(--s-h-green)
          focus:ring-1
          focus:ring-(--s-h-green)
        "
      />
    </div>
  );
}
