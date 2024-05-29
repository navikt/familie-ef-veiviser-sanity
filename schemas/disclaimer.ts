import { defineField, defineType } from "sanity";

export const disclaimer = defineType({
  name: "disclaimer",
  type: "document",
  title: "Disclaimer",
  fields: [
    defineField({
      name: "disclaimer",
      type: "string",
      title: "Disclaimer",
    }),
  ],
});
