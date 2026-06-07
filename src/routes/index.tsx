import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Spotlight } from "@/components/portfolio/Spotlight";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills, Projects, Timeline, Achievements, Contact, Footer } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nivas Thanga Ganapathy — AI-era Designer & Developer" },
      { name: "description", content: "Portfolio of Nivas Thanga Ganapathy — CS student, UI/UX designer and web designer crafting AI-era digital experiences." },
      { property: "og:title", content: "Nivas Thanga Ganapathy — Portfolio" },
      { property: "og:description", content: "Cinematic, motion-rich portfolio by Nivas Thanga Ganapathy." },
      { name: "theme-color", content: "#0b0a14" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
        <Spotlight />
        <CustomCursor />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
