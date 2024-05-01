import { List, Map } from 'immutable';

export function concat(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  return Map(page1).concat(Map(page2));
}
