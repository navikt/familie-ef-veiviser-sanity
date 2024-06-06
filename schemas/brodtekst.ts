import { defineType, defineField } from "sanity";

export const brodtekst = defineType({
  name: "brodtekst",
  type: "document",
  title: "Brødtekst",
  fields: [
    defineField({
      name: "body",
      type: "string",
      title: "Brødtekst",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
