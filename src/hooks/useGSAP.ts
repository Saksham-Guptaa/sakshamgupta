import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in animation
      gsap.fromTo(
        ".gsap-fade-in",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".gsap-fade-in",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Scale in animation
      gsap.fromTo(
        ".gsap-scale-in",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".gsap-scale-in",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Slide in from left
      gsap.fromTo(
        ".gsap-slide-left",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".gsap-slide-left",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Slide in from right
      gsap.fromTo(
        ".gsap-slide-right",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".gsap-slide-right",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger text animation
      gsap.fromTo(
        ".gsap-text-reveal",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".gsap-text-reveal",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Rotate in animation
      gsap.fromTo(
        ".gsap-rotate-in",
        { rotation: -10, scale: 0.8, opacity: 0 },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".gsap-rotate-in",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Progress bar animation
      gsap.fromTo(
        ".gsap-progress",
        { width: "0%" },
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-progress",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation
      gsap.to(".gsap-float", {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Glow effect
      gsap.to(".gsap-glow", {
        filter: "drop-shadow(0 0 20px hsl(var(--primary)))",
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};

export const useScrollTriggerAnimation = (trigger: string, animation: any) => {
  useEffect(() => {
    const fromProps = animation.from || {};
    const toProps = animation.to || {};
    const scrollTriggerProps = animation.scrollTrigger || {};

    gsap.fromTo(trigger, fromProps, {
      ...toProps,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none reverse",
        ...scrollTriggerProps,
      },
    });
  }, [trigger, animation]);
};