import { defineField, defineType } from "sanity";

export const svar = defineType({
  name: "svar",
  type: "document",
  title: "Svar",
  fields: [
    defineField({
      name: "tekst",
      type: "string",
      title: "Svartekst",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Er man ferdig om man svarer dette?",
      name: "done",
      type: "boolean",
    }),
    defineField({
      title:
        "Er man ferdig OG har kommet seg gjennom alle spørsmålene om man svarer dette?",
      name: "done_complete",
      type: "boolean",
    }),
    defineField({
      name: "goto",
      type: "number",
      title: "IDen til spørsmålet man går til ved valg av dette svaret",
      description:
        "Dersom du har valgt at man er ferdig etter dette spørsmålet, går man til informasjonsteksten med denne IDen istedenfor spørsmålet.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sporsmalstekst",
      type: "string",
      title: "Spørsmålstekst",
      description:
        "Har ingen funksjon, men kan brukes for å kjenne igjen svaret i listen når det er like svar på forskjellige spørsmål.",
    }),
  ],
  preview: {
    select: {
      title: "tekst",
      subtitle: "sporsmalstekst",
    },
  },
});
