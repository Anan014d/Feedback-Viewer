import { Feedback } from "@/types/feedback";

export default function CleanSummary({ feedback }: { feedback: Feedback }) {
  return (
    <section className="border rounded p-4" aria-labelledby="clean-summary">
      <p id="clean-summary" className="sr-only">
        Feedback summary
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{feedback.language}</p>
          <h1 className="text-xl font-semibold">{feedback.summary}</h1>
        </div>
        {typeof feedback.confidence === "number" ? (
          <span
            className="inline-block mt-0 px-2 py-1 bg-success text-white text-sm rounded badge-on-success"
            aria-label={`Overall confidence ${Math.round(
              feedback.confidence * 100
            )} percent`}
          >
            {Math.round(feedback.confidence * 100)}%
          </span>
        ) : null}
      </div>

      <p className="mt-3">{feedback.clean_text}</p>
    </section>
  );
}
