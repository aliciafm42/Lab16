// app/layout.js
import Link from "next/link";

export const metadata = {
  title: "Profile Directory",
  description: "Browse and learn about our members.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2025 Alicia Martinez</p>
        </footer>
      </body>
    </html>
  );
}
