import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";

export function SearchComponent() {
  return (
    <div className="relative flex items-center">
      <Input placeholder="Search Content" className="pr-10" />
      <CiSearch className="w-6 h-6 absolute right-3 cursor-pointer" />
    </div>
  );
}
