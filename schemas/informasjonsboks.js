export default {
  name: 'informasjonsboks',
  type: 'document',
  title: 'Informasjonsboks',
  fields: [
    {
      name: 'information_tekst',
      type: 'string',
      title: 'Informasjonsboks-tekst',
      description: 'Har ingen funksjon, men brukes for å kjenne igjen informasjonsboksen i listen.',
    },
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
