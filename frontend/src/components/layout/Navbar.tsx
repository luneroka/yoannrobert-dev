import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import type { Content } from "@/i18n";

type NavLink = {
  key: keyof Content["nav"];
  href: string;
};

const navLinks: NavLink[] = [
  { key: "home", href: "#top" },
  { key: "explorer", href: "#explorer" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "contact" },
];

function scrollToSection(href: string) {
  const element = document.querySelector(href);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const { copy, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(href: string) {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: href });
      window.setTimeout(() => scrollToSection(href), 100);
      return;
    }

    scrollToSection(href);
  }

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <motion.nav
      initial={{ y: -96 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-smooth ${
        isScrolled
          ? "border-border bg-background/85 shadow-soft backdrop-blur-lg"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
      <span
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />

      <div className="container flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground transition-smooth hover:bg-muted md:hidden"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          <motion.a
            href="/"
            onClick={handleLogoClick}
            className="cursor-pointer font-heading text-xl font-bold text-foreground transition-smooth hover:text-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <img
              src="/profile/avatar.png"
              alt="Yoann Robert"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-border"
            />
          </motion.a>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.key}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="group relative cursor-pointer border-0 bg-transparent p-0 font-body text-sm font-medium text-foreground/80 transition-smooth hover:text-primary"
            >
              {copy.nav[link.key]}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-full px-3 font-body text-sm font-semibold text-foreground transition-smooth hover:bg-muted"
            aria-label={`Switch language to ${locale === "fr" ? "English" : "French"}`}
          >
            {locale === "fr" ? "🇺🇸" : "🇫🇷"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground transition-smooth hover:bg-muted"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Sun className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 -z-10 cursor-default bg-foreground/20 backdrop-blur-sm md:hidden"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed left-0 top-0 z-50 flex h-dvh w-72 flex-col border-r border-border bg-background p-5 shadow-large md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-heading text-xl font-bold text-foreground">YR</span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground transition-smooth hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <button
                    key={link.key}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="cursor-pointer border-0 bg-transparent p-0 text-left font-body text-lg font-medium text-foreground/80 transition-smooth hover:text-primary"
                  >
                    {copy.nav[link.key]}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
