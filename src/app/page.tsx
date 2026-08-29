"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";

const SKILLS = [
  "Next.js",
  "Flutter",
  "TypeScript",
  "Test Automation",
  "AI Engineering (learning)",
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

function Avatar() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative h-44 w-44 overflow-hidden rounded-full ring-4 ring-blue-950/10 dark:ring-blue-400/20">
      {!imgError ? (
        <Image
          src="/profile.jpg"
          alt="Samet Arslan"
          fill
          sizes="176px"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-blue-950 text-4xl font-semibold text-white">
          SA
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-1 flex-col items-center px-6 py-20 text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.div variants={item}>
          <Avatar />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          Samet Arslan
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 text-xl font-medium text-blue-950 dark:text-blue-400"
        >
          Software Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
        >
          I&apos;m a Software Engineer based in Istanbul. I graduated from
          Istanbul Sabahattin Zaim University&apos;s Software Engineering
          program in 2024, and for about 1.5 years I&apos;ve worked as a Test
          &amp; Analysis Engineer at a technology company. Lately I&apos;ve
          been diving into AI engineering, sharpening my skills through
          various courses, and building a few app ideas on the side — often
          reaching for Next.js and Flutter along the way.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap justify-center gap-2.5"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-950/15 px-4 py-1.5 text-sm font-medium text-blue-950 dark:border-blue-400/30 dark:text-blue-400"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="rounded-md bg-blue-950 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-blue-900"
          >
            View My Projects
          </Link>
          <a
            href="/cv.pdf"
            download
            className="rounded-md border border-blue-950/20 px-7 py-3.5 text-base font-medium text-blue-950 transition-colors hover:bg-blue-950/5 dark:border-blue-400/30 dark:text-blue-400 dark:hover:bg-blue-400/10"
          >
            Download CV
          </a>
          <a
            href="https://github.com/sametarslan7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-blue-950/20 px-7 py-3.5 text-base font-medium text-blue-950 transition-colors hover:bg-blue-950/5 dark:border-blue-400/30 dark:text-blue-400 dark:hover:bg-blue-400/10"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
