
import React, { useEffect, useState } from "react";
import API from "../services/api.service.js";
import currentUser from "../utils/currentUser.js";
import ProfileDetails from "../component/ProfileDetails.jsx";


const Matches = () => {

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Fetch matches
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);

        const response = await API.get(
          `/matches?userId=${currentUser.userId}`
        );

        setMatches(response.data.matches || []);

      } catch (error) {
        console.error("Matches API Error:", error);
        setError("Unable to load matches");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

 

  // Format match date
  const formatDate = (date) => {
    if (!date) return "Recently matched";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className=" text-xl sm:text-2xl font-bold ">Loading matches...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0 w-full overflow-y-auto p-4 sm:p-6">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-light tracking-wide">
            Matches
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            People who liked you back ❤️
          </p>
        </div>

        {/* Match count */}
        <div className="mb-5">
          <p className="text-sm font-semibold">
            Your Matches ({matches.length})
          </p>
        </div>

        {/* Matches Grid */}
        {matches.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {matches.map((match) => {

              const profile = match.profile;
              
              if (!profile) {
                  return null
              };

              return (
                <div
                  key={match.matchId}
                  
                  className="border-t border-l rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
                  style={{
                    boxShadow: "4px 4px 1px rgba(0,0,0,0.9)"
                  }}
                >

                  {/* Profile Image */}
                  <div className="h-64 relative">

                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-3 right-3">
                      <span className="bg-white text-pink-500 px-3 py-1 rounded-full text-sm font-bold shadow">
                        ♥ Match
                      </span>
                    </div>

                    <div className="absolute bottom-0 w-full p-4 text-white bg-linear-to-t from-black/80 to-transparent">

                      <h2 className="text-2xl font-semibold">
                        {profile.name}, {profile.age}
                      </h2>

                      <p className="text-sm">
                        📍 {profile.location}
                      </p>

                    </div>

                  </div>

                  {/* Match Information */}
                  <div className="p-4">

                    <p className="text-sm text-gray-500">
                      {profile.bio || "Let's get to know each other!"}
                    </p>

                    <div className="flex items-center justify-between mt-4">

                      <p className="text-xs text-gray-400">
                        Matched on {formatDate(match.matchedAt)}
                      </p>

                      <button
                        onClick={() => {
                          setSelectedProfile(profile)
                        }}
                        className="text-sm font-semibold underline underline-offset-4 cursor-pointer"
                      >
                        View Profile
                      </button>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        ) : (

          /* Empty State */
          <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">

            <div className="text-6xl mb-5">
              💔
            </div>

            <h2 className="text-2xl font-semibold">
              No matches yet!
            </h2>

            <p className="text-gray-500 text-sm mt-3 max-w-sm">
              Don't worry! Keep discovering profiles.
              When someone likes you back, your matches
              will appear here.
            </p>

          </div>

        )}

      </div>
        {selectedProfile && (
  <ProfileDetails
    profile={selectedProfile}
    onClose={() => setSelectedProfile(null)}
  />
)}

    </div>
    
  );
};

export default Matches;
