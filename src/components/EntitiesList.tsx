import { Entity } from "@/types/feedback";

export default function EntitiesList({ entities }: { entities?: Entity[] }) {
  const list = entities ?? [];
  return (
    <div className="mt-3 border-t pt-3">
      <h4 className="font-semibold">Entities</h4>
      {list.length === 0 ? (
        <div className="text-sm text-gray-500">No entities detected</div>
      ) : (
        list.map((e, i) => (
          <div key={i} className="text-sm py-2">
            <div className="flex items-baseline gap-3">
              <div className="font-medium">{e.extracted_entity_text}</div>
              <div className="text-gray-600 text-xs">
                {e.canonical_entity_label}
              </div>
              <div className="ml-auto text-xs text-gray-500">
                {e.entity_category}
              </div>
            </div>
            <div className="text-xs text-gray-600">
              Match: {(e.match_score * 100).toFixed(0)}%
              {e.alias ? ` • Alias: ${e.alias}` : ""}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
