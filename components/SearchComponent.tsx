"use client";
import { ChangeEvent } from "react";
import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";

interface SearchComponentProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function SearchComponent({
  searchTerm,
  setSearchTerm,
}: SearchComponentProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="relative flex items-center">
      <Input
        placeholder="Search Content"
        className="pr-10"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <CiSearch className="w-6 h-6 absolute right-3 cursor-pointer" />
    </div>
  );
}
