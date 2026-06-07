import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Code2,
  Figma,
  Layers,
  Palette,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  ArrowUpRight,
  Send,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {kicker}
      </div>
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {title.split("|").map((p, idx) =>
          idx % 2 ? (
            <span key={idx} className="text-gradient">
              {p}
            </span>
          ) : (
            <span key={idx}>{p}</span>
          ),
        )}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle kicker="About" title="Designing the |intersection| of code and craft" />
        <div className="grid gap-6 md:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass rounded-3xl p-8 md:col-span-7"
          >
            <h3 className="text-2xl font-semibold">Hello — I'm Nivas 👋</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A Computer Science undergrad at Karpagam Academy of Higher Education,
              based between Virudhunagar and Coimbatore. I design and build interfaces
              that feel quiet, fast and a little futuristic — with a strong bias toward
              motion, typography and clarity.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              My current obsession is the new wave of AI-era product design: tools
              that feel intelligent without being noisy. I work across Figma, the
              web stack and a growing toolbox of generative workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Curious", "Detail-driven", "Motion-led", "AI-native"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid gap-4 md:col-span-5"
          >
            <div className="glass rounded-3xl p-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">Education</div>
              <div className="mt-1 font-semibold">B.Sc Computer Science</div>
              <div className="text-sm text-muted-foreground">Karpagam Academy of Higher Education · CGPA 6.56</div>
            </div>
            <div className="glass rounded-3xl p-6">
              <MapPin className="h-5 w-5 text-accent" />
              <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">Based in</div>
              <div className="mt-1 font-semibold">Virudhunagar / Coimbatore</div>
              <div className="text-sm text-muted-foreground">Tamil Nadu, India</div>
            </div>
            <div className="glass rounded-3xl p-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">Philosophy</div>
              <div className="mt-1 font-semibold">Quiet interfaces, loud ideas</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
