import { useState } from "react";
import "./App.css";
import SnackBar from "./components/snackBar";
import NotesApp from "./ui/notesApp";
import TodoApp from "./ui/todoApp";
function App() {
  const [isActiveTab, setIsActiveTab] = useState(0);
  const handleSetActiveTab = () => {
    setIsActiveTab(isActiveTab);
  };
  return (
    <>
      <header className="w-full bg-gray-200 py-2 px-6 md:max-h-50 border-b border-gray-300">
        <img
          src="/images/donezo-logo.png"
          className="logo max-h-[4rem] md:max-h-[7rem] mx-auto"
          alt="Donezo logo"
        />
      </header>
      <main className="w-full h-full max-w-3xl mx-auto p-4">
        <TodoApp />
        <NotesApp />
      </main>
      <footer className="w-full py-4 px-6 text-center flex justify-center">
        <p className="text-center">
          &copy; {new Date().getFullYear()} DoneZo. All rights reserved.
        </p>
      </footer>
      <SnackBar onSetActiveTab={handleSetActiveTab} isActiveTab={isActiveTab} />
    </>
  );
}

export default App;
