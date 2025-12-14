# Feedback Detail Viewer – Frontend Assignment

## Overview

This project is a frontend application built using **Next.js, React, TypeScript, and Tailwind CSS**.  
The purpose of this assignment is to visualize **complex, AI-processed feedback data** (in JSON format) in a clean, structured, and user-friendly interface.

The feedback data contains nested information such as summaries, reasons, sentiment scores, emotions, entities, confidence levels, and provenance details.  
This application transforms that structured data into an intuitive UI that supports both **detailed analysis** and **high-level insights**.

---

## Assignment Goals

The assignment evaluates the ability to:

- Handle deeply nested JSON data
- Build scalable and reusable React components
- Use TypeScript for schema safety
- Design user-friendly UI for complex data
- Implement data-driven visualizations
- Handle loading, error, retry, and empty states
- Build visualizations without using chart libraries
- Explain UI architecture and design decisions

---

## Features Implemented

### 1. Feedback Detail Viewer

Displays the overall feedback information including:
- Clean feedback text
- One-line summary
- Language
- Confidence indicators

This section provides a **quick overview** of the feedback.

---

### 2. Reasons Section (Expandable Accordion)

Each feedback can contain multiple reasons.  
For every reason, the UI displays:

- Reason label and confidence score
- Extracted reason text
- Intent (complaint, praise, confusion, etc.)
- Theme or category
- Sentiment score with color indication
- Emotion distribution
- Evidence snippets
- Suggested actions
- Associated entities

Expandable accordions are used to reduce UI clutter and improve readability.

---

### 3. Entities and Provenance

For each reason:
- Detected entities are shown with category and match score
- Provenance information indicates:
  - Whether human review is required
  - Trigger reasons for review

This helps highlight sensitive or high-impact feedback.

---

### 4. Reason Sentiment Heatmap

A heatmap visualization provides a high-level overview of all reasons:
- Each row represents a reason
- Color indicates sentiment (red = negative, green = positive)
- Visual cues represent intent and evidence density
- Reasons are grouped by theme

No chart or visualization libraries are used.  
The heatmap is built using only **Tailwind CSS and CSS Grid**.

---

### 5. Mock API Integration

A mock API simulates real backend behavior:
- Endpoint: `/api/mock-feedback`
- Returns a random feedback JSON from five mock files
- UI handles loading, error, retry, and empty states

This ensures the frontend behaves like a production-ready application.

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- CSS Grid

---

## Project Structure

```txt
src/
 ├─ app/
 │   ├─ page.tsx
 │   └─ api/
 │       └─ mock-feedback/
 │           └─ route.ts
 │
 ├─ components/
 │   ├─ FeedbackViewer.tsx
 │   ├─ CleanSummary.tsx
 │   ├─ ReasonsAccordion.tsx
 │   ├─ ReasonCard.tsx
 │   ├─ EntitiesList.tsx
 │   ├─ Heatmap.tsx
 │   └─ Provenance.tsx
 │
 ├─ types/
 │   └─ feedback.ts
 │
 ├─ mockData/
 │   ├─ feedback1.json
 │   ├─ feedback2.json
 │   ├─ feedback3.json
 │   ├─ feedback4.json
 │   └─ feedback5.json
```

---

## Architecture & Design Decisions

- Component-based architecture for scalability and maintainability
- TypeScript interfaces aligned with the feedback schema
- Defensive rendering for optional or missing fields
- Separation of detailed views and high-level visual summaries
- UI optimized for nested data using accordions and visual grouping
- Heatmap implemented without third-party libraries as required

A detailed architecture explanation is available in `ARCHITECTURE.md`.

---

## Running the Project Locally

```bash
npm install
npm run dev
```

Open the application at:  
http://localhost:3000

---

## Conclusion

This project demonstrates the ability to convert complex backend data into a clean, scalable, and user-friendly frontend application while following real-world engineering and UX best practices.
