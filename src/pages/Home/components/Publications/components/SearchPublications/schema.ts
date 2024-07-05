import { z } from "zod";

export const searchPublicationsSchema = z.object({
  query: z.string(),
});

export type SearchPublicationsFormData = z.infer<
  typeof searchPublicationsSchema
>;
