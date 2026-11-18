import Image from 'next/image';

/**
 * NexHouzWatermark – a subtle, low-opacity logo placed in natural whitespace
 * between page sections. NOT fixed/floating. NOT a branded badge or label.
 */
const NexHouzWatermark = () => (
  <div
    className="flex justify-center items-center py-3 pointer-events-none select-none"
    aria-hidden="true"
  >
    <a
      href="https://nexhouz.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto opacity-[0.13] hover:opacity-[0.22] transition-opacity duration-500 hidden sm:block"
      aria-label="NexHouz"
      tabIndex={-1}
    >
      <Image
        src="/images/nexhouz-logo.png"
        alt="NexHouz"
        width={80}
        height={25}
        className="object-contain w-16 md:w-20"
      />
    </a>
  </div>
);

export default NexHouzWatermark;
