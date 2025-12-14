export default function Skeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div aria-hidden="true" className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded w-full" />
      ))}
    </div>
  );
}
