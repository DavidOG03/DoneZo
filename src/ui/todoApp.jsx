import React, { useState } from "react";
import Form from "../components/form";
import TaskList from "../components/taskList";

const TodoApp = () => {
  const [taskItems, setTaskItems] = useState([]);
  // const [isCompleted, setCompleted] = useState(false);

  if (!taskItems) return;

  const handleAddTask = (task) => {
    setTaskItems((tasks) => [...tasks, task]);
  };

  const handleDeleteTask = (taskId) => {
    setTaskItems((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTaskItems((tasks) =>
      tasks.map((task) => {
        task.id === taskId ? { ...task, completed: !task.completed } : task;
      })
    );
  };
  return (
    <div>
      <Form OnAddTask={handleAddTask} />
      <TaskList
        taskItems={taskItems}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
};

export default TodoApp;
