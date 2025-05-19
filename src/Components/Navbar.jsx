import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextMain } from "../Context/ContextApi";

const Navbar = () => {
  const { user, EmailsignOut } = useContext(ContextMain);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="max-w-screen-xl mx-auto px-12 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden block text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          <Link to="/" onClick={closeMenu}>
            <img
              src="https://i.ibb.co/xSwWbmsq/Logo-removebg-preview.png"
              alt="Logo"
              className="w-12 h-12 rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 text-lg font-semibold">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/find-tuitor" onClick={closeMenu}>
              Find Tuitor
            </Link>
          </li>
          {user?.role === "student" && (
            <li>
              <Link to="/mybooked-tuitor" onClick={closeMenu}>
                My Booked Tuitor
              </Link>
            </li>
          )}
          {user?.role === "teacher" && (
            <>
              <li>
                <Link to="/add-tuitorial" onClick={closeMenu}>
                  Add Tuitorial
                </Link>
              </li>
              <li>
                <Link to="/my-tuitorial" onClick={closeMenu}>
                  My Tuitorial
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Right-side auth/profile */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative group">
              <img
                src={user?.photo}
                alt="User"
                className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
              />
              <div className="absolute right-0 mt-2 bg-background border rounded shadow-lg p-3 w-44 hidden group-hover:block z-50">
                <p className="text-center font-semibold">{user?.name}</p>
                <button
                  onClick={() => {
                    EmailsignOut();
                    closeMenu();
                  }}
                  className="mt-3 w-full text-text font-title font-semibold bg-background border  border-accent py-1 rounded text-lg"
                >
                  <Link to="/">Sign Out</Link>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/register"
                className="px-4 py-2 border border-accent rounded hover:bg-gray-100 font-title font-medium text-text"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 border border-accent rounded hover:bg-gray-100 font-title font-medium text-text"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 bg-background border-t border-gray-200">
          <ul className="flex flex-col gap-4 text-base font-medium">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/find-tuitor" onClick={closeMenu}>
                Find Tuitor
              </Link>
            </li>
            {user?.role === "student" && (
              <li>
                <Link to="/mybooked-tuitor" onClick={closeMenu}>
                  My Booked Tuitor
                </Link>
              </li>
            )}
            {user?.role === "teacher" && (
              <>
                <li>
                  <Link to="/add-tuitorial" onClick={closeMenu}>
                    Add Tuitorial
                  </Link>
                </li>
                <li>
                  <Link to="/my-tuitorial" onClick={closeMenu}>
                    My Tuitorial
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
