"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string[];
  tech: string[];
  github: string | null;
  comingSoon?: boolean;
};

// TODO: replace with your real projects. The first entry (this site) is real;
// the two "Coming Soon" entries are placeholders for the app ideas mentioned
// in your bio — swap them out once those are ready to share.
const PROJECTS: Project[] = [
  {
    id: "portfolio-site",
    title: "This Portfolio Website",
    shortDescription:
      "The site you're looking at right now — built with Next.js and Motion.",
    description: [
      "Built with Next.js App Router, TypeScript, and Tailwind CSS.",
      "Animated page transitions and staggered entrances using Motion (Framer Motion).",
      "Fully responsive layout with light/dark mode support.",
      "Deployed on Vercel with automatic deployments on push to master.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    github: "https://github.com/sametarslan7/my-portfolio-claude",
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    shortDescription: "One of my personal app ideas — currently in progress.",
    description: [
      "This project is still being built.",
      "Details will be added here once it's ready to share.",
    ],
    tech: ["AI Engineering"],
    github: null,
    comingSoon: true,
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    shortDescription: "Another project in the works — check back later.",
    description: [
      "This project is still being built.",
      "Details will be added here once it's ready to share.",
    ],
    tech: ["Flutter"],
    github: null,
    comingSoon: true,
  },
];

const TECH_STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "Dart",
  "Test Automation",
  "AI Engineering",
  "Motion",
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function CardThumb({ title, comingSoon }: { title: string; comingSoon?: boolean }) {
  return (
    <div
      className={`flex h-40 w-full items-center justify-center rounded-lg ${
        comingSoon
          ? "border border-dashed border-blue-950/20 dark:border-blue-400/30"
          : "bg-gradient-to-br from-blue-950 to-blue-800"
      }`}
    >
      {comingSoon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-9 w-9 text-blue-950/30 dark:text-blue-400/40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      ) : (
        <span className="text-2xl font-semibold text-white/90">{title[0]}</span>
      )}
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19.5c-4.5 1.5-4.5-2.5-6-3m12 4.5v-3.4c0-.98.35-1.63.75-1.96-2.6-.3-5.35-1.3-5.35-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.12-3.13 0 0 .98-.32 3.2 1.2a11 11 0 0 1 5.8 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.63.24 2.83.12 3.13.75.82 1.2 1.87 1.2 3.15 0 4.51-2.76 5.5-5.38 5.79.43.37.8 1.1.8 2.22v3.3"
      />
    </svg>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <main className="mx-auto flex max-w-4xl flex-1 flex-col px-6 py-20">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1
          variants={item}
          className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          Projects
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
        >
          A selection of things I&apos;ve built. Click a card to see more
          details.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-2.5">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-950/15 px-4 py-1.5 text-sm font-medium text-blue-950 dark:border-blue-400/30 dark:text-blue-400"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              className={`group flex flex-col gap-4 rounded-lg border p-4 text-left transition-colors ${
                project.comingSoon
                  ? "border-blue-950/10 opacity-70 hover:opacity-100 dark:border-blue-400/20"
                  : "border-blue-950/10 hover:border-blue-950/30 hover:shadow-md dark:border-blue-400/20 dark:hover:border-blue-400/40"
              }`}
            >
              <div className="relative">
                <CardThumb title={project.title} comingSoon={project.comingSoon} />
                {project.comingSoon && (
                  <span className="absolute left-2 top-2 rounded-full bg-blue-950 px-2.5 py-1 text-xs font-medium text-white dark:bg-blue-400 dark:text-blue-950">
                    Coming Soon
                  </span>
                )}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-950/15 px-3 py-1 text-xs font-medium text-blue-950 dark:border-blue-400/30 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-blue-950 dark:text-blue-400">
                  <GithubIcon className="h-4 w-4" />
                  View on GitHub
                </div>
              )}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-xl border border-blue-950/10 bg-white p-6 shadow-xl dark:border-blue-400/20 dark:bg-zinc-900 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <CardThumb title={selected.title} comingSoon={selected.comingSoon} />

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {selected.title}
              </h2>

              <ul className="mt-4 space-y-2">
                {selected.description.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-950 dark:bg-blue-400" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-950/15 px-3 py-1 text-xs font-medium text-blue-950 dark:border-blue-400/30 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-900"
                >
                  <GithubIcon className="h-4 w-4" />
                  Visit on GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
