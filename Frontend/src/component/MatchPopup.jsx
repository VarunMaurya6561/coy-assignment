
import React from "react";
import { Link } from 'react-router-dom'

const MatchPopup = ({ currentUser, matchedProfile, onClose }) => {

  if (!matchedProfile) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      <div
        className="relative bg-white w-full max-w-md rounded-2xl p-6 sm:p-8 text-center border-t border-l animate-in zoom-in duration-300"
        style={{
          boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.9)"
        }}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
        >
          ✕
        </button>

        {/* Heading */}
        <div className="mt-5">

          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-gray-500">
            Congratulations
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 text-black">
            It's a Match!
          </h1>

          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            You and {matchedProfile.name} liked each other.
          </p>

        </div>

        {/* Profile Images */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 my-10">

          {/* Current User */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-black overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">

            {currentUser?.image ? (
              <img
                src={currentUser.image}
                alt="Your profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl font-bold text-black">
                {currentUser?.name?.charAt(0) || "Y"}
              </span>
            )}

          </div>

          {/* Heart */}
          <div className="text-3xl sm:text-4xl animate-pulse">
            ❤️
          </div>

          {/* Matched User */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-black overflow-hidden shadow-lg bg-gray-100">

            <img
              src={matchedProfile.image}
              alt={matchedProfile.name}
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        {/* Matched Name */}
        <h2 className="text-2xl font-bold text-black">
          {matchedProfile.name}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          A new connection starts here! ✨
        </p>

        {/* Button */}
        <div className="mt-8">

          <button
            onClick={onClose}
            className="w-full bg-gray-950 text-white py-3 rounded-full font-bold hover:bg-gray-800 transition cursor-pointer shadow-lg"
          >
            Continue Discovering →
          </button>

        </div>
        <Link to='/matches' >
            <p className="mt-2 cursor-pointer hover:underline">Show All Matches</p>
        </Link>

      </div>
    </div>
  );
};

export default MatchPopup;
