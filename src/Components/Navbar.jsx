import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextMain } from "../Context/ContextApi";

const Navbar = () => {
  const { user } = useContext(ContextMain);
  return (
    <>
      <div className="navbar  text-black font-bold h-[6rem]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 text-black"
            >
              <Link to={"/"} className="lg:text-xl text-lg">
                Home
              </Link>
              <Link to={"/allequipment"} className="lg:text-xl text-lg">
                All Equipment
              </Link>
              {user && (
                <>
                  <Link to={"/myequipment"} className="lg:text-xl text-lg">
                    My Equipment
                  </Link>
                  <Link to={"/addequipment"} className="lg:text-xl text-lg">
                    Add Equipment
                  </Link>
                </>
              )}
            </ul>
          </div>
          <Link to={"/"} className="text-xl cursor-pointer ml-12">
            <img
              src="https://i.ibb.co.com/RNqRd9q/Logo.jpg"
              alt=""
              className="w-[3rem] rounded-full"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:flex gap-5">
            <Link to={"/"} className="lg:text-xl text-lg">
              Home
            </Link>
            <Link to={"/allequipment"} className="lg:text-xl text-lg">
              All Equipment
            </Link>
            {user && (
              <>
                <Link to={"/myequipment"} className="lg:text-xl text-lg">
                  My Equipment
                </Link>
                <Link to={"/addequipment"} className="lg:text-xl text-lg">
                  Add Equipment
                </Link>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end lg:mr-[8rem]">
          <div>
            {user ? (
              <>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className=" m-1">
                    <div className="flex gap-2 justify-around items-center">
                      <img
                        src={user?.photo}
                        alt=""
                        className="w-[4rem] h-[4rem] rounded-full"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box bg-base-100 z-[1] w-40 mr-24 p-2 shadow"
                  >
                    <div>
                      <div>
                        <p className="text-lg font-bold text-pink-400">
                          {user?.name}
                        </p>
                      </div>
                      <div>
                        <button onClick={EmailsignOut}>
                          <Link to="/" className="text-red-500">
                            SignOut
                          </Link>
                        </button>
                      </div>
                    </div>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-5 justify-between items-center">
                  <div className="">
                    <Link
                      to="/login"
                      className="px-5 py-3 rounded-lg bg-white text-purple-400/60 hover:text-purple-700 hover:bg-slate-50"
                    >
                      Login
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/register"
                      className="px-5 py-3 rounded-lg bg-white text-purple-400/60 hover:text-purple-700 hover:bg-slate-50"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
