import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <h1 className="text-lg font-bold">Event</h1>
      <button className="bg-purple-600 px-4 py-2 rounded">Create Event</button>
    </nav>
  );
};

export default Navbar;