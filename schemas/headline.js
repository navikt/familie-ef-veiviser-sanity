export default {
  name: 'headline',
  type: 'document',
  title: 'Overskrift',
  fields: [
    {
      name: 'tekst_i_liste',
      type: 'string',
      title: 'Overskrift som vises i liste',
    },
    {
      name: 'tekst_i_panel',
      type: 'string',
      title: 'Overskrift som vises i panel',
    },
    {
      name: 'undertekst',
      type: 'array',
      title: 'Informasjonsfelter',
      of: [{
        type: 'reference',
        to: [{type: 'information'}]
      }]
    }
  ]
}
