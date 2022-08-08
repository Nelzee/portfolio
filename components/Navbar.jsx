import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const setNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="fixed top-0 left-0 w-full duration-300 ease-in z-18">
      <nav className="flex justify-between px-3 text-white align-middle bg-zinc-700">
        <div className="logo">
          <h3 className="text-4xl font-bold">Nelson</h3>
        </div>
        <ul className="justify-center hidden align-middle sm:flex ">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-4">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div onClick={setNav} className="z-10 block sm:hidden">
          {toggleNav ? <h4>X</h4> : <h4>O</h4>}
        </div>
        <div
          className={
            toggleNav
              ? "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden"
              : "absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden"
          }
        >
          <ul className="block sm:hidden ">
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
