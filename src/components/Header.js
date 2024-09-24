import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebaseSetup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user, "user ");
  return (
    <div className="absolute w-screen py-8 px-2  z-10 bg-gradient-to-b from-black flex justify-between align-middle">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
        alt="logo"
      />

      {user && (
        <div className="flex p-2 gap-2">
          <img
            className="w-16 h-16"
            src="https://static.vecteezy.com/system/resources/previews/048/896/064/original/nezuko-kamado-demon-slayer-free-png.png"
            alt="user icon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
