import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 18
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        image: {
            type: String,
            required: true
        },

        bio: {
            type: String,
            required: true,
            maxlength: 150
        },

        aboutMe: {
            type: String,
            required: true
        },

        occupation: {
            type: String,
            required: true
        },

        education: {
            type: String,
            required: true
        },

        height: {
            type: String,
            required: true
        },

        interests: {
            type: [String],
            default: []
        },

        lookingFor: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile
