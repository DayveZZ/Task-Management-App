import React from "react";
import { Routes, Route, Link } from "react-router";
import Dashboard from "./Dashboard";
import ToDo from "./ToDo";
import Notes from "./Notes";
import User from "./User";
import Settings from "./Settings";
import Help from "./Help";

// ICONS
import { IoMdSettings, IoMdHelpCircle, IoIosSearch } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { FaNoteSticky } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav flex">
      <div className="h-dvh p-8 pr-0 sticky top-0">
        <div className="navbar w-fit h-full rounded-lg bg-linear-to-t from-neutral-100 to-neutral-500 px-4">
          <h1 className="flex items-center justify-center h-16 text-2xl border-b border-white mb-8">
            TM <span className="text-sm text-white">App</span>
          </h1>
          <ul>
            <li>
              <Link to="/dashboard">
                <MdDashboard /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/todo">
                <LuListTodo /> ToDo App
              </Link>
            </li>
            <li>
              <Link to="/notes">
                <FaNoteSticky /> Notes
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/settings">
                <IoMdSettings /> Settings
              </Link>
            </li>
            <li>
              <Link to="/help">
                <IoMdHelpCircle /> Help
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="contetn w-full p-8">
        <div className="topbar flex items-center justify-between h-16 rounded-lg bg-neutral-200 px-8 mb-8 sticky top-8">
          <h1>
            Welcome, <span>User</span>
          </h1>
          <div className="search bg-neutral-50 rounded-full shadow duration-300 ease-in-out">
            <input type="text" placeholder="Search" className="outline-none " />
            <IoIosSearch />
          </div>
          <button>
            <FaUser />
          </button>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
