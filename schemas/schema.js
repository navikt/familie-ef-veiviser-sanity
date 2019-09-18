// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import answer from './answer';
import question from './question';
import information from './information';
import header from './header';
import headline from './headline';
import main_information_box from './main_information_box';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    header,
    question,
    answer,
    information,
    headline,
    main_information_box
  ])
})
