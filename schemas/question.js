export default {
    name: 'question',
    type: 'document',
    title: 'Spørsmål',
    fields: [
    {
      name: 'sporsmal_tekst',
      type: 'string',
      title: 'Spørsmålstekst',
    },
    {
      name: 'hjelpetekst_overskrift',
      type: 'string',
      title: 'Hjelpetekst overskrift',
    },
    {
      name: 'hjelpetekst',
      type: 'string',
      title: 'Hjelpetekst innhold',
    },
    {
      name: 'sporsmal_id',
      type: 'number',
      title: 'Spørsmåls-ID'
    },
    {
      title: 'Svar',
      name: 'svarliste',
      type: 'array',
      of: [{type: 'answer'}]
    }
  ]
}
