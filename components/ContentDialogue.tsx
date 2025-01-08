"use client";
import { DialogDescription } from "./ui/dialog";
import { ButtonComponent } from "./ButtonComponent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { SelectComponent } from "./SelectComponent";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CiLink } from "react-icons/ci";
import React, { useState } from "react";
import axios from "axios";
import { ContentAddedSuccess } from "./ContentAddedSuccess";
import { ContentAddedError } from "./ContentAddedError";
import { Spinner } from "./Spinner";
import * as z from "zod";
import { contentSchema } from "@/lib/Schema";

export function ContentDialogue() {
  const [selectedItem, setSelectedItem] =
    useState<z.infer<typeof contentSchema>["selectedItem"]>("");
  const [link, setLink] = useState<z.infer<typeof contentSchema>["link"]>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDialogClose = (isOpen: boolean) => {
    if (!isOpen) {
      setError("");
      setSuccess("");
    }
  };
  const handleValueChange = (value: string) => {
    setSelectedItem(value);
  };
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setLink(e.target.value);
  }
  function handleTitleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTitle(e.target.value);
  }
  function handleDescriptionInputChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    e.preventDefault();
    setDescription(e.target.value);
  }

  async function handleDialog() {
    setLoading(true);
    await axios
      .post("/api/v1/user-content/", {
        selectedItem: selectedItem,
        title: title,
        description: description,
        link: link,
      })
      .then((res) => {
        setSuccess(res.data.success);
        setError(res.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <Dialog onOpenChange={handleDialogClose}>
      <DialogTrigger>
        <ButtonComponent buttonStyle="content" buttonText="Add Content" />
        {/* <button>Add content</button> */}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-b from-black to-purple-700 text-transparent bg-clip-text ">
            Add Content
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Enter the content details
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col gap-2">
            <Label>Select</Label>
            <SelectComponent onValueChange={handleValueChange} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <div className="relative">
              <Input
                placeholder="Enter Title"
                className="pr-10"
                onChange={handleTitleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Description</Label>
            <div className="relative">
              <Input
                placeholder="Enter Description"
                className="pr-10"
                onChange={handleDescriptionInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Link</Label>
            <div className="relative">
              <Input
                placeholder="Enter Link"
                className="pr-10"
                onChange={handleInputChange}
              />
              <CiLink className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <ContentAddedSuccess message={success} />
            <ContentAddedError message={error} />
            <Button
              className="w-full bg-purple-500 hover:bg-purple-500"
              onClick={handleDialog}
              disabled={loading}
            >
              {loading ? (
                <div className="flex gap-x-2 items-center ">
                  <Spinner />
                  <p>Adding Content...</p>
                </div>
              ) : (
                "Add Content"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
