import "./App.css";
import TodoApp from "./ui/todoApp";
function App() {
  return (
    <>
      <header className="w-full py-2 px-6 md:max-h-50 border-b border-gray-300">
        <img
          src="/images/donezo-logo.png"
          className="logo max-h-[4rem] md:max-h-[320px] mx-auto"
          alt="Donezo logo"
        />
      </header>
      <main>
        <h1 className="text-2xl font-bold">Welcome to DoneZo</h1>
        <p className="mt-2">
          Your one-stop solution for all your task management needs.
        </p>
        <TodoApp />
      </main>
      <footer className="w-full py-4 px-6">
        <p>&copy; {new Date().getFullYear()} DoneZo. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
