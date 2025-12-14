import { Provenance as P } from "@/types/feedback";

export default function Provenance({ provenance }: { provenance: P }) {
  return (
    <div className="border rounded p-4">
      <p>Human Review Needed: {String(provenance.human_review_needed)}</p>
      <p>Triggers: {provenance.trigger_reasons.join(", ")}</p>
    </div>
  );
}
