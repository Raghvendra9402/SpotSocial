"use client";

import ContentCardWrapper from "@/components/ContentCardWrapper";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

export default function FetchComponent() {
  const [content, setContent] = useState<any[]>([]); // State for content
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for errors

  // Fetch content on component mount
  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch("/api/v1/get-content");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        setContent(data); // Update content state
      } catch (err: any) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    }
    fetchContent();
  }, []); // Empty dependency array ensures this runs once on mount

  // Render loading state
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render content
  return (
    <div className="px-10 py-3 grid grid-cols-1 md:grid-cols-4 gap-2">
      {content.length > 0 ? (
        content.map((item) => (
          <ContentCardWrapper
            type={item.type}
            title={item.title}
            description={item.description}
            link={item.link}
            id={item.id}
            createdAt={item.createdAt}
            key={item.id}
          />
        ))
      ) : (
        <div>No content available.</div>
      )}
    </div>
  );
}
