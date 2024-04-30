const { Map } = require('immutable');

function getImmutableObject(object) {
  const obj1 = Map(object);
  console.log(obj1);
}

module.exports = getImmutableObject;
