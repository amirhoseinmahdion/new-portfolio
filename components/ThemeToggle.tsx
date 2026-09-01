import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/70 bg-surface/60 text-lg text-textLight transition hover:-translate-y-0.5 hover:border-textGreen/50 hover:text-textGreen focus:outline-none focus:ring-2 focus:ring-textGreen focus:ring-offset-2 focus:ring-offset-bodyColor"
      aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={mounted && isDark ? "Light mode" : "Dark mode"}
    >
      {mounted && isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
};

export default ThemeToggle;
