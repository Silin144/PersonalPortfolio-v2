import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Silin Gupta",
  description: "Silin Raj Gupta's resume.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-border">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          ← back
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <a
            href="/resume.pdf"
            download="Silin-Raj-Gupta-Resume.pdf"
            className="px-3 py-1.5 rounded-md bg-text-primary text-bg-primary hover:opacity-90 transition-opacity"
          >
            download pdf
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            open in new tab ↗
          </a>
        </div>
      </header>

      <main className="flex-1">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full h-[calc(100vh-49px)]"
          aria-label="Silin Raj Gupta resume"
        >
          <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
            <p className="text-text-secondary">
              Inline PDF preview isn&apos;t supported on this browser.
            </p>
            <a
              href="/resume.pdf"
              download="Silin-Raj-Gupta-Resume.pdf"
              className="px-3 py-1.5 rounded-md bg-text-primary text-bg-primary"
            >
              download pdf
            </a>
          </div>
        </object>
      </main>
    </div>
  );
}
