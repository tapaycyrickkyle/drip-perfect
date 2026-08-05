import { Calendar, Chat, Droplet, Sparkle } from "./icons";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book a Session",
    description:
      "Reserve your slot via call, Messenger, or WhatsApp — walk-ins welcome when slots allow.",
  },
  {
    icon: Chat,
    step: "02",
    title: "Doctor Consult",
    description:
      "A quick consult to match the right drip or face & body treatment for your goals.",
  },
  {
    icon: Droplet,
    step: "03",
    title: "Relax & Drip",
    description:
      "Recline comfortably while our licensed team administers your session, 30–60 minutes.",
  },
  {
    icon: Sparkle,
    step: "04",
    title: "Glow Inside & Out",
    description:
      "Walk out feeling refreshed — immunity up, skin glowing, energy restored.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-blush px-6 py-[60px] md:px-12 lg:px-20">
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-24 h-80 w-80 rounded-full bg-white/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-rose/25 blur-3xl"
      />

      <div className="relative mb-14 text-center">
        <p className="mb-3 text-xs font-bold tracking-[1.5px] text-pink-deep uppercase">
          Simple &amp; Relaxing
        </p>
        <h2 className="mb-2 font-serif text-[clamp(1.75rem,2.4vw,2.25rem)] font-semibold text-plum">
          How It Works
        </h2>
        <p className="text-sm text-muted">
          From booking to glow in four simple steps
        </p>
      </div>

      <ol className="relative mx-auto max-w-5xl lg:grid lg:grid-cols-4">
        <div
          aria-hidden="true"
          className="absolute top-5 bottom-8 left-[22px] w-px border-l-2 border-dashed border-rose/40 lg:top-[22px] lg:right-[calc(12.5%_-_1px)] lg:bottom-auto lg:left-[calc(12.5%_-_1px)] lg:h-px lg:w-auto lg:border-t-2 lg:border-l-0"
        />

        {steps.map(({ icon: Icon, step, title, description }) => (
          <li
            key={step}
            className="relative flex gap-5 pb-10 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center"
          >
            <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-plum to-[#8b3a5e] text-white ring-4 ring-white/70">
              <Icon className="h-5 w-5" />
            </span>
            <div className="pt-0.5 lg:pt-5">
              <p className="font-serif text-xl font-bold text-rose/60">{step}</p>
              <h3 className="mt-1 text-[15px] font-bold text-plum">{title}</h3>
              <p className="mx-auto mt-1.5 max-w-[240px] text-[13px] leading-[1.6] text-muted">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}