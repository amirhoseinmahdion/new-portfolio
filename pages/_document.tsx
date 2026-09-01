import { Head, Html, Main, NextScript } from "next/document";

const themeScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", savedTheme ? savedTheme === "dark" : prefersDark);
    } catch (_) {}
  })();
`;

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
