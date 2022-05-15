function printLinkedList(head) {
  let currentValue = head;
  while (currentValue !== null) {
    console.log(currentValue.data);
    currentValue = currentValue.next;
  }
}
