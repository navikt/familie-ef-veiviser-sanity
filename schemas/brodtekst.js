export default {
  name: 'brodtekst',
  type: 'document',
  title: 'Brødtekst',
  fields: [
    {
      name: 'body',
      type: 'markdown',
      title: 'Brødtekst',
      validation: Rule => Rule.required(),
    }
  ]
}
