import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";

const roles = [
  "Computer Science Student",
  "UI/UX Designer",
  "Creative Developer",
  "Web Designer",
  "Problem Solver",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* Aurora + grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-aurora" />
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* Floating blobs */}
      <div className="absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute -right-32 bottom-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:-9s]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities · Coimbatore, IN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block">Nivas</span>
            <span className="block text-gradient">Thanga Ganapathy</span>
          </motion.h1>

          <div className="mt-6 flex items-center gap-3 text-lg sm:text-xl">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">I am a</span>
            <div className="relative h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={i}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="block bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold text-transparent"
                >
                  {roles[i]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Computer Science student crafting AI-era digital experiences — clean interfaces,
            considered motion, and pixel-tight execution that users actually feel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://late-jade-ueta8tsd.edgeone.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:bg-secondary"
            >
              View Resume
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              ["6.56", "CGPA"],
              ["3+", "Projects"],
              ["2+", "Internship"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-gradient">{n}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile square */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mx-auto h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem]"
        >
          {/* outer frames */}
          <div className="absolute inset-0 rounded-[2rem] border border-primary/30" />
          <motion.div
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 rounded-[1.75rem] border border-accent/30"
          />
          <div className="absolute inset-0 -z-10 rounded-[2.25rem] bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 blur-2xl" />
          {/* corner accents */}
          <span className="absolute -left-1 -top-1 h-6 w-6 rounded-tl-2xl border-l-2 border-t-2 border-primary" />
          <span className="absolute -right-1 -top-1 h-6 w-6 rounded-tr-2xl border-r-2 border-t-2 border-accent" />
          <span className="absolute -bottom-1 -left-1 h-6 w-6 rounded-bl-2xl border-b-2 border-l-2 border-accent" />
          <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-primary" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-8 overflow-hidden rounded-3xl border border-border bg-secondary shadow-elegant"
          >
            <img src={profile} alt="Nivas Thanga Ganapathy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </motion.div>

          {/* floating tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-10 rounded-2xl glass px-3 py-2 text-xs font-medium shadow-elegant"
          >
            🎨 Figma
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-32 rounded-2xl glass px-3 py-2 text-xs font-medium shadow-elegant"
          >
            ⚡ React
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 rounded-2xl glass px-3 py-2 text-xs font-medium shadow-elegant"
          >
            ✨ UI/UX
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}