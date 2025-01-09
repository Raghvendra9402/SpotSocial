import { ContentDialogue } from "./ContentDialogue";
import { ShareDialogue } from "./ShareDialogue";

export function ContentWrapper() {
  return (
    <div className="flex items-center gap-x-4">
      <ContentDialogue />
      <ShareDialogue />
    </div>
  );
}
