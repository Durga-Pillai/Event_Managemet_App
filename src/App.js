import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
// import other components as needed, e.g., Eventform, ThemeSelector, EventPreview

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 container mx-auto p-6">
          {/* Add other components here, e.g., Eventform, ThemeSelector, EventPreview */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
