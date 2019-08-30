export default {
  name: 'answer',
  type: 'object',
  title: 'Svar',
  fields: [
    {
      name: 'svartekst',
      type: 'string',
      title: 'Svartekst'
    },
    {
      title: 'Er man ferdig om man svarer dette?',
      name: 'done',
      type: 'boolean'
    },
    {
      name: 'goto',
      type: 'number',
      title: 'IDen til spørsmålet man går til ved valg av dette svaret',
      description: 'Dersom du har valgt at man er ferdig etter dette spørsmålet, går man til informasjonsteksten med denne IDen istedenfor spørsmålet.'
    }
  ]
}
