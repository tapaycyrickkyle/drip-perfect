const faqs = [
  {
    question: "What are your operating hours?",
    answer:
      "We're open Tuesday–Friday from 10am–8pm and Saturday–Sunday from 8am–10pm. Monday is our rest day.",
  },
  {
    question: "How much are your services?",
    answer:
      "Prices vary per service. Kindly message or call us for details and we'll be happy to help you pick the right treatment for your goals.",
  },
  {
    question: "Are IV drips safe?",
    answer:
      "Yes. All drips are medical-grade, prepared under sterile conditions, and administered by licensed healthcare professionals after a quick consultation.",
  },
  {
    question: "How long does a session take?",
    answer:
      "Most drips take 30–60 minutes. You can relax, scroll your phone, or even nap while you drip — we'll take care of the rest.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Walk-ins are welcome for most services, excluding body and facial treatments — those need a prior booking. You can reserve via call, Messenger, or WhatsApp to guarantee your slot.",
  },
  {
    question: "What should I do before my first drip?",
    answer:
      "Stay hydrated, eat lightly beforehand, and let us know about any medications or health conditions during your consultation.",
  },
  {
    question: "Which drip is right for me?",
    answer:
      "Your doctor consult covers this — whether you need hydration, glow, immunity, recovery, or detox, we'll match the best drip to your goals.",
  },
  {
    question: "How do I book?",
    answer:
      "Call or text 0967 173 0781, email dripperfect@gmail.com, or message us on Messenger or WhatsApp. We're at 108 Dr. Sixto Antonio Ave., Brgy Rosario, Pasig City.",
  },
];

export default function Faq() {
  return (
    <section className="relative overflow-hidden px-6 py-[60px] md:px-12 lg:px-20">
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-24 h-80 w-80 rounded-full bg-white/70 blur-3xl"
      />

      <div className="relative mb-10 text-center">
        <p className="mb-3 text-xs font-bold tracking-[1.5px] text-pink-deep uppercase">
          Get Answers
        </p>
        <h2 className="font-serif text-[clamp(1.75rem,2.4vw,2.25rem)] font-semibold text-plum">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="relative mx-auto max-w-3xl space-y-3">
        {faqs.map(({ question, answer }) => (
          <details
            key={question}
            className="group rounded-xl border border-border-tint bg-white px-5 py-4 transition-colors hover:border-rose/60 open:border-rose"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-plum [&::-webkit-details-marker]:hidden">
              {question}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blush text-rose-deep transition-transform group-open:rotate-45">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-[13px] leading-[1.7] text-muted">
              {answer}
            </p>
          </details>
        ))}
      </div>

      <p className="relative mt-8 text-center text-sm text-muted">
        Still have questions?{" "}
        <a
          href="tel:+639671730781"
          className="font-semibold text-plum transition-colors hover:text-rose-deep"
        >
          Call us
        </a>{" "}
        or{" "}
        <a
          href="https://wa.me/639671730781"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-plum transition-colors hover:text-rose-deep"
        >
          WhatsApp us
        </a>
      </p>
    </section>
  );
}