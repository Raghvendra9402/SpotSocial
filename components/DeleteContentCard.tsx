import { useToast } from "@/hooks/use-toast";
import { MdDelete } from "react-icons/md";
import axios from "axios";

export function DeleteContentCard({ id }: { id: string }) {
  const { toast } = useToast();
  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this content?")) return;
    const res = await axios.delete("/api/v1/delete-content", {
      data: { id: id },
    });

    toast({
      description: res.data.success || "content deleted successfully",
    });
  }

  return <MdDelete className="w-6 h-6 cursor-pointer" onClick={handleDelete} />;
}
