import { useEffect, useState } from "react";
import "./App.css";
import SnackBar from "./components/snackBar";
import NotesApp from "./ui/notesApp";
import TodoApp from "./ui/todoApp";
import TravelList from "./ui/travelList";
import { Moon, Sun } from "lucide-react";
function App() {
  const [isActiveTab, setIsActiveTab] = useState(0);
  const handleSetActiveTab = (tabIndex) => {
    setIsActiveTab(tabIndex);
  };
  const [theme, setTheme] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Check saved preference or system preference on mount
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };
  return (
    <>
      <header className="w-full bg-gray-200 py-2 px- border-b border-gray-300">
        <img
          src="/images/donezo-logo.png"
          className="logo max-h-[2rem] mx-auto"
          alt="Donezo logo"
        />
      </header>
      <main className="w-full h-full p-4 lg:grid lg:grid-cols-[320px_1fr]">
        <aside className="hidden h-full lg:block bg-gray">
          <ul className=" bg-gray-200 w-full h-full flex flex-col justify-start items-start gap-4 text-white p-4 rounded-tl-md rounded-tr-md shadow-md">
            <li
              className={`text-base text-black cursor-pointer px-4 py-2 w-full text-center ${
                isActiveTab === 0 ? "font-bold bg-gray-50" : ""
              }`}
              role="menuitem"
              aria-roledescription="Go to TodoApp"
              onClick={() => handleSetActiveTab(0)}
            >
              TodoApp
            </li>
            <li
              className={`text-base text-black cursor-pointer px-4 py-2 w-full text-center ${
                isActiveTab === 1 ? "font-bold bg-gray-50" : ""
              }`}
              role="menuitem"
              aria-roledescription="Go to Travel List"
              onClick={() => handleSetActiveTab(1)}
            >
              Travel List
            </li>
            <li
              className={`text-base text-black cursor-pointer px-4 py-2 w-full text-center ${
                isActiveTab === 2 ? "font-bold bg-gray-50" : ""
              }`}
              role="menuitem"
              aria-roledescription="Go to NotesApp"
              onClick={() => handleSetActiveTab(2)}
            >
              NotesApp
            </li>
          </ul>
        </aside>
        <section className="mt-4 lg:mt-0 lg:ml-4 max-w-3xl mx-auto">
          {isActiveTab === 0 && <TodoApp />}
          {isActiveTab === 1 && <TravelList />}
          {isActiveTab === 2 && <NotesApp />}
        </section>
      </main>
      <footer className="w-full py-4 px-6 text-center flex justify-center">
        <p className="text-center">
          &copy; {new Date().getFullYear()} DoneZo. All rights reserved.
        </p>
        <button
          className="bg-transparent border-0 hover:cursor-pointer hover:text-blue hover:bg-purple/50 hover:dark:bg-purple p-2 rounded-lg ml-auto"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun color="#e6e1d9" size={16} />
          ) : (
            <Moon color="#333" size={16} />
          )}
        </button>
        {/* {theme === "dark" ? (
          <MenuIcon
            color="#e6e1d9"
            size={20}
            className="cursor-pointer"
            onClick={handleNavbarOpen}
          />
        ) : (
          <MenuIcon
            color="#333"
            size={20}
            className="cursor-pointer"
            onClick={handleNavbarOpen}
          />
        )} */}
      </footer>
      <SnackBar onSetActiveTab={handleSetActiveTab} isActiveTab={isActiveTab} />
    </>
  );
}

export default App;
