const stats = [
  { value: "10K+", label: "Happy Patients" },
  { value: "4.8★", label: "Average Rating" },
  { value: "100%", label: "Licensed Physicians" },
  { value: "Tue–Sun", label: "Open Weekly" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border-tint bg-white px-6 py-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-border-tint">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="text-center md:px-6 md:first:pl-0 md:last:pr-0"
          >
            <p className="font-serif text-2xl font-bold text-plum md:text-3xl">
              {value}
            </p>
            <p className="mt-1 text-[11px] tracking-wide text-muted uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}