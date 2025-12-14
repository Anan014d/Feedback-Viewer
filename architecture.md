# UI Architecture Explanation

This document summarizes the component choices, typing strategy, rendering performance considerations, and handling of missing data for the Feedback Detail Viewer.

Overview

- The UI is componentized into small, focused pieces: `CleanSummary`, `ReasonsAccordion` (and `ReasonCard`), `EntitiesList`, `Heatmap`, and `Provenance`.
- Each component receives strongly-typed props using TypeScript interfaces in `src/types/feedback.ts`.

Why these components

- `CleanSummary`: single responsibility — displays top-level metadata (language, summary, clean text, confidence). This keeps the header simple and easily testable.
- `ReasonsAccordion` + `ReasonCard`: reasons are a repeating, potentially nested structure; `ReasonsAccordion` handles accessibility/expand behavior while `ReasonCard` focuses on rendering details.
- `EntitiesList`: small renderer for entities; keeps alias and match formatting centralized.
- `Heatmap`: a layout-only visualization implemented with CSS Grid and Tailwind — no external charting library dependency.

Handling null / missing fields

- All optional fields use `?.` or default fallbacks in rendering. Examples:
  - `confidence` is shown as `N/A` when missing.
  - `entities` and `evidence` default to empty arrays in types and rendering.
  - Numeric scores are clamped when used for width/color calculations to avoid NaN or out-of-range values.

Types and structure

- Types are defined in `src/types/feedback.ts` and mirror the pipeline schema. Keeping them in one file makes them easy to import across components.
- `match_score` is a float [0..1] and is formatted to a percent when shown in the UI.

Avoiding unnecessary re-renders

- Props are immutable for each component; components are pure functional components.
- Heavy derived values (e.g., grouped heatmap arrays) are computed at render time for small data sets. For large lists, we would memoize using `useMemo` keyed by the input array.
- Components are shallow and small which reduces reconciliation cost in React.

UX for nested / variable data

- Accordions reveal nested details progressively; this keeps the surface uncluttered.
- Visual cues (color-coded sentiment, small emotion bars, evidence counts) provide quick scanning without needing to read all text.
- All lists show concise summaries and allow the user to expand to read full evidence or entity details.

How to extend

- To add more visualizations, keep them stateless, accept typed inputs, and render using Tailwind + CSS Grid for responsiveness.

Notes

- All components prefer defensive rendering and readable affordances in case the pipeline returns partial data.

---

Generated as part of the assignment submission.
UI Architecture Explanation
Component Design Strategy

The UI is designed using a modular, component-based architecture to handle deeply nested and variable feedback data. Each major section of the JSON schema is mapped to a dedicated React component (CleanSummary, ReasonsAccordion, ReasonCard, EntitiesList, Heatmap, Provenance). This ensures separation of concerns, reusability, and readability.

Handling Nested and Optional Data

The feedback schema contains optional fields such as confidence scores, suggested actions, and aliases. Defensive rendering is applied using conditional checks to ensure the UI remains stable even when fields are missing or null. Default fallbacks such as “N/A” are shown where applicable.

State Management & Re-render Optimization

Data fetching and state management are handled at the page level. Components receive only the data they require, reducing unnecessary re-renders. UI logic is split into smaller components instead of a single large component, which naturally minimizes render scope and improves maintainability.

TypeScript & Schema Safety

All data structures are defined using TypeScript interfaces that mirror the backend schema. This enforces compile-time safety, improves developer experience, and ensures the UI can support any valid JSON following the schema without runtime errors.

UX Considerations for Complex Data

Expandable accordions are used for reasons to prevent overwhelming the user with information. Visual cues such as color-coded sentiment scores, confidence badges, and grouped entities improve scanability. The heatmap provides a high-level overview, while detailed sections allow deeper inspection.

Styling & Visualization Choices

Tailwind CSS and CSS Grid are used exclusively to meet assignment constraints. No chart libraries are used. The heatmap relies on color intensity, layout grouping, and size variation to convey sentiment, intent, and evidence density effectively.
