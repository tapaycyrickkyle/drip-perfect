"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Service = {
  title: string;
  new?: boolean;
  image: string;
  description?: string;
  bullets?: string[];
};

const services: Service[] = [
  {
    title: "Gluta Drip",
    image: "/images/service-gluta.jpg",
    description:
      "Glutathione IV therapy that bypasses the gastrointestinal tract to deliver nutrients directly into the bloodstream.",
  },
  {
    title: "Face Treatment",
    image: "/images/service-face.jpg",
    description:
      "A set of facial skin care treatments to exfoliate, remove impurities, and clear away dead skin.",
    bullets: [
      "Basic/Full Facial",
      "Korean Carbon Laser",
      "Hydra Facial",
      "Diamond Peel",
      "RF Face",
      "HIFU Ulthera",
      "Korean BB Glow",
      "Exilis360",
      "Photodynamic Therapy",
      "CO2 Laser",
      "Melasma Treatment",
      "Skin Rejuvenation",
      "Thermage",
      "Microneedling",
    ],
  },
  {
    title: "Body Treatment",
    image: "/images/service-body.jpg",
    description:
      "Cleansing, exfoliating, and hydrating the entire body for a softer, smoother, and more relaxed appearance.",
    bullets: [
      "Meso Lipo",
      "Exilis",
      "Warts Removal",
      "Emsculpt",
      "Radio Frequency (RF)",
    ],
  },
  {
    title: "Botox",
    image: "/images/service-botox.jpg",
    description:
      "Botox temporarily halts muscle movement to smooth wrinkles and treat neck spasms, sweating, and lazy eyes.",
    bullets: [
      "Forehead",
      "Brow Lift",
      "Bunny Lines",
      "Frown Lines/Glabellar",
      "Crows Feet",
      "Jawtox",
      "Barbie Arms",
      "Sweatox",
      "Traptox",
    ],
  },
  {
    title: "Barbie Arms",
    new: true,
    image: "/images/service-barbie.jpg",
    description:
      "A non-surgical treatment that contours upper arm fat for a slimmer, more feminine look.",
  },
  {
    title: "Semi Permanent Makeup",
    image: "/images/service-microblading.jpg",
    description:
      "Enhances eyes, brows, and lips by injecting pigment into the superficial layers of the skin.",
    bullets: [
      "Microblading",
      "Microshading",
      "Microblading with Shading",
      "Eyeliner Tattoo",
      "Korean BB Glow",
      "Lip Blush",
    ],
  },
  {
    title: "Other Services",
    image: "/images/service-other.jpg",
    bullets: [
      "Wax (Legs/Underarm)",
      "Sweatox (Underarm)",
      "IPL Laser Hair Removal (Lips/Legs)",
      "Barbie Arms",
      "Traptox",
      "Botox (Face)",
    ],
  },
];

const VISIBLE_BULLETS = 4;

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selected && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      document.body.style.overflow = "hidden";
    } else if (!selected && dialogRef.current?.open) {
      dialogRef.current.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-[60px] md:px-12 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-rose/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blush blur-3xl"
      />

      <div className="relative mb-10 text-center">
        <p className="mb-3 text-xs font-bold tracking-[1.5px] text-pink-deep uppercase">
          Treatments &amp; Services
        </p>
        <h2 className="font-serif text-[clamp(1.75rem,2.4vw,2.25rem)] font-semibold text-plum">
          Our <span className="italic text-rose-deep">Services</span>
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col rounded-2xl border border-border-tint bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-pink-deep/50 hover:shadow-lg hover:shadow-rose/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {service.new && (
                <span className="absolute top-2 left-2 rounded-full bg-pink-deep px-2 py-0.5 text-[9px] font-bold tracking-wide text-white uppercase">
                  New
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col pt-4">
              <h3 className="text-[15px] font-bold text-plum">
                {service.title}
              </h3>
              {service.description && (
                <p className="mt-1.5 line-clamp-2 text-[12px] leading-[1.6] text-muted">
                  {service.description}
                </p>
              )}

              {service.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {service.bullets
                    .slice(0, VISIBLE_BULLETS)
                    .map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-[12px] text-plum"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-deep" />
                        {bullet}
                      </li>
                    ))}
                </ul>
              )}

              <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                <button
                  onClick={() => setSelected(service)}
                  className="-ml-2 rounded-lg px-2 py-1.5 text-xs font-semibold text-rose-deep transition-colors hover:text-plum"
                >
                  View Full Details
                </button>
                <a
                  href="#contact"
                  className="flex h-10 shrink-0 items-center rounded-full bg-plum px-4 text-xs font-semibold text-white transition-colors hover:bg-[#381b2b]"
                >
                  Book
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="relative mt-8 text-center text-[13px] text-muted">
        Prices vary per service —{" "}
        <a
          href="#contact"
          className="font-semibold text-plum transition-colors hover:text-rose-deep"
        >
          message or call us
        </a>{" "}
        for details.
      </p>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setSelected(null);
          }
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border-0 bg-white p-0 text-plum [&::backdrop]:bg-plum/40 [&::backdrop]:backdrop-blur-sm"
      >
        {selected && (
          <div className="max-h-[85vh] overflow-y-auto">
            <div className="relative">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 512px) 100vw, 512px"
                  className="object-cover"
                />
              </div>
              <button
                aria-label="Close details"
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-plum shadow-md transition-colors hover:bg-blush"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-serif text-2xl font-semibold text-plum">
                  {selected.title}
                </h3>
                {selected.new && (
                  <span className="rounded-full bg-pink-deep px-2 py-0.5 text-[9px] font-bold tracking-wide text-white uppercase">
                    New
                  </span>
                )}
              </div>

              {selected.description && (
                <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                  {selected.description}
                </p>
              )}

              {selected.bullets && (
                <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {selected.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-[13px] text-plum"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-deep" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href="#contact"
                onClick={() => setSelected(null)}
                className="mt-6 inline-flex h-11 items-center rounded-full bg-plum px-6 text-sm font-semibold text-white transition-colors hover:bg-[#381b2b]"
              >
                Book This Service
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}