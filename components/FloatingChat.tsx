import { Messenger, WhatsApp } from "./icons";

export default function FloatingChat() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/639671730781"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <WhatsApp className="h-6 w-6" />
      </a>
      <a
        href="https://www.messenger.com/t/107481293927601"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Messenger"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg transition-transform hover:scale-110"
      >
        <Messenger className="h-6 w-6" />
      </a>
    </div>
  );
}
