import { FaPlus } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { Button } from "./ui/button";

interface ButtonProps {
  buttonText: string;
  buttonStyle: "content" | "share";
}

export function ButtonComponent({ buttonText, buttonStyle }: ButtonProps) {
  return (
    <div>
      <Button
        className={
          buttonStyle == "content"
            ? "bg-purple-500 hover:bg-purple-500"
            : "px-9 py-3"
        }
      >
        {buttonStyle == "content" ? (
          <FaPlus />
        ) : buttonStyle == "share" ? (
          <IoMdShare />
        ) : null}
        {buttonText}
      </Button>
    </div>
  );
}
