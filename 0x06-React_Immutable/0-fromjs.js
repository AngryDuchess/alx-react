const { fromJS } = require('immutable');

function getImmutableObject(object) {
  obj1 = fromJS(object);
  console.log(obj1);
}

module.exports = getImmutableObject;
