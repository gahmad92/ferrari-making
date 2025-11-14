// App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="flex">
    

      <div className="flex-1 flex flex-col">
        {/* <Navbar /> */}

        {/* sab kuch  */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
