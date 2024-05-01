import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  Map(page1).mergeDeep(Map(page2));
}
