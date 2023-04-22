const createTask = (title) => {
  return {
    title: title, // Include title property and assign it the value of the title argument
    isComplete: false,
  };
};

export default createTask;
