import { type MouseEvent, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { useThemeStore } from "@/store/useThemeStore";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motionEase } from "@/lib/motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const { isDark, toggle } = useThemeStore();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const { style } = document.body;
    const previousOverflow = style.overflow;
    if (mobileOpen && isMobile) style.overflow = "hidden";
    return () => {
      style.overflow = previousOverflow;
    };
  }, [isMobile, mobileOpen]);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
      setMobileOpen(false);
      return;
    }

    const section = document.querySelector(href);
    if (!section) return;

    const navOffset = 86;
    const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: shouldReduceMotion ? "auto" : "smooth" });
    setMobileOpen(false);
  };

  const onNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <motion.header
      initial={{ y: shouldReduceMotion ? 0 : -100 }}
      animate={{ y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: motionEase }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobile || scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16">
        <a href="#" onClick={(e) => onNavClick(e, "#")} className="text-xl font-bold tracking-tight text-foreground">
          CC<span className="gradient-text">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => onNavClick(e, href)}
              className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                activeSection === href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {label}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="ml-2 border border-border/60 bg-card/70 text-foreground hover:bg-accent/70 hover:text-foreground"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="border border-border/60 bg-card/70 text-foreground hover:bg-accent/70 hover:text-foreground"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="relative grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-card/70 text-foreground transition-colors hover:bg-accent/60"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: motionEase }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="mx-auto flex w-full flex-col gap-1 px-4 py-3 sm:px-8 lg:px-12 xl:px-16">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => onNavClick(e, href)}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    activeSection === href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/70"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
