import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <small>Created with ❤️ by @AdaKeita</small>
    </>
  );
}

export default App;
