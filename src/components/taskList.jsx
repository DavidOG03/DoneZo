import React from "react";
import Task from "./task";

const TaskList = ({ taskItems, onDeleteTask, onToggleTask }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Your Tasks</h2>
      <div className="border border-gray-300 rounded-md">
        <ul>
          {taskItems.map((task) => {
            return (
              <Task
                task={task}
                onDeleteTask={onDeleteTask}
                // isCompleted={isCompleted}
                onToggleTask={onToggleTask}
                key={task.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
