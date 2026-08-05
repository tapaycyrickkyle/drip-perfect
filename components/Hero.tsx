import Image from "next/image";
import { BadgeCheck, Droplet, Shield } from "./icons";

const valueProps = [
  {
    icon: Shield,
    title: "Medical Grade",
    subtitle: "Safe & Sterile",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Physicians",
    subtitle: "Clinically Proven",
  },
  {
    icon: Droplet,
    title: "Personalized Care",
    subtitle: "Tailored Drips",
  },
];

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="grid min-h-[100vh] lg:grid-cols-[50%_50%]">
        <div className="flex flex-col justify-center px-6 pb-8 pt-24 md:px-12 lg:px-16 lg:pt-20 lg:pb-0 lg:pr-8">
          <p className="mb-4 text-xs font-bold tracking-[1.5px] text-pink-deep uppercase">
            Aesthetic &amp; Wellness
          </p>

          <h1 className="mb-5 font-serif text-[46px] leading-[1.12] font-semibold text-plum md:text-6xl lg:text-[48px] lg:whitespace-nowrap xl:text-[64px] 2xl:text-[72px]">
            Unlock Your Inner{" "}
            <span className="italic text-rose-deep">Radiance</span>
          </h1>

          <p className="mb-8 max-w-[440px] text-[15px] leading-[1.6] text-muted sm:max-w-[480px] lg:max-w-[540px]">
            Premium IV drips and aesthetic face &amp; body treatments that
            build strong immunity and reveal your natural glow — safe,
            effective, and tailored just for you.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="flex h-12 items-center rounded-full bg-plum px-7 text-sm font-semibold text-white transition-colors hover:bg-[#381b2b]"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="flex h-12 items-center rounded-full border border-border-tint bg-white px-7 text-sm font-semibold text-plum transition-colors hover:border-pink-deep hover:text-pink-deep"
            >
              Our Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {valueProps.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex flex-col items-start gap-1.5">
                <Icon className="h-6 w-6 text-rose-deep" />
                <p className="text-xs font-bold text-plum">{title}</p>
                <p className="text-[11px] text-muted">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[min(110vw,440px)] sm:h-[min(70vw,520px)] lg:block lg:min-h-full">
          <div className="absolute top-[10%] left-1/2 h-[min(120vw,420px)] w-[min(120vw,420px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_70%)] lg:top-[8%] lg:h-[640px] lg:w-[640px]" />
          <div className="absolute top-[18%] left-1/2 h-[min(86vw,300px)] w-[min(86vw,300px)] -translate-x-1/2 rounded-full border border-rose-deep/25 lg:top-[16%] lg:h-[430px] lg:w-[430px]" />

          <Image
            src="/images/hero-image/woman-transparentbg-2x.png"
            alt="Woman enjoying a glow treatment at Drip Perfect Pasig"
            fill
            sizes="100vw lg:50vw"
            priority
            className="scale-[0.88] object-center object-contain lg:origin-bottom-right lg:object-right-bottom"
          />

          <div className="absolute right-4 bottom-32 animate-[float_8s_ease-in-out_infinite_1.6s] flex items-center gap-2 rounded-full bg-white/80 py-1.5 pr-4 pl-1.5 shadow-[0_10px_30px_rgba(74,36,56,0.08)] backdrop-blur-md lg:right-24 lg:bottom-10 lg:py-2 lg:pr-5 lg:pl-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-deep/15">
              <Droplet className="h-4 w-4 text-rose-deep" />
            </span>
            <div>
              <p className="text-xs font-bold text-plum">Glow Drip</p>
              <p className="text-[10px] text-muted">IV Drip Therapy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
