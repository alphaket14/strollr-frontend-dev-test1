import React, { useState } from "react";
import "./App.css";
import { NavigationLayout } from "./components/navigation/NavigationLayout";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="App ">
      <div className="flex bg-[#F2F8F2]">
        <NavigationLayout {...{ setIsSidebarOpen , isSidebarOpen }} />
        <Dashboard {...{ setIsSidebarOpen }} />
      </div>
    </div>
  );
}

export default App;
