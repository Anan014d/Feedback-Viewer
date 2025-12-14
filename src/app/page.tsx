"use client";

import { useEffect, useState } from "react";
import { Feedback } from "@/types/feedback";
import FeedbackViewer from "@/components/FeedbackViewer";
import Skeleton from "@/components/Skeleton";

export default function Home() {
  const [data, setData] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/mock-feedback");
      const json = await res.json();
      setData(json);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="p-8" aria-busy="true" aria-live="polite">
        <Skeleton lines={6} />
      </div>
    );

  if (error)
    return (
      <div className="p-8" role="alert">
        <p className="text-red-600">Error loading data</p>
        <button
          className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
          onClick={fetchData}
        >
          Retry
        </button>
      </div>
    );

  if (!data) return <p>No data</p>;

  return <FeedbackViewer feedback={data} />;
}
