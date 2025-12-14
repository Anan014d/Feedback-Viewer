export default function IntentIcon({
  intent,
  size = 18,
}: {
  intent?: string;
  size?: number;
}) {
  const i = (intent ?? "").toLowerCase();
  if (i.includes("complaint")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path d="M12 2L2 22h20L12 2z" fill="var(--color-primary)" />
        <path d="M11 10h2v5h-2zM11 17h2v2h-2z" fill="rgba(0,0,0,0.7)" />
      </svg>
    );
  }
  if (i.includes("praise") || i.includes("positive")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" fill="var(--color-success)" />
        <path
          d="M9 12l2 2 4-4"
          stroke="rgba(0,0,0,0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (
    i.includes("confusion") ||
    i.includes("confuse") ||
    i.includes("question")
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" fill="var(--color-accent)" />
        <path
          d="M9.5 9.5a2.5 2.5 0 014 2c0 1.5-2 2-2 2"
          stroke="#042A66"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17h.01"
          stroke="#042A66"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        fill="var(--color-accent)"
      />
      <path
        d="M7 12h10"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
