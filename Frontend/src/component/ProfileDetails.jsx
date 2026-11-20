
import React from "react";

const ProfileDetails = ({ profile, onClose }) => {

  if (!profile) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      
    >

      {/* Popup Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative border-l border-t"
        style={{
          boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.9)"
        }}
        id='showDetails'
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 text-white rounded-full w-9 h-9"
        >
          ✕
        </button>

        {/* Profile Image */}
        <div className="h-64 relative">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 p-5 text-white bg-linear-to-t from-black/80 to-transparent w-full">
            <h2 className="text-2xl font-bold">
              {profile.name}, {profile.age}
            </h2>

            <p>📍 {profile.location}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-5 space-y-5 text-gray-800">

          {/* About */}
          <section>
            <h3 className="font-bold text-lg">About me</h3>
            <p className="text-sm mt-2 text-gray-600">
              {profile.aboutMe}
            </p>
          </section>

          {/* Basic Information */}
          <section>
            <h3 className="font-bold text-lg">Basic Information</h3>

            <div className="mt-3 space-y-2 text-sm">
              <p>💼 {profile.occupation}</p>
              <p>🎓 {profile.education}</p>
              <p>📏 {profile.height}</p>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h3 className="font-bold text-lg">Interests</h3>

            <div className="flex flex-wrap gap-2 mt-3">
              {profile.interests?.map((interest, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-2 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Relationship Goal */}
          <section>
            <h3 className="font-bold text-lg">Looking for</h3>
            <p className="mt-2 text-sm text-gray-600">
              ❤️ {profile.lookingFor}
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-center">
          <button
            onClick={onClose}
            className="bg-gray-950 text-white px-8 py-2 rounded-full"
          >
            Close Profile
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfileDetails;
