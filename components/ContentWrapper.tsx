import { ContentDialogue } from "./ContentDialogue";
import { SearchComponent } from "./SearchComponent";
import { ShareDialogue } from "./ShareDialogue";

export function ContentWrapper() {
  return (
    <div className="flex items-center gap-x-4">
      <SearchComponent />
      <ContentDialogue />
      <ShareDialogue />
    </div>
  );
}
