import { Feedback } from "@/types/feedback";
import CleanSummary from "./CleanSummary";
import ReasonsAccordion from "./ReasonsAccordion";
import Provenance from "./Provenance";
import Heatmap from "./Heatmap";

export default function FeedbackViewer({ feedback }: { feedback: Feedback }) {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <CleanSummary feedback={feedback} />
      <ReasonsAccordion reasons={feedback.reasons} />
      <Heatmap reasons={feedback.reasons} />
      <Provenance provenance={feedback.provenance} />
    </div>
  );
}
