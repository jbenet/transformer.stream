var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'stream',
  'description': 'Byte stream',
  'schema': "string"
});
