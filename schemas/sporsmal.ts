import { defineField, defineType } from "sanity";
export const sporsmal = defineType({
  name: "sporsmal",
  type: "document",
  title: "Spørsmål",
  fields: [
    defineField({
      name: "sporsmal_tekst",
      type: "string",
      title: "Spørsmålstekst",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hjelpetekst_overskrift",
      type: "string",
      title: "Hjelpetekst overskrift",
    }),
    defineField({
      name: "hjelpetekst",
      type: "string",
      title: "Hjelpetekst innhold",
    }),
    defineField({
      name: "sporsmal_id",
      type: "number",
      title: "Spørsmåls-ID",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Svar",
      name: "svarliste",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "svar" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
