import React, { useMemo } from "react";
import { Reason } from "@/types/feedback";
import IntentIcon from "@/components/IntentIcon";

function sentimentToColor(score: number) {
  const v = Math.max(-1, Math.min(1, score));
  const t = (v + 1) / 2;
  const r = Math.round(255 * (1 - t));
  const g = Math.round(255 * t);
  const b = 80;
  return { r, g, b, css: `rgb(${r},${g},${b})` };
}

function textColorForBg(r: number, g: number, b: number) {
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#000" : "#fff";
}

export default function Heatmap({ reasons }: { reasons?: Reason[] }) {
  const list = reasons ?? [];

  const grouped = useMemo(() => {
    return list.reduce<Record<string, Reason[]>>((acc, r) => {
      (acc[r.theme] = acc[r.theme] || []).push(r);
      return acc;
    }, {});
  }, [list]);

  return (
    <div className="border rounded p-4">
      <div className="text-sm font-medium mb-2">Reason Heatmap</div>
      <div className="grid gap-3">
        {Object.entries(grouped).map(([theme, items]) => (
          <div key={theme}>
            <div className="text-xs text-gray-500 mb-1 font-semibold">
              {theme}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {items.map((r, i) => {
                const c = sentimentToColor(r.sentiment_score);
                const textColor = textColorForBg(c.r, c.g, c.b);
                const pad = 12 + (r.evidence?.length ?? 0) * 4;
                return (
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    className="flex items-center gap-3 rounded transition-transform hover:-translate-y-0.5 hover:scale-102 heatmap-tile focus-ring"
                    style={{
                      background: c.css,
                      color: textColor,
                      padding: `${pad}px`,
                    }}
                    title={`${r.reason_label} — ${r.reason_intent} — ${
                      r.evidence?.length ?? 0
                    } evidence`}
                    aria-label={`${r.reason_label}: ${r.reason_intent}. ${
                      r.evidence?.length ?? 0
                    } evidence.`}
                  >
                    <div className="flex-shrink-0" aria-hidden>
                      <IntentIcon intent={r.reason_intent} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">
                        {r.reason_label}
                      </div>
                      <div className="text-xs opacity-90 truncate">
                        {r.extracted_reason_text}
                      </div>
                    </div>
                    <div className="text-xs opacity-90 whitespace-nowrap">
                      {r.evidence?.length ?? 0} evidence
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
