import { defineField, defineType } from "sanity";

export const informasjonsboks = defineType({
  name: "informasjonsboks",
  type: "document",
  title: "Informasjonsboks",
  fields: [
    defineField({
      name: "information_tekst",
      type: "string",
      title: "Informasjonsboks-tekst",
      description:
        "Har ingen funksjon, men brukes for å kjenne igjen informasjonsboksen i listen.",
    }),
    defineField({
      name: "information_id",
      type: "number",
      title: "Informasjonsboks-ID",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "undertitler",
      type: "array",
      title: "Undertitler",
      of: [
        {
          type: "reference",
          to: [{ type: "undertittel" }],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "svarsti",
      type: "array",
      title: "Liste over svarene som skal føre til denne informasjonsboksen",
      of: [
        {
          type: "reference",
          to: [{ type: "svar" }],
        },
      ],
    }),
  ],
});

export default informasjonsboks;
