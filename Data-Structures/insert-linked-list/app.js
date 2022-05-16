function insertNodeAtTail(head, data) {
  let temp = head;
  const linkedList = new SinglyLinkedListNode(data);

  if (temp == null) {
    return linkedList;
  }

  while (temp.next != null) {
    temp = temp.next;
  }

  temp.next = linkedList;
  linkedList.next = null;
  return head;
}