const skillGroups = [
  {
    icon: Palette,
    title: "Design",
    items: ["UI/UX", "Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  },
  {
    icon: Figma,
    title: "Tools",
    items: ["Figma", "Canva", "Photoshop", "VS Code", "Notion"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle kicker="Skills" title="A toolkit |built for the AI era|" />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border glass p-8 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <g.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{g.title}</h3>
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center justify-between border-b border-border/60 pb-2 text-sm">
                    <span>{it}</span>
                    <Layers className="h-3.5 w-3.5 text-muted-foreground/60" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
const projects = [
  {
    title: "AI Era Portfolio",
    tag: "Web Design",
    desc: "Cinematic, theme-switching portfolio with motion-rich micro-interactions.",
    tech: ["React", "Tailwind", "Motion"],
    grad: "from-violet-500/40 via-fuchsia-500/30 to-blue-500/40",
  },
  {
    title: "Poster Design Collection",
    tag: "Visual Design",
    desc: "A series of bold typographic posters exploring color theory and grids.",
    tech: ["Photoshop", "Canva"],
    grad: "from-amber-500/40 via-rose-500/30 to-pink-500/40",
  },
  {
    title: "Mobile App UI Concept",
    tag: "UI/UX",
    desc: "Minimal fintech concept with playful onboarding and quiet dashboards.",
    tech: ["Figma", "Prototyping"],
    grad: "from-emerald-500/40 via-teal-500/30 to-cyan-500/40",
  },
  {
    title: "Internship Design Works",
    tag: "Case Study",
    desc: "Selected screens shipped during my internship — handoff to live UI.",
    tech: ["Figma", "HTML", "CSS"],
    grad: "from-indigo-500/40 via-sky-500/30 to-blue-500/40",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle kicker="Selected Work" title="Things I've |designed & shipped|" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.a
              href="#"
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative block overflow-hidden rounded-3xl border border-border glass p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
              data-cursor="hover"
            >
              <div className={`relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.grad}`}>
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-3xl font-bold tracking-tight text-foreground/90 drop-shadow">
                    {p.title}
                  </div>
                </div>
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/70 backdrop-blur transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.tag}</div>
                  <div className="mt-1 text-lg font-semibold">{p.title}</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TIMELINE ---------- */
const timeline = [
  {
    icon: GraduationCap,
    year: "2023 — Present",
    title: "B.Sc Computer Science",
    org: "Karpagam Academy of Higher Education",
    desc: "Foundations in CS with a focus on web, interfaces and applied AI.",
  },
  {
    icon: Briefcase,
    year: "2024",
    title: "Design Internship",
    org: "Studio · Coimbatore",
    desc: "UI design, poster systems and front-end handoff for live projects.",
  },
  {
    icon: Palette,
    year: "2024",
    title: "Poster & Brand Sprints",
    org: "Independent",
    desc: "A run of typographic posters exploring color, rhythm and grids.",
  },
  {
    icon: Code2,
    year: "2025",
    title: "Web & UI Projects",
    org: "Personal",
    desc: "Shipped portfolio, motion-rich landing pages and app concepts.",
  },
];

export function Timeline() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle kicker="Experience" title="A short |timeline|" />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          {timeline.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: idx % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative mb-10 grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-2 md:gap-12 ${
                idx % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className={`hidden md:block ${idx % 2 ? "text-left" : "text-right"}`} />
              <div className="relative">
                <span className="absolute -left-[1.65rem] top-3 grid h-7 w-7 place-items-center rounded-full border border-border bg-background shadow-glow md:left-auto md:right-full md:mr-[-0.875rem]">
                  <t.icon className="h-3.5 w-3.5 text-primary" />
                </span>
                <div className="glass rounded-2xl p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.year}</div>
                  <div className="mt-1 text-lg font-semibold">{t.title}</div>
                  <div className="text-sm text-primary">{t.org}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ACHIEVEMENTS / COUNTERS ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let raf = 0;
    const obs = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Achievements() {
  const stats = [
    { n: 12, s: "+", label: "Projects Completed" },
    { n: 30, s: "+", label: "Design Concepts" },
    { n: 800, s: "h", label: "Hours of Practice" },
    { n: 1, s: "+", label: "Internship" },
  ];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-10">
          <div className="absolute inset-0 -z-10 bg-aurora opacity-60" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <Award className="absolute right-6 top-6 h-6 w-6 text-primary/60" />
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const EMAILJS_SERVICE_ID = "service_ny8kkxb";
  const EMAILJS_TEMPLATE_ID = "template_u0zd936";
  const EMAILJS_PUBLIC_KEY = "bhcVOarD5QR94ejVA";

  const onChange = (id: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [id]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();
    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (name.length > 100 || subject.length > 150 || message.length > 2000) {
      toast.error("Input is too long");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
          to_name: "Nivas",
          reply_to: email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
      toast.success("Message sent — I'll get back to you soon!");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      toast.error(err?.text || "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Contact"
          title="Let's |build something| together"
          sub="Open to internships, freelance UI work and collaborations."
        />
        <div className="grid gap-6 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            {[
              { icon: Mail, label: "Email", value: "nivas@example.com" },
              { icon: MapPin, label: "Location", value: "Coimbatore, India" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/nivas" },
              { icon: Github, label: "GitHub", value: "/nivas" },
            ].map((c) => (
              <div key={c.label} className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <c.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass relative overflow-hidden rounded-3xl p-8 md:col-span-3"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="grid gap-5">
              {[
                { id: "name", label: "Your name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map((f) => (
                <div key={f.id} className="group relative">
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    placeholder=" "
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => onChange(f.id as keyof typeof form, e.target.value)}
                    className="peer h-12 w-full rounded-xl border border-border bg-secondary/40 px-4 pt-4 text-sm outline-none transition-all focus:border-primary focus:bg-secondary/70"
                  />
                  <label
                    htmlFor={f.id}
                    className="pointer-events-none absolute left-4 top-3.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    {f.label}
                  </label>
                </div>
              ))}
              <div className="group relative">
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder=" "
                  value={form.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  className="peer w-full rounded-xl border border-border bg-secondary/40 px-4 pb-2 pt-5 text-sm outline-none transition-all focus:border-primary focus:bg-secondary/70"
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-4 top-3.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? "Sending..." : sent ? "Message sent ✓" : (<>Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">N</span>
          <span className="font-semibold">Nivas Thanga Ganapathy</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="#" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Crafted with care.
        </div>
      </div>
    </footer>
  );
}