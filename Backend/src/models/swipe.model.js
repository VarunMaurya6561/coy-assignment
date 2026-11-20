import mongoose from "mongoose";

const swipeSchema = new mongoose.Schema(
    {
        fromUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile",
            required: true
        },

        toUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile",
            required: true
        },

        action: {
            type: String,
            enum: ["like", "pass"],
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Prevent duplicate swipes between the same users
swipeSchema.index(
    { fromUser: 1, toUser: 1 },
    { unique: true }
);

const Swipe = mongoose.model("Swipe", swipeSchema);

export default Swipe;