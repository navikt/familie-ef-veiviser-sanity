import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  type: "document",
  title: "Header",
  fields: [
    defineField({
      name: "overskrift",
      type: "string",
      title: "Overskrift",
    }),
    defineField({
      name: "ingress",
      type: "string",
      title: "Ingress",
    }),
  ],
});
