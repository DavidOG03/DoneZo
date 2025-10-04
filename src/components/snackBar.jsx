import React from "react";

const SnackBar = () => {
  return (
    <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-200 w-full max-w-2xl flex justify-around items-center gap-4 text-white p-4 rounded-tl-md rounded-tr-md shadow-md">
      <li
        className="text-xs text-black cursor-pointer px-4 py-2 w-full text-center border-r border-gray-400"
        role="menuitem"
        aria-roledescription="Go to TodoApp"
      >
        TodoApp
      </li>
      <li
        className="text-xs text-black cursor-pointer px-4 py-2 w-full text-center"
        role="menuitem"
        aria-roledescription="Go to Travel List"
      >
        Travel List
      </li>
      <li
        className="text-xs text-black cursor-pointer px-4 py-2 w-full text-center border-l border-gray-400"
        role="menuitem"
        aria-roledescription="Go to NotesApp"
      >
        NotesApp
      </li>
    </ul>
  );
};

export default SnackBar;
