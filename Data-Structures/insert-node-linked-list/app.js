function insertNodeAtHead(head, data) {
  const currentNode = new SinglyLinkedListNode(data);
  if (!head) {
    head = currentNode;
    return head;
  } else {
    currentNode.next = head;
    head = currentNode;
    return currentNode;
  }
}
