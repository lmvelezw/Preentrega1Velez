import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="p-6 flex items-center justify-between">
      <Link to='/'>
      <h1 className="text-5xl">La relojería</h1>
      </Link>
      <div className="">
        <NavLink to={`/category/masculino`} className="bg-gray-900/10 px-4 py-2 hover:bg-gray-900 hover:text-white rounded-l-lg">Masculino</NavLink>
        <NavLink to={`/category/femenino`} className="bg-gray-900/10 px-4 py-2 hover:bg-gray-900 hover:text-white">Femenino</NavLink>
        <Link to='/' className="bg-gray-900/10 px-4 py-2 hover:bg-gray-900 hover:text-white rounded-r-lg">Todos los relojes</Link>
      </div>

      <CartWidget />

    </nav>
  );
}

export default NavBar;
