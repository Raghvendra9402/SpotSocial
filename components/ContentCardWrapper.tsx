import { InstagramContent } from "./InstagramContent";
import { TwitterContent } from "./TwitterContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { YoutubeContent } from "./YouutubeContent";
import { CopyText } from "./CopyText";
import { DeleteContentCard } from "./DeleteContentCard";

interface ContentCardProps {
  type: "twitter" | "youtube" | "instagram";
  title: string;
  description: string;
  link: string;
  id: string;
  createdAt: string;
}

export default function ContentCardWrapper({
  type,
  title,
  description,
  link,
  id,
  createdAt,
}: ContentCardProps) {
  return (
    <Card className=" w-[300px]  max-h-[400px] overflow-auto no-scrollbar hover:shadow-lg flex flex-col">
      <CardHeader className="space-y-4">
        <CardTitle className="flex justify-between items-center">
          {title}
          <div className="flex gap-1 items-center">
            <DeleteContentCard id={id} />
            <CopyText link={link} />
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {type == "twitter" && (
          <TwitterContent link={link.replace("x", "twitter")} />
        )}
        {type == "youtube" && (
          <YoutubeContent
            link={link
              .replace("https://youtu.be", "https://www.youtube.com/embed")
              .replace(
                /https:\/\/www\.youtube\.com\/watch\?v=([^&]+)/,
                "https://www.youtube.com/embed/$1"
              )
              .replace(
                "https://youtube.com/shorts",
                "https://www.youtube.com/embed"
              )}
          />
        )}
        {type == "instagram" && <InstagramContent link={link} />}
      </CardContent>
      <CardFooter>
        <span className="text-slate-600 mt-auto">
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(createdAt))}
        </span>
      </CardFooter>
    </Card>
  );
}
