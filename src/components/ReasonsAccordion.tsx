import { Reason } from "@/types/feedback";
import ReasonCard from "./ReasonCard";

export default function ReasonsAccordion({ reasons }: { reasons?: Reason[] }) {
  const list = reasons ?? [];
  return (
    <div className="space-y-4" role="list">
      {list.map((r, i) => (
        <details key={i} className="border rounded" role="listitem">
          <summary
            aria-label={`Toggle reason ${r.reason_label}`}
            className="cursor-pointer p-3 font-medium"
          >
            {r.reason_label} ({r.confidence ?? "N/A"})
          </summary>
          <div className="p-4">
            <ReasonCard reason={r} />
          </div>
        </details>
      ))}
    </div>
  );
}
