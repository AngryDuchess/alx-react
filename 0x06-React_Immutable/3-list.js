import { List } from 'immutable';

export function getListObject(array) {
  const list1 = List(array);
  return list1;
}

export function addElementToList(list, element) {
  return list.push(element);
}
