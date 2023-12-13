import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <small>Created with ❤️ by @AdaKeita</small>
    </>
  );
}

export default App;
