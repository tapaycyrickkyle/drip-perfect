import fs from "fs";
import path from "path";
import DatePickerInput from "./DatePickerInput";
import GcashQrModal from "./GcashQrModal";
import { Mail, MapPin, Messenger, Phone, WhatsApp } from "./icons";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const gcashQrExists = fs.existsSync(
  path.join(process.cwd(), "public", "images", "gcash-qr.png")
);

const services = [
  "Gluta Drip",
  "Face Treatment",
  "Body Treatment",
  "Botox",
  "Barbie Arms",
  "Semi Permanent Makeup",
  "Other Services",
  "Not sure yet",
];

export default function Booking() {
  return (
    <section id="contact" className="px-6 py-[60px] md:px-12 lg:px-20">
      <div className="relative grid items-stretch gap-8 overflow-hidden rounded-[20px] bg-linear-to-r from-[#F9D7E9] to-[#FDEDF8] p-8 shadow-xl shadow-rose/20 md:p-12 lg:grid-cols-2">
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-rose/30 blur-3xl"
        />

        <div className="relative flex flex-col">
          <p className="mb-3 text-xs font-semibold tracking-[1.5px] text-pink-deep uppercase">
            Book Your Visit
          </p>
          <h2 className="font-serif text-[28px] leading-snug font-bold text-plum md:text-[32px]">
            Ready to <span className="italic text-rose-deep">Glow</span>? Let&apos;s
            Get You Booked.
          </h2>
          <p className="mt-3 max-w-[420px] text-[13px] leading-[1.7] text-muted">
            Call, text, or message us — we&apos;ll help you pick the perfect
            drip or treatment and find a slot that works for you.
          </p>

          <div className="mt-6 space-y-3 text-[13px] text-muted">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-deep" />
              <span>
                108 Dr. Sixto Antonio Ave., Brgy Rosario, Pasig City
                <span className="block text-xs">
                  2nd Flr Unit C (same building as Infinitea Rosario)
                </span>
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-rose-deep" />
              <a
                href="tel:+639671730781"
                className="font-semibold text-plum transition-colors hover:text-rose-deep"
              >
                0967 173 0781
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-rose-deep" />
              <a
                href="mailto:dripperfect@gmail.com"
                className="font-semibold text-plum transition-colors hover:text-rose-deep"
              >
                dripperfect@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="tel:+639671730781"
              className="flex h-11 items-center gap-2 rounded-full bg-plum px-6 text-sm font-semibold text-white transition-colors hover:bg-[#381b2b]"
            >
              <Phone className="h-4 w-4" />
              Call to Book
            </a>
            <a
              href="https://wa.me/639671730781"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-plum shadow-sm transition-colors hover:bg-[#F9EDF3]"
            >
              <WhatsApp className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href="https://m.me/dripperfect"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-plum shadow-sm transition-colors hover:bg-[#F9EDF3]"
            >
              <Messenger className="h-4 w-4 text-[#0084FF]" />
              Messenger
            </a>
          </div>
        </div>

        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="relative flex flex-col gap-4 rounded-2xl bg-white/70 p-5 ring-1 ring-white/70 backdrop-blur-md md:p-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Booking Request — Drip Perfect Pasig"
          />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="booking-name"
                className="mb-1.5 block text-[11px] font-semibold tracking-wide text-plum uppercase"
              >
                Name
              </label>
              <input
                id="booking-name"
                type="text"
                name="name"
                required
                suppressHydrationWarning
                placeholder="Your full name"
                className="w-full rounded-xl border border-border-tint bg-white px-3.5 py-2.5 text-sm text-plum transition outline-none placeholder:text-muted/60 focus:border-pink-deep focus:ring-2 focus:ring-rose/30"
              />
            </div>
            <div>
              <label
                htmlFor="booking-phone"
                className="mb-1.5 block text-[11px] font-semibold tracking-wide text-plum uppercase"
              >
                Phone
              </label>
              <input
                id="booking-phone"
                type="tel"
                name="phone"
                required
                suppressHydrationWarning
                placeholder="09XX XXX XXXX"
                className="w-full rounded-xl border border-border-tint bg-white px-3.5 py-2.5 text-sm text-plum transition outline-none placeholder:text-muted/60 focus:border-pink-deep focus:ring-2 focus:ring-rose/30"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="booking-age"
                className="mb-1.5 block text-[11px] font-semibold tracking-wide text-plum uppercase"
              >
                Age
              </label>
              <input
                id="booking-age"
                type="number"
                name="age"
                min={1}
                max={120}
                suppressHydrationWarning
                placeholder="Your age"
                className="w-full rounded-xl border border-border-tint bg-white px-3.5 py-2.5 text-sm text-plum transition outline-none placeholder:text-muted/60 focus:border-pink-deep focus:ring-2 focus:ring-rose/30"
              />
            </div>
            <div>
              <label
                htmlFor="booking-persons"
                className="mb-1.5 block text-[11px] font-semibold tracking-wide text-plum uppercase"
              >
                Number of Persons
              </label>
              <input
                id="booking-persons"
                type="number"
                name="persons"
                min={1}
                max={20}
                suppressHydrationWarning
                placeholder="1"
                className="w-full rounded-xl border border-border-tint bg-white px-3.5 py-2.5 text-sm text-plum transition outline-none placeholder:text-muted/60 focus:border-pink-deep focus:ring-2 focus:ring-rose/30"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="booking-day"
              className="mb-1.5 block text-[11px] font-semibold tracking-wide text-plum uppercase"
            >
              Day to Visit
            </label>
            <DatePickerInput
              id="booking-day"
              name="day"
              required
              className="w-full rounded-xl border border-border-tint bg-white px-3.5 py-2.5 text-sm text-plum transition outline-none focus:border-pink-deep focus:ring-2 focus:ring-rose/30"
            />
            <p className="mt-1.5 text-[10px] text-muted">
              Open Tuesday–Sunday · Closed Mondays
            </p>
          </div>
          <div>
            <label
              htmlFor="booking-service"
              className="mb-1.5 block text-[11px] font-semibold tracking-wide text-plum uppercase"
            >
              Service / Treatment
            </label>
            <select
              id="booking-service"
              name="service"
              required
              defaultValue=""
              suppressHydrationWarning
              className="w-full appearance-none rounded-xl border border-border-tint bg-white px-3.5 py-2.5 text-sm text-plum transition outline-none focus:border-pink-deep focus:ring-2 focus:ring-rose/30"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border border-border-tint bg-white p-4">
            <p className="mb-3 text-[11px] font-semibold tracking-wide text-plum uppercase">
              GCash Payment
            </p>
            <div className="flex items-start gap-4">
              {gcashQrExists ? (
                <GcashQrModal
                  src="/images/gcash-qr.png"
                  alt="GCash QR code for Drip Perfect Pasig"
                />
              ) : (
                <div className="flex h-[140px] w-[140px] shrink-0 flex-col items-center justify-center rounded-xl border-2 border-dashed border-border-tint bg-blush/50 p-3 text-center">
                  <p className="text-[10px] leading-relaxed text-muted">
                    GCash QR
                    <span className="block font-semibold text-plum">
                      Replace public/images/gcash-qr.png
                    </span>
                  </p>
                </div>
              )}
              <div className="flex-1">
                <p className="text-[12px] leading-[1.7] text-muted">
                  Scan the QR and pay via GCash, then enter the reference
                  number from your receipt.
                </p>
                <div className="mt-3">
                  <label
                    htmlFor="booking-gcash-ref"
                    className="mb-1.5 block text-[11px] font-semibold tracking-wide text-plum uppercase"
                  >
                    GCash Reference No.
                  </label>
                  <input
                    id="booking-gcash-ref"
                    type="text"
                    name="gcash_ref"
                    suppressHydrationWarning
                    placeholder="e.g. 1234 5678 9012"
                    className="w-full rounded-xl border border-border-tint bg-white px-3.5 py-2.5 text-sm text-plum transition outline-none placeholder:text-muted/60 focus:border-pink-deep focus:ring-2 focus:ring-rose/30"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            suppressHydrationWarning
            className="mt-1 flex h-11 w-full items-center justify-center rounded-full bg-plum px-6 text-sm font-semibold text-white transition-colors hover:bg-[#381b2b]"
          >
            Request Booking
          </button>
          <p className="text-center text-[11px] text-muted">
            We&apos;ll confirm your slot via call or message
          </p>
        </form>
      </div>
    </section>
  );
}