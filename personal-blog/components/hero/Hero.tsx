"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      gsap.fromTo(
        ".hero-reveal",
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "opacity,visibility",
        }
      );

      if (avatarRef.current) {
        gsap.to(avatarRef.current, {
          y: -10,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md">
      <div className="hero-blob hero-blob--1" aria-hidden />
      <div className="hero-blob hero-blob--2" aria-hidden />
      <div className="hero-grid" aria-hidden />

      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="w-full md:w-3/5">
          <p className="hero-reveal text-xs tracking-widest uppercase text-slate-600 dark:text-slate-300">
            Portfolio • Projects • Resume
          </p>

          <h1 className="hero-reveal mt-3 text-3xl sm:text-4xl font-bold leading-tight">
            Olle Mineur
            <span className="block mt-2 text-base sm:text-lg font-normal text-slate-700 dark:text-slate-200">
              Computer Science & Engineering student with an interest in Embedded and Security. Building web apps in the free time.
            </span>
          </h1>

          <div className="hero-reveal mt-6 flex flex-wrap gap-3">
            <Link
              href="/resume"
              className="rounded-xl px-4 py-2 font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition"
            >
              View resume
            </Link>
            <Link
              href="/projects"
              className="rounded-xl px-4 py-2 font-semibold border border-slate-300/70 dark:border-slate-600/70 hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition"
            >
              See projects
            </Link>
            <Link
              href="https://github.com/Olle-Mineur"
              className="rounded-xl px-4 py-2 font-semibold text-slate-700 dark:text-slate-200 hover:underline underline-offset-4"
            >
              GitHub
            </Link>
          </div>

          <p className="hero-reveal mt-6 text-sm text-slate-600 dark:text-slate-300">
            Tip: drag cards on the resume page for a more playful feel.
          </p>
        </div>

        <div ref={avatarRef} className="hero-reveal w-full md:w-2/5 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-70 hero-avatar-glow" aria-hidden />
            <Image
              className="relative rounded-full border border-slate-200/70 dark:border-slate-700/60 shadow-xl"
              src="/profile_picture.jpg"
              alt="Picture of Olle Mineur"
              width={240}
              height={240}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}