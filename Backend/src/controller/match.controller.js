
import Match from "../models/match.model.js";

export const getMatches = async (req, res) => {
    try {

        const userId = req.query.userId;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required"
            });
        }


        const matches = await Match.find({
            users: userId
        }).populate("users", "name age location image bio aboutMe occupation education height interests lookingFor");


        const formattedMatches = matches.map(match => {

            const otherProfile = match.users.find(
                user => user._id.toString() !== userId
            );

            return {
                matchId: match._id,
                matchedAt: match.createdAt,
                profile: otherProfile
            };
        });

        res.status(200).json({
            success: true,
            count: formattedMatches.length,
            matches: formattedMatches
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
