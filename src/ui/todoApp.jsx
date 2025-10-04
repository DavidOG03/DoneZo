import React, { useState } from "react";
import Form from "../components/form";
import TaskList from "../components/taskList";

const TodoApp = () => {
  const [taskItems, setTaskItems] = useState([]);
  // const [isCompleted, setCompleted] = useState(false);

  if (!taskItems) return;

  const handleAddTask = (text) => {
    const trimmedTask = {
      text,
      completed: false,
      id: Date.now(),
    };
    setTaskItems((taskItems) => [...taskItems, trimmedTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTaskItems((taskItems) => taskItems.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTaskItems((tasks) =>
      tasks.map(
        (task) =>
          task.id === taskId
            ? { ...task, completed: !task.completed } // return updated task
            : task // return unchanged task
      )
    );
    console.log("Toggled task with ID:", taskId);
  };

  return (
    <div>
      <Form OnAddTask={handleAddTask} />
      <TaskList
        // isCompleted={isCompleted}
        // task={taskItems[0]}
        taskItems={taskItems}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
};

export default TodoApp;
