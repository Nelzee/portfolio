import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between align-middle">
      <div className="logo">
        <h3>Nelson</h3>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
