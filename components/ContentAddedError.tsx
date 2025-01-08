import { FiAlertTriangle } from "react-icons/fi";

interface ErrorProps {
  message?: string;
}

export function ContentAddedError({ message }: ErrorProps) {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <FiAlertTriangle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
