export default {
    name: 'question',
    type: 'document',
    title: 'Spørsmål',
    fields: [
    {
      name: 'spormalstekst',
      type: 'string',
      title: 'Spørsmålstekst',
    },
    {
      name: 'sporsmalstype',
      type: 'string',
      title: 'Spørsmålstype',
      description: 'Vanligvis flervalg. Kan kun være ett "Inntekt" og ett "Barnets alder"-spørsmål.',
      options: {
        list: ['Flervalg', 'Inntekt', 'Barnets alder'],
        layout: 'radio'
      },
    },
    {
      name: 'sporsmal_id',
      type: 'number',
      title: 'Spørsmåls-ID'
    },
    {
      title: 'Svar',
      name: 'answer_array',
      type: 'array',
      of: [{type: 'answer'}]
    }
  ]
}
