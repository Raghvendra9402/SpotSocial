export function YoutubeContent({ link }: { link: string }) {
  return (
    <iframe
      width="250"
      height="200"
      src={link}
      title="YouTube video player"
      frameBorder="20"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  );
}
