import { Outlet } from "@tanstack/react-router";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
        <small>Created with ❤️ by @AdaKeita </small>
    </>
  );
}

export default App;
