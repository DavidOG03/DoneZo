import "./App.css";
import SnackBar from "./components/snackBar";
import TodoApp from "./ui/todoApp";
function App() {
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
      </main>
      <footer className="w-full py-4 px-6">
        <p>&copy; {new Date().getFullYear()} DoneZo. All rights reserved.</p>
      </footer>
      <SnackBar />
    </>
  );
}

export default App;
