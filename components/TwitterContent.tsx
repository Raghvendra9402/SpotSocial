"use client";
import Script from "next/script";
import { useState } from "react";
import { Spinner } from "./Spinner";

export function TwitterContent({ link }: { link: string }) {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      {loading && <Spinner />}
      <blockquote className="twitter-tweet">
        <a href={link}></a>
      </blockquote>

      {/* Load Twitter Widgets script only on client-side */}
      <Script
        strategy="afterInteractive"
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
        onLoad={() => {
          console.log("Twitter widget script loaded");
          setLoading(false);
        }}
      />
    </div>
  );
}
