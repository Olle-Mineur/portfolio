"use client";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(Draggable);

let zCounter = 1;

export function CardGrid({ children }: { children: React.ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(gridRef);
      gsap.fromTo(
        q(".card"),
        { autoAlpha: 0, y: 18, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "opacity,visibility",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="cards flex flex-wrap flex-row m-4 my-2 gap-4">
      {children}
    </div>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    const flare = flareRef.current;
    if (!el || !flare) return;

    gsap.set(el, {
      willChange: "transform",
      transformOrigin: "50% 50%",
      x: 0,
      y: 0,
      rotation: 0,
    });

    gsap.set(flare, {
      opacity: 0,
      scale: 0.9,
      rotation: 0,
    });

    const rotateTo = gsap.quickTo(el, "rotation", {
      duration: 0.18,
      ease: "power3.out",
    });

    // manual velocity tracking (avoids this.getVelocity)
    let lastX = 0;
    let lastY = 0;
    let lastT = 0;
    let vX = 0;
    let vY = 0;

    const sampleVelocity = () => {
      const now = performance.now();
      const x = Number(gsap.getProperty(el, "x")) || 0;
      const y = Number(gsap.getProperty(el, "y")) || 0;

      if (lastT !== 0) {
        const dt = (now - lastT) / 1000;
        if (dt > 0) {
          vX = (x - lastX) / dt;
          vY = (y - lastY) / dt;
        }
      }

      lastX = x;
      lastY = y;
      lastT = now;
    };

    let throwTween: gsap.core.Tween | null = null;
    let draggable: Draggable | null = null;

    draggable = Draggable.create(el, {
      type: "x,y",
      bounds: el.parentElement ?? undefined,
      zIndexBoost: false,

      // less "snappy", more floaty
      edgeResistance: 0.35,
      dragResistance: 0.02,
      minimumMovement: 0,

      onPress() {
        zCounter += 1;
        gsap.set(el, { zIndex: zCounter });

        throwTween?.kill();
        throwTween = null;

        // reset velocity sampling baseline
        lastT = 0;
        lastX = Number(gsap.getProperty(el, "x")) || 0;
        lastY = Number(gsap.getProperty(el, "y")) || 0;
        vX = 0;
        vY = 0;

        gsap.to(el, { scale: 1.03, duration: 0.12, ease: "power2.out" });
      },

      onDrag() {
        sampleVelocity();
        rotateTo(gsap.utils.clamp(-10, 10, vX / 140));
      },

      onRelease() {
        sampleVelocity();
        rotateTo(0);

        gsap.to(el, { scale: 1, duration: 0.35, ease: "power3.out" });

        // ---- THROW / MOMENTUM ----
        const x = Number(gsap.getProperty(el, "x")) || 0;
        const y = Number(gsap.getProperty(el, "y")) || 0;

        // tune to taste
        const throwFactor = 0.22; // distance ≈ velocity * factor
        const maxThrow = 700;

        const dx = gsap.utils.clamp(-maxThrow, maxThrow, vX * throwFactor);
        const dy = gsap.utils.clamp(-maxThrow, maxThrow, vY * throwFactor);

        const minX = draggable?.minX ?? -Infinity;
        const maxX = draggable?.maxX ?? Infinity;
        const minY = draggable?.minY ?? -Infinity;
        const maxY = draggable?.maxY ?? Infinity;

        const targetX = gsap.utils.clamp(minX, maxX, x + dx);
        const targetY = gsap.utils.clamp(minY, maxY, y + dy);

        const speed = Math.hypot(vX, vY);
        const duration = gsap.utils.clamp(0.2, 1.2, speed / 1800);

        const hitBound = targetX !== x + dx || targetY !== y + dy;
        const ease = hitBound ? "bounce.out" : "power3.out";

        throwTween = gsap.to(el, {
          x: targetX,
          y: targetY,
          duration,
          ease,
          rotation: gsap.utils.clamp(-14, 14, vX / 90),
          onUpdate: () => {
            draggable?.update();
          },
          onComplete: () => {
            gsap.to(el, { rotation: 0, duration: 0.25, ease: "power2.out" });
          },
        });

        // ---- FLARE EFFECT ----
        const hue = gsap.utils.random(0, 360, 1);
        gsap.set(el, { "--flare-hue": hue } as any);

        gsap.killTweensOf(flare);
        gsap
          .timeline()
          .set(flare, { opacity: 0, scale: 0.9, rotation: 0 })
          .to(flare, {
            opacity: 0.9,
            scale: 1.05,
            rotation: 140,
            duration: 0.18,
            ease: "power2.out",
          })
          .to(
            flare,
            {
              opacity: 0,
              scale: 1.25,
              rotation: 360,
              duration: 0.45,
              ease: "power3.out",
            },
            0.05
          );
      },
    })[0];

    return () => {
      throwTween?.kill();
      draggable?.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={[
        "card relative isolate",
        "h-auto p-4 w-full sm:w-1/2 lg:w-1/3 flex-none overflow-hidden",
        "rounded-2xl sm:rounded-xl",
        "border border-slate-200/70 dark:border-slate-700/60",
        "bg-white/70 dark:bg-slate-800/50 backdrop-blur-md",
        "shadow-md hover:shadow-xl transition-shadow duration-200",
        "cursor-grab select-none",
      ].join(" ")}
    >
      {/* don't use negative z-index here; keep it behind via z-0 + content z-10 */}
      <div ref={flareRef} aria-hidden className="card-flare" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}