export interface Feedback {
  clean_text: string;
  summary: string;
  language: string;
  confidence?: number;

  reasons: Reason[];
  provenance: Provenance;
}

export interface Reason {
  reason_label: string;
  confidence?: number;
  extracted_reason_text: string;
  reason_intent: string;
  theme: string;
  sentiment_score: number;
  emotions: Record<string, number>;
  evidence: string[];
  suggested_action?: string;
  entities: Entity[];
}

export interface Entity {
  extracted_entity_text: string;
  canonical_entity_label: string;
  entity_category: string;
  match_score: number;
  alias?: string;
}

export interface Provenance {
  human_review_needed: boolean;
  trigger_reasons: string[];
}
