export default {
  name: 'informasjonsboks',
  type: 'document',
  title: 'Informasjonsboks',
  fields: [
    {
      name: 'information_id',
      type: 'number',
      title: 'Informasjonsboks-ID',
      validation: Rule => Rule.required(),
    },
    {
      name: 'undertitler',
      type: 'array',
      title: 'Undertitler',
      of: [{
        type: 'reference',
        to: [{type: 'undertittel'}],
      }],
      validation: Rule => Rule.required(),
    }
  ]
}
