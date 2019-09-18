export default {
  name: 'main_information_box',
  type: 'document',
  title: 'Hovedsvar',
  fields: [
    {
      name: 'information_ID',
      type: 'number',
      title: 'Informasjonsboks-ID'
    },
    {
      name: 'overskrifter',
      type: 'array',
      title: 'Overskrifter',
      of: [{
        type: 'reference',
        to: [{type: 'headline'}]
      }]
    }
  ]
}
