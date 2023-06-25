import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="p-6 flex items-center justify-between">
      <h1 className="text-5xl">La relojería</h1>
      <div className="">
        <button className="bg-gray-900/10 px-4 py-2 hover:bg-gray-900 hover:text-white rounded-l-lg">Por tamaño</button>
        <button className="bg-gray-900/10 px-4 py-2 hover:bg-gray-900 hover:text-white">Por género</button>
        <button className="bg-gray-900/10 px-4 py-2 hover:bg-gray-900 hover:text-white rounded-r-lg">Todos los relojes</button>
      </div>

      <CartWidget />

    </nav>
  );
}

export default NavBar;
