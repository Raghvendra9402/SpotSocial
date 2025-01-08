import * as z from "zod";

export const contentSchema = z.object({
  selectedItem: z.string().min(1, { message: "Select the type of content" }),
  title: z.string().min(1, { message: "Invalid Title" }),
  description: z.string().optional(),
  link: z.string().url("Invalid link").min(1, {
    message: "enter the link",
  }),
});

export type ContentSchema = z.infer<typeof contentSchema>;
