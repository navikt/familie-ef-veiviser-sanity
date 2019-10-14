export default {
  name: 'undertittel',
  type: 'document',
  title: 'Undertittel',
  fields: [
    {
      name: 'tekst_i_panel',
      type: 'string',
      title: 'Undertittel som vises i panel',
    },
    {
      name: 'tekst_i_liste',
      type: 'string',
      title: 'Undertittel som vises i liste',
    },
    {
      name: 'brodtekster',
      type: 'array',
      title: 'Brødtekst',
      of: [{
        type: 'reference',
        to: [{type: 'brodtekst'}],
      }]
    },
    {
      name: 'knapp',
      type: 'knapp',
      title: 'Knapp',
    },
  ],
  preview: {
    select: {
      title: 'tekst_i_panel',
      brodtekst_1: 'brodtekster.0.body'
    },
    prepare(selection) {
      const {title, brodtekst_1} = selection;

      return {
        title: title,
        subtitle: brodtekst_1
      }
    }
  }
}
