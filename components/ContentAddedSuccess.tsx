import { FaRegCircleCheck } from "react-icons/fa6";

interface ErrorProps {
  message?: string;
}

export function ContentAddedSuccess({ message }: ErrorProps) {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <FaRegCircleCheck className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
