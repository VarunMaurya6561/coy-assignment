import Profile from "../models/profile.model.js";
import Swipe from "../models/swipe.model.js";
import Match from "../models/match.model.js"

export const getDiscoverProfiles = async (req, res) => {
  try {
    const { userId } = req.query;


    const currentUser = await Profile.findById(userId);

    if (!currentUser) {
      return res.status(404).json({
        success: false,
        message: "User profile not found"
      });
    }

    


    const swipedProfiles = await Swipe.find({
      fromUser: userId
    }).distinct("toUser");



    const profiles = await Profile.find({
      _id: {
        $nin: [userId, ...swipedProfiles]
      }
    });


    res.status(200).json({
      success: true,
      count: profiles.length,
      profiles,
      currentUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const swipeProfile = async (req, res) => {
  try {
    const { profileId, action } = req.body;


    if (!profileId || !["like", "pass"].includes(action)) {
      return res.status(400).json({
        success: false,
        message: "Invalid profile ID or action",
      });
    }


    const userId = req.body.userId;

    const currentUser = await Profile.findById(userId);

  if (!currentUser) {
    return res.status(404).json({
      success: false,
      message: "Current user not found"
    });
  }

  
  


    const profile = await Profile.findById(profileId);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    if (userId === profileId) {
      return res.status(400).json({
        success: false,
        message: "You cannot swipe your own profile",
      });
    }


    const existingSwipe = await Swipe.findOne({
      fromUser: userId,
      toUser: profileId,
    });

    if (existingSwipe) {
      return res.status(409).json({
        success: false,
        message: "You have already swiped this profile",
      });
    }

    await Swipe.create({
      fromUser: userId,
      toUser: profileId,
      action,
    });

    // Check mutual like
    let isMatch = false;

    if (action === "like") {
      const mutualLike = await Swipe.findOne({
        fromUser: profileId,
        toUser: userId,
        action: "like",
      });

      if (mutualLike) {

        const existingMatch = await Match.findOne({
          users: { $all: [userId, profileId] },
        });

        if (!existingMatch) {
          await Match.create({
            users: [userId, profileId],
          });
        }

        isMatch = true;
      }
    }

    res.status(201).json({
      success: true,
      message: isMatch ? "It's a match!" : "Swipe saved successfully",
      isMatch,
      currentUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
