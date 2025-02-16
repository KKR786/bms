import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Menu, X } from "lucide-react"

function Nav({ handle }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="sticky top-0">
      <button
        onClick={() => {
          const isOpen = !isSidebarOpen;
          setIsSidebarOpen(isOpen);
          handle(isOpen);
        }}
        className="fixed top-5 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 cursor-pointer"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar isSidebarOpen={isSidebarOpen} />
      <TopBar isOpen={isSidebarOpen}/>
    </div>
  );
}

export default Nav;
