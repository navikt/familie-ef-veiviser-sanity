// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import svar from './svar';
import sporsmal from './sporsmal';
import brodtekst from './brodtekst';
import header from './header';
import undertittel from './undertittel';
import informasjonsboks from './informasjonsboks';
import knapp from './knapp';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    header,
    sporsmal,
    svar,
    informasjonsboks,
    undertittel,
    brodtekst,
    knapp
  ])
})
