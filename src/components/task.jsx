// import React, { } from "react";

const Task = ({ task, onDeleteTask, onToggleTask }) => {
  return (
    <li className="border-b border-gray-300 flex justify-start items-center gap-4 py-2 px-4 text-base">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => {
          onToggleTask(task.id);
        }}
        className="w-4 h-4 cursor-pointer"
      />
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.text}
      </span>
      <button
        className="bg-transparent border-0 self-end ml-auto cursor-pointer"
        onClick={() => onDeleteTask(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="gray"
            d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
          />
        </svg>
      </button>
    </li>
  );
};

export default Task;
