"use client";
import Script from "next/script";

export function InstagramContent({ link }: { link: string }) {
  return (
    <div
      style={{
        transform: "scale(0.8)", // Scale down the size (e.g., 80%)
        transformOrigin: "top left", // Ensure it scales from the top-left corner
        width: "100%", // Ensure the container is responsive
        maxWidth: "500px", // Optional: Limit the maximum width
        height: "50%",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-version="14"
      >
        <a href={link} target="_blank" className="w-20"></a>
      </blockquote>
      <Script
        src="//www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Instagram embed script loaded");
        }}
      />
    </div>
  );
}
