import { defineField, defineType } from "sanity";

export const undertittel = defineType({
  name: "undertittel",
  type: "document",
  title: "Undertittel",
  fields: [
    defineField({
      name: "tekst_i_panel",
      type: "string",
      title: "Undertittel som vises i panel",
    }),
    defineField({
      name: "tekst_i_liste",
      type: "string",
      title: "Undertittel som vises i liste",
    }),
    defineField({
      title: "Check denne hvis dette er noe man ikke har rett til",
      name: "ikke_rett_til",
      type: "boolean",
    }),
    defineField({
      name: "brodtekster",
      type: "array",
      title: "Brødtekst",
      of: [
        {
          type: "reference",
          to: [{ type: "brodtekst" }],
        },
      ],
    }),
    defineField({
      name: "knapp",
      type: "knapp",
      title: "Knapp",
    }),
  ],
  preview: {
    select: {
      tekst_i_panel: "tekst_i_panel",
      tekst_i_liste: "tekst_i_liste",
      ikke_rett_til: "ikke_rett_til",
      brodtekst_1: "brodtekster.0.body",
    },
    prepare(selection) {
      const { tekst_i_panel, tekst_i_liste, brodtekst_1, ikke_rett_til } =
        selection;

      let title = tekst_i_panel ? tekst_i_panel : tekst_i_liste;
      let subtitle = brodtekst_1;

      if (ikke_rett_til) title = "Ikke rett til " + title;

      if (!title) {
        title = brodtekst_1;
        subtitle = "BARE BRØDTEKST";
      }

      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
});
