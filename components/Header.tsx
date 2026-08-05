"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Close, Menu, Phone } from "./icons";

const navLinks = [
  { id: "home", label: "Home", href: "#" },
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = navLinks
      .filter((link) => link.href !== "#")
      .map((link) => link.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const offset = 120;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`flex h-20 items-center justify-between px-6 transition-colors duration-300 md:px-12 lg:px-20 ${
          scrolled
            ? "border-b border-border-tint bg-white/90 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a href="#" className="flex items-center gap-2" aria-label="Drip Perfect Pasig home">
          <Image
            src="/images/Logo/drip-perfect.webp"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-auto"
          />
          <span className="font-serif text-2xl font-bold text-plum">
            Drip Perfect Pasig
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "border-b-2 border-plum pb-1 text-sm font-medium text-plum"
                    : "text-sm font-medium text-plum hover:text-pink-deep"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="tel:+639671730781"
            className="hidden items-center gap-2 text-sm font-semibold text-plum transition-colors hover:text-rose-deep lg:flex"
          >
            <Phone className="h-4 w-4 text-rose-deep" />
            0967 173 0781
          </a>
          <a
            href="#contact"
            className="hidden h-11 items-center rounded-full bg-plum px-5 text-sm font-semibold text-white transition-colors hover:bg-[#381b2b] md:flex"
          >
            Book Now
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
            className="-mr-2 rounded-lg p-2.5 text-plum transition-colors hover:bg-plum/5 md:hidden"
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-plum/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-border-tint px-6">
          <a
            href="#"
            aria-label="Drip Perfect Pasig home"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/Logo/drip-perfect.webp"
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-auto"
            />
            <span className="font-serif text-2xl font-bold text-plum">
              Drip Perfect Pasig
            </span>
          </a>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="-mr-2 rounded-lg p-2.5 text-plum transition-colors hover:bg-plum/5"
          >
            <Close className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-1 flex-col px-4 py-4">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={`flex min-h-12 items-center rounded-xl px-4 text-[15px] font-medium transition-colors hover:bg-blush hover:text-pink-deep ${
                  isActive
                    ? "bg-blush font-semibold text-rose-deep"
                    : "text-plum"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="border-t border-border-tint p-4">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex h-12 w-full items-center justify-center rounded-full bg-plum text-sm font-semibold text-white transition-colors hover:bg-[#381b2b]"
          >
            Book Now
          </a>
          <a
            href="tel:+639671730781"
            className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border-tint text-sm font-semibold text-plum transition-colors hover:border-pink-deep hover:text-pink-deep"
          >
            <Phone className="h-4 w-4 text-rose-deep" />
            0967 173 0781
          </a>
        </div>
      </nav>
    </header>
  );
}