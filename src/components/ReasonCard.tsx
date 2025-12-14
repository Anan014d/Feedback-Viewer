import { Reason } from "@/types/feedback";
import EntitiesList from "./EntitiesList";
import IntentIcon from "./IntentIcon";

export default function ReasonCard({ reason }: { reason: Reason }) {
  const sentimentColor =
    reason.sentiment_score > 0
      ? "bg-green-600 text-white"
      : reason.sentiment_score < 0
      ? "bg-red-600 text-white"
      : "bg-gray-600 text-white";

  const emotions = reason.emotions ?? {};
  const evidence = reason.evidence ?? [];

  return (
    <div className="space-y-2">
      <p className="text-base font-medium">{reason.extracted_reason_text}</p>

      <div className="flex flex-wrap gap-3 text-sm text-gray-700 items-center">
        <span className="flex items-center gap-1 px-2 py-1 bg-accent-light badge-on-accent rounded">
          <IntentIcon intent={reason.reason_intent} size={14} />
          <span>Intent: {reason.reason_intent}</span>
        </span>
        <span className="px-2 py-1 bg-accent-light badge-on-accent rounded">
          Theme: {reason.theme}
        </span>
        <span className={`px-2 py-1 rounded ${sentimentColor} bg-opacity-20`}>
          Sentiment: {reason.sentiment_score}
        </span>
        <span className="px-2 py-1 bg-success badge-on-success rounded">
          Confidence: {reason.confidence ?? "N/A"}
        </span>
      </div>

      {/* Emotion distribution as small bars */}
      <div className="mt-2">
        <div className="text-sm font-medium">Emotions</div>
        <div className="mt-1 space-y-1">
          {Object.entries(emotions).map(([k, v]) => {
            const val = typeof v === "number" ? v : 0;
            const width = Math.max(4, Math.round(val * 100));
            const color =
              val > 0.5 ? "var(--color-success)" : "var(--color-accent)";
            return (
              <div key={k} className="text-xs">
                <div className="flex justify-between">
                  <div className="capitalize">{k}</div>
                  <div className="text-gray-400">{(val * 100).toFixed(0)}%</div>
                </div>
                <div className="w-full bg-gray-700/30 h-2 rounded mt-1">
                  <div
                    className="h-2 rounded"
                    style={{ width: `${width}%`, background: color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ul className="list-disc ml-5 mt-2 space-y-1">
        {evidence.map((e, i) => (
          <li key={i} className="text-sm text-gray-700">
            {e}
          </li>
        ))}
      </ul>

      {reason.suggested_action && (
        <p className="italic">Action: {reason.suggested_action}</p>
      )}

      <EntitiesList entities={reason.entities} />
    </div>
  );
}
