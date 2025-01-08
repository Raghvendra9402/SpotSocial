"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SelectProps {
  onValueChange?: (value: string) => void;
}

export function SelectComponent({ onValueChange }: SelectProps) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select type of content" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="twitter">Twitter</SelectItem>
          <SelectItem value="youtube">Youtube</SelectItem>
          <SelectItem value="instagram">Instagram</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
