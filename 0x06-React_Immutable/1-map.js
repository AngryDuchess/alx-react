import { Map } from 'immutable';

function getImmutableObject(object) {
  const obj1 = Map(object);
  return obj1;
}

export default getImmutableObject;
