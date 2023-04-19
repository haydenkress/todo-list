const createTask = (
  title,
  description,
  dueDate,
  priority,
  notes = "",
  checklist = []
) => {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    isComplete: false, // default value for completion status

    markAsComplete() {
      this.isComplete = true;
    },

    markAsIncomplete() {
      this.isComplete = false;
    },

    editTitle(newTitle) {
      this.title = newTitle;
    },

    editDescription(newDescription) {
      this.description = newDescription;
    },

    editDueDate(newDueDate) {
      this.dueDate = newDueDate;
    },

    editPriority(newPriority) {
      this.priority = newPriority;
    },

    addNote(note) {
      this.notes += note + "\n";
    },

    addChecklistItem(item) {
      this.checklist.push(item);
    },

    removeChecklistItem(itemIndex) {
      this.checklist.splice(itemIndex, 1);
    },

    getDateFormatted() {
      const day = this.dueDate.split("/")[0];
      const month = this.dueDate.split("/")[1];
      const year = this.dueDate.split("/")[2];
      return `${month}/${day}/${year}`;
    },
  };
};

export { createTask };
