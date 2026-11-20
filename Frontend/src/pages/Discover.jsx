import React, { useEffect, useState } from "react";
// import profiles from "../utils/profile";
import API from "../services/api.service";
import currentUser from "../utils/currentUser";
import ProfileDetails from "../component/ProfileDetails";
import MatchPopup from "../component/MatchPopup";
import { Link } from "react-router-dom";


const Discover = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [moveX, setMoveX] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [profiles, setProfiles] = useState([])
  const currentProfile = profiles[currentIndex];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); 
  const [isSwiping, setIsSwiping] = useState(false);
  const [showMatchPopup, setShowMatchPopup] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);  
  const [currUserDet , SetcurrUserDet ] = useState(null) 

  useEffect(() => {
    const fetchProfiles =async() => {
      try {
        setLoading(true)
        const response = await API.get(`/profiles/feed?userId=${currentUser.userId}`)
        setProfiles(response.data.profiles)
      } catch (error) {
        console.log("Api Error: ", error);
        setError("Unable to load profiles");
      }finally{
        setLoading(false)
      }
    }

    fetchProfiles()

  }, [])

  const handleSwipe = async(action) => {

      try {
          setIsSwiping(true)
          const response = await API.post('/profiles/swipe', {
            userId : currentUser.userId,
            profileId: currentProfile._id,
            action
          }) 

          
          SetcurrUserDet(response.data.currentUser)
          if (response.data.isMatch) {
            setMatchedProfile(currentProfile);
            setShowMatchPopup(true);
          }

          
          setCurrentIndex(prev => prev + 1);
          setShowDetails(false);
          setMoveX(0);
  

          }catch (error) {
            console.log("Swipe error", error);
            
          }finally {
            setIsSwiping(false);
          }


    };


  // Like profile
  const handleLike = () => {
    handleSwipe('like')
  }


  // Skip profile
  const handleSkip = () => {
    handleSwipe('pass')
  };

  const handlePointerDown = (e) => {
    setStartX(e.clientX);
  };


  const handlePointerMove = (e) => {
    if (startX === null) return;

    setMoveX(e.clientX - startX);
  };

  
  const handlePointerUp = () => {
    if (startX === null) return;

    if (moveX > 100) {
      handleLike();
    } 
    else if (moveX < -100) {
      handleSkip();
    } 
    else {
      setMoveX(0);
    }

    setStartX(null);
  };


  const openDetails = () => {
  setShowDetails(true);
};

const closeDetails = () => {
  setShowDetails(false);
};


if (loading) {
  return <h2 className="h-screen flex items-center justify-center text-xl sm:text-2xl font-bold">
          Loading profiles!
        </h2>;
}

if(error){
  return <h2 className="h-screen flex items-center justify-center text-xl sm:text-2xl font-bold text-red-600">
          `${error}`
        </h2>;
}



 return (
  <div className="flex-1 min-h-0 w-full overflow-hidden flex flex-col items-center justify-center gap-3 sm:gap-5">

    <div
      className="h-[95%] w-[95%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[30%] border-t border-l rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-3 sm:gap-2"
      style={{
        boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.9)"
      }}
    >

      <p className="text-3xl font-extralight tracking-wide">Discover</p>

      {currentProfile ? (
        <>
          {/* Profile Card */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{
              transform: `translateX(${moveX}px) rotate(${moveX * 0.05}deg)`,
              transition: startX !== null ? "none" : "transform 0.3s ease",
              touchAction: "pan-y",
              cursor: "grab"
            }}
            className="bg-gray-950 h-[65%] sm:h-[70%] w-full rounded-xl overflow-hidden relative select-none"
          >

            <img
              className="w-full h-full object-cover brightness-85 rounded-xl pointer-events-none"
              src={currentProfile.image}
              alt={currentProfile.name}
              draggable="false"
            />

            {moveX > 80  && (
              <div className="absolute top-10 left-0 m-3 sm:m-5">
                <p className="border-3 px-3 sm:px-4 py-2 text-green-400 text-xl sm:text-2xl font-medium rounded-xl">
                  Like
                </p>
              </div>
            )}

            {moveX < -80 && (
              <div className="absolute top-0 right-0 m-3 sm:m-5">
                <p className="border-3 px-3 sm:px-4 py-2 text-red-700 text-xl sm:text-2xl font-medium rounded-xl">
                  Skip
                </p>
              </div>
            )}

            <div className="absolute bottom-0 p-3 sm:p-5 pointer-events-none">
              <p className="font-medium text-white text-lg sm:text-2xl">
                📍{currentProfile.location}
              </p>

              <p className="text-white text-xs sm:text-base">
                Bio : {currentProfile.bio}
              </p>
            </div>

            <p className="font-semibold text-xl sm:text-2xl absolute top-0 text-white p-3 sm:p-5 pointer-events-none">
              {currentProfile.name},{" "}
              <span className="font-bold text-lg sm:text-xl">
                {currentProfile.age}
              </span>
            </p>

          </div>

          <button
  onClick={openDetails}
  className="text-sm font-semibold underline underline-offset-4 cursor-pointer"
>
  View Full Profile ↓
</button>

          {/*  Buttons */}
          <div className="flex gap-4 sm:gap-8 mt-5 sm:mt-2">

            <button
              onClick={handleSkip}
              disabled={isSwiping}
              className="bg-white text-red-500 px-5 sm:px-8 py-2 sm:py-3 border cursor-pointer rounded-full font-bold shadow hover:bg-amber-100 text-sm sm:text-base"
            >
              ✕ Skip
            </button>

            <button
              onClick={handleLike}
              disabled={isSwiping}
              className="bg-white text-green-500 px-5 sm:px-8 py-2 sm:py-3 border cursor-pointer rounded-full font-bold shadow hover:bg-amber-100 text-sm sm:text-base"
            >
              ♥ Like
            </button>

          </div>

          <Link to='/matches'>
            <p className="mt-2 cursor-pointer hover:underline">Your Matches</p>
          </Link>



            {/*Details Popup */}

            {showDetails && (
              <ProfileDetails
                profile={currentProfile}
                onClose={() => setShowDetails(false)}
              />
            )}


        </>
        
      ) : (
        <h2 className="text-xl sm:text-2xl font-bold">
          No more profiles!
        </h2>
      )}

      {showMatchPopup && (
  <MatchPopup
    currentUser={currUserDet}
    matchedProfile={matchedProfile}
    onClose={() => {
      setShowMatchPopup(false);
      setMatchedProfile(null);
    }}
  />
)}

    </div>
  </div>
)
};

export default Discover;




