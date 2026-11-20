import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
    {
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Profile",
                required: true
            }
        ]
    },
    {
        timestamps: true
    }
);

const Match = mongoose.model("Match", matchSchema);

export default Match;