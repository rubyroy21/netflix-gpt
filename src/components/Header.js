import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebaseSetup";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute w-screen py-8 px-2  z-10 bg-gradient-to-b from-black flex justify-between align-middle">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
        alt="logo"
      />

      <div className="flex p-2 gap-3">
        <img
          className="w-12 h-12"
          src="https://occ-0-2232-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZ2z43VE0jS_qN36DHgArVH-Qa4NwE5AwIZ09Faod0oGh07vVF0NKbJ2UhaMe-gma9HnYPC4OH1wzfLLrC2cKBpDBf4dpPI.png?r=c9f"
          alt="user-icon"
        />
        <button className="font-bold text-white" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
