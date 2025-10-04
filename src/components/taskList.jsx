import React from "react";
import Task from "./task";

const TaskList = ({ taskItems, onDeleteTask, onToggleTask }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Your Tasks</h2>
      <div className="border border-gray-300 rounded-md">
        {taskItems.length === 0 ? (
          <p className="p-4 text-gray-500 italic text-center">
            No tasks yet. Add one above 👆
          </p>
        ) : (
          <ul>
            {taskItems.map((task) =>
              task && task.id ? (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onToggleTask={onToggleTask}
                />
              ) : null
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
