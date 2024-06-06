import { defineField, defineType } from "sanity";

export const knapp = defineType({
  name: "knapp",
  type: "object",
  title: "Knapp",
  fields: [
    defineField({
      name: "tekst",
      type: "string",
      title: "Tekst",
    }),
    defineField({
      name: "lenke",
      type: "string",
      title: "Lenke",
    }),
  ],
});
