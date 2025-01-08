import { useToast } from "@/hooks/use-toast";
import { FaCopy } from "react-icons/fa";

export function CopyText({ link }: { link: string }) {
  const { toast } = useToast();
  async function handleCopy() {
    await navigator.clipboard.writeText(link);
    toast({
      description: "Link Copied",
    });
  }
  return <FaCopy className="w-5 h-5 cursor-pointer" onClick={handleCopy} />;
}
