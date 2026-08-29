"use client";

import { motion, type Variants } from "motion/react";

const CONTACTS = [
  {
    label: "Email",
    value: "sametarslan1129@gmail.com",
    href: "mailto:sametarslan1129@gmail.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 6.75c0-.828.672-1.5 1.5-1.5h16.5c.828 0 1.5.672 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Zm0 0 9.75 6.75 9.75-6.75"
      />
    ),
  },
  {
    label: "GitHub",
    value: "github.com/sametarslan7",
    href: "https://github.com/sametarslan7",
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19.5c-4.5 1.5-4.5-2.5-6-3m12 4.5v-3.4c0-.98.35-1.63.75-1.96-2.6-.3-5.35-1.3-5.35-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.12-3.13 0 0 .98-.32 3.2 1.2a11 11 0 0 1 5.8 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.63.24 2.83.12 3.13.75.82 1.2 1.87 1.2 3.15 0 4.51-2.76 5.5-5.38 5.79.43.37.8 1.1.8 2.22v3.3"
      />
    ),
  },
  {
    label: "Instagram",
    value: "@sametaarsllan",
    href: "https://instagram.com/sametaarsllan",
    external: true,
    icon: (
      <>
        <rect x={3} y={3} width={18} height={18} rx={5} strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"
        />
        <path strokeLinecap="round" strokeWidth={1.5} d="M17.5 6.5h.01" />
      </>
    ),
  },
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

export default function Contact() {
  return (
    <main className="mx-auto flex max-w-4xl flex-1 flex-col items-center px-6 py-20 text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={item}
          className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
        >
          Interested in working together, have a question about one of my
          projects, or just need some support? Reach out through any of the
          channels below — I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {CONTACTS.map(({ label, value, href, external, icon }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex flex-col items-center gap-3 rounded-lg border border-blue-950/15 px-6 py-8 transition-colors hover:bg-blue-950/5 dark:border-blue-400/30 dark:hover:bg-blue-400/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 text-blue-950 dark:text-blue-400"
              >
                {icon}
              </svg>
              <span className="text-base font-medium text-zinc-900 dark:text-white">
                {label}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {value}
              </span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
