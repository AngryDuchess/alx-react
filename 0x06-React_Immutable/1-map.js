import { Map } from 'immutable';

function getImmutableObject(object) {
  const obj1 = Map(object);
  console.log(obj1);
}

export default getImmutableObject;
