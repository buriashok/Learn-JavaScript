import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index:true,
        },
        fullName:{
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique:true,
            lowercase: true,
            trim: true,
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage:{
            type: String,
        },
        password: {
            type:String,
            required: [true, "Password is required"]
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

