import Image from "next/image";
import { BadgeCheck, Droplet, Leaf, Shield } from "./icons";

const points = [
  { icon: Shield, label: "Medical-grade drips & products" },
  { icon: BadgeCheck, label: "Licensed physicians, certified & trained" },
  { icon: Droplet, label: "Personalized treatment plans" },
  { icon: Leaf, label: "Clean, sterile & cozy clinic" },
];

const stats = [
  { value: "30–60 min", label: "Per Session" },
  { value: "100%", label: "Doctor-Supervised" },
  { value: "Sterile", label: "Medical-Grade Clinic" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-[60px] md:px-12 lg:px-20">
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-24 h-96 w-96 rounded-full bg-rose/20 blur-3xl"
      />

      <div className="relative grid items-start gap-10 lg:grid-cols-2">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-rose/30 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(74,36,56,0.12)] ring-1 ring-border-tint">
            <Image
              src="/images/about.jpg"
              alt="Inside Drip Perfect Pasig clinic"
              width={800}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold tracking-[1.5px] text-pink-deep uppercase">
            About Us
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,2.4vw,2.25rem)] leading-snug font-semibold text-plum">
            Strong Immunity Inside,{" "}
            <span className="italic text-rose-deep">Glowing Skin</span> Outside
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-muted">
            Welcome to Drip Perfect Pasig, an aesthetic and wellness clinic where we
            specialize in enhancing your beauty and promoting wellness with
            personalized care. From rejuvenating treatments to holistic
            therapies, our dedicated team is here to support your journey to a
            healthier, more vibrant you — a space where beauty meets wellness,
            helping you shine inside and out.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush text-rose-deep">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-plum">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 divide-x divide-border-tint border-t border-border-tint pt-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-4 first:pl-0 last:pr-0">
                <p className="font-serif text-2xl font-bold text-plum">
                  {value}
                </p>
                <p className="mt-0.5 text-[11px] text-muted">{label}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-plum px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#381b2b] hover:shadow-lg hover:shadow-plum/20"
          >
            Visit Our Clinic
          </a>
        </div>
      </div>
    </section>
  );
}
