import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Instagram, TikTok } from "./icons";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border-tint bg-blush px-6 pt-[60px] pb-8 text-muted md:px-12 lg:px-20"
    >
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-[280px]">
          <a href="#" aria-label="Drip Perfect Pasig home" className="flex items-center gap-2">
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
          <p className="mt-4 text-[13px] leading-relaxed">
            Quality IV drips &amp; face/body treatments. Strong immunity
            inside, healthy &amp; glowing skin outside.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.facebook.com/Glutadrippasig"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-rose"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-rose"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="transition-colors hover:text-rose"
            >
              <TikTok className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-plum">Quick Links</h3>
          <ul className="space-y-2.5 text-[13px]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-plum"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-plum">Contact</h3>
          <ul className="space-y-2.5 text-[13px]">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-deep" />
              <span>
                108 Dr. Sixto Antonio Ave., Brgy Rosario, Pasig City
                <span className="block text-xs text-muted">
                  2nd Flr Unit C (same building as Infinitea Rosario)
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-rose-deep" />
              <a href="tel:+639671730781" className="transition-colors hover:text-plum">
                0967 173 0781
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-rose-deep" />
              <a href="mailto:dripperfect@gmail.com" className="transition-colors hover:text-plum">
                dripperfect@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border-tint pt-6 text-xs md:flex-row">
        <p>© 2026 Drip Perfect Pasig. All rights reserved.</p>
        <p>Pasig City, Metro Manila</p>
      </div>
    </footer>
  );
}
