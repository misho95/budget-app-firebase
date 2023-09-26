import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-w960 h-24 flex justify-between items-start ">
      <div className="p-6">
        <h1 className="text-neutral-300 font-bold text-xl select-none">
          BUDGET-APP
        </h1>
      </div>
      <div className="w-80 h-24 relative">
        <div className="bg-neutral-800 h-24 w-96 absolute -top-7 -right-3 rounded-xl border-8 border-neutral-500 flex items-center justify-between gap-2 px-4">
          {/* //RoundedCorner */}
          <div className="absolute top-5 -left-10 w-8 h-10 ">
            <div className="absolute w-8 h-10  bg-neutral-800 rounded-xl z-10"></div>
            <div className="w-3 h-6 bg-neutral-500 absolute z-1 right-0"></div>
          </div>
          {/* //RoundedCorner */}
          <div className="absolute -bottom-12 right-1 w-8 h-10 ">
            <div className="absolute w-8 h-7  bg-neutral-800 rounded-xl z-10"></div>
            <div className="w-3 h-3 bg-neutral-500 absolute z-1 right-0"></div>
          </div>
          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/id/1460122390/photo/portrait-beauty-and-facial-with-a-black-woman-in-studio-to-promote-natural-skincare-or.webp?b=1&s=170667a&w=0&k=20&c=CDyXic0eRh3eeXVJSQXmxqXXM5h7TtalZe83WqFrd2Y="
            sx={{ width: 34, height: 34 }}
          />

          <Link to="/" className="text-neutral-400 hover:text-neutral-300 flex">
            <span className="material-symbols-outlined text-3xl">add_box</span>
          </Link>
          <Link to="/" className="text-neutral-400 hover:text-neutral-300 flex">
            <span className="material-symbols-outlined text-3xl">search</span>
          </Link>
          <Link
            to="/"
            className="text-neutral-400 hover:text-neutral-300 flex "
          >
            <span className="material-symbols-outlined text-3xl">Settings</span>
          </Link>
          <Link to="/" className="text-neutral-400 hover:text-neutral-300 flex">
            <span className="material-symbols-outlined text-3xl">logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
