"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  return (
    <nav className="bg-cyan-950 p-4">
      <div className="flex align-middle justify-between text-white">
        <Link href={"/"}>
          <h2 className="uppercase text-xl font-bold">Fullstack Next</h2>
        </Link>
        <ul className="flex text-white gap-5 items-center">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
        </ul>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
