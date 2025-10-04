import { useState } from "react";

const Form = ({ OnAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const trimmedTask = { text: task.trim(), completed: false, id: Date.now() };
    OnAddTask(trimmedTask);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task"
        className="border p-2 w-full"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Add Task
      </button>
    </form>
  );
};

export default Form;
