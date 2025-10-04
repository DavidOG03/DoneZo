import { useState } from "react";

const Form = ({ OnAddTask }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) return;

    OnAddTask(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task"
        className="border p-2 w-full"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Add Task
      </button>
    </form>
  );
};

export default Form;
