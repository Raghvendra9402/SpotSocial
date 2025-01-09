"use client";

import ContentCardWrapper from "@/components/ContentCardWrapper";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { SearchComponent } from "./SearchComponent";

interface Content {
  id: string;
  type: "twitter" | "youtube" | "instagram";
  title: string;
  description: string;
  link: string;
  createdAt: string;
}

export default function FetchComponent() {
  const [content, setContent] = useState<Content[]>([]); // State for content
  const [filteredContent, setFilteredContent] = useState<Content[]>([]); // Filtered content
  const [searchTerm, setSearchTerm] = useState<string>("");
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
        const data: Content[] = await res.json();
        setContent(data); // Update content state
        setFilteredContent(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false); // Stop loading
      }
    }
    fetchContent();
  }, []); // Empty dependency array ensures this runs once on mount

  // Filter content based on search term
  useEffect(() => {
    const lowerCasedTerm = searchTerm.toLowerCase();
    const filtered = content.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCasedTerm) ||
        item.description.toLowerCase().includes(lowerCasedTerm) ||
        item.type.toLowerCase().includes(lowerCasedTerm)
    );
    setFilteredContent(filtered);
  }, [searchTerm, content]);

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
    <div>
      <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="px-10 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-2">
        {filteredContent.length > 0 ? (
          filteredContent.map((item) => (
            <ContentCardWrapper
              key={item.id}
              type={item.type}
              title={item.title}
              description={item.description}
              link={item.link}
              id={item.id}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <div>No content available.</div>
        )}
      </div>
    </div>
  );
}
