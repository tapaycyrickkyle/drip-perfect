import { Quote, Star } from "./icons";

const featured = {
  name: "Maria S.",
  service: "Vitamin C Glow Drip",
  quote:
    "My skin has never looked this bright! The clinic is spotless and the staff made me feel so at ease. Definitely coming back.",
};

const quotes = [
  {
    name: "Jasmine R.",
    service: "Hydration Drip",
    quote:
      "I felt the difference right away — more energy and no more afternoon slump. The whole session was relaxing and quick.",
  },
  {
    name: "Andrea T.",
    service: "Immunity Boost",
    quote:
      "The doctor consult really sold me — everything is personalized, not just a one-size-fits-all drip. Highly recommend Drip Perfect Pasig!",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-star">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3 w-3" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-blush px-6 py-[60px] md:px-12 lg:px-20">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-rose/25 blur-3xl"
      />

      <div className="relative mb-12 text-center">
        <p className="mb-3 text-xs font-bold tracking-[1.5px] text-pink-deep uppercase">
          Patient Stories
        </p>
        <h2 className="font-serif text-[clamp(1.75rem,2.4vw,2.25rem)] font-semibold text-plum">
          What Our Patients Say
        </h2>
        <p className="mt-2 text-sm text-muted">
          Real stories from patients who found their glow
        </p>
      </div>

      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <figure>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose-deep shadow-md shadow-rose/20">
            <Quote className="h-6 w-6" />
          </span>
          <blockquote className="mt-5 font-serif text-[22px] leading-[1.5] font-medium text-plum md:text-[26px]">
            “{featured.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <div>
              <p className="text-sm font-bold text-plum">{featured.name}</p>
              <p className="text-xs text-muted">{featured.service}</p>
              <div className="mt-1">
                <Stars />
              </div>
            </div>
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center gap-8 lg:gap-10">
          {quotes.map(({ name, service, quote }) => (
            <figure key={name} className="border-l-2 border-rose-deep/50 pl-5">
              <blockquote className="text-sm leading-[1.8] text-plum/90">
                “{quote}”
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-2.5">
                <div>
                  <p className="text-[13px] font-bold text-plum">{name}</p>
                  <p className="text-xs text-muted">{service}</p>
                </div>
                <div className="ml-auto">
                  <Stars />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}