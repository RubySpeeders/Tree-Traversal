import { Animal } from "../types/animal";

export default function objectGraph(items: Animal[]) {
  var items_by_id = {};
  var roots = [];
  var i;

  // Build an id->object mapping, so we don't have to go hunting for parents
  for (i = 0; i < items.length; ++i) {
    items_by_id[items[i].id] = items[i];
    items[i].children = [];
  }

  for (i = 0; i < items.length; ++i) {
    var parentId = items[i].parent;
    // If parentId is null, this is a root; otherwise, it's parentId's kid
    var nodes = parentId === null ? roots : items_by_id[parentId].children;
    nodes.push(items[i]);
  }
  return roots;
}
