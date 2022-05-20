function insertNodeAtPosition(llist, data, position) {
  const currentNode = new SinglyLinkedList();
  currentNode.data = data;
  let prev = null;
  let current = llist;
  let count = 0;

  while (count < position && current) {
    prev = current;
    current = current.next;
    count++;
  }

  currentNode.next = current;

  if (prev) {
    prev.next = currentNode;
    currentNode.next = current;
  }
  return llist;
}
