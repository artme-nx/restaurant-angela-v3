"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealInit() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // .reveal is already visible by CSS default — nothing to do.

    const ctx = gsap.context(() => {
      // Progressive enhancement: content is visible by CSS default (.reveal
      // has opacity:1 in globals.css). gsap.fromTo animates FROM a hidden
      // state INTO the visible resting state, so a visitor with slow or
      // blocked JS still sees the page instead of a permanently blank one.
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            delay: (i % 3) * 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".reveal-rotate").forEach((el) => {
        const targetRotate = el.dataset.rotate ? parseFloat(el.dataset.rotate) : -2;
        gsap.fromTo(
          el,
          { opacity: 0, y: 34, rotate: 0 },
          {
            opacity: 1,
            y: 0,
            rotate: targetRotate,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
