export type ChevronRightProps = {
  className?: string;
};

export function ChevronRight({ className }: ChevronRightProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
