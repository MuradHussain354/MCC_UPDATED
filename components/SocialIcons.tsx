// lucide-react no longer ships brand/social icons, so these two are small
// hand-rolled SVGs sized to match lucide's icon props (size, className).

export function FacebookIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 20"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="28" height="20" rx="5" fill="currentColor" />
      <path d="M11.5 5.8L19 10L11.5 14.2V5.8Z" fill="#060606" />
    </svg>
  );
}

export function TikTokIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-.9-.9-1.4-2.1-1.4-3.42h-3.3v13.6a2.6 2.6 0 1 1-1.86-2.49v-3.34a5.9 5.9 0 1 0 5.16 5.85V9.1a7.28 7.28 0 0 0 4.4 1.48V7.28a4.03 4.03 0 0 1-2.99-1.46Z" />
    </svg>
  );
}
