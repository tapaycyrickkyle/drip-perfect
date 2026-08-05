export default function MapSection() {
  return (
    <section aria-label="Drip Perfect Pasig location map" className="h-[400px] w-full">
      <iframe
        title="Drip Perfect Pasig location map"
        src="https://www.google.com/maps?q=108%20Dr.%20Sixto%20Antonio%20Ave.,%20Brgy%20Rosario,%20Pasig%20City,%20Metro%20Manila&output=embed"
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}