export default {
  name: 'informasjonsboks',
  type: 'document',
  title: 'Informasjonsboks',
  fields: [
    {
      name: 'information_ID',
      type: 'number',
      title: 'Informasjonsboks-ID'
    },
    {
      name: 'titles',
      type: 'array',
      title: 'Undertitler',
      of: [{
        type: 'reference',
        to: [{type: 'undertittel'}]
      }]
    }
  ]
}
