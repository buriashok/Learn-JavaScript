import User from "../models/user.model.js";

const registerUser = asyncHandler((req,res) => {
    const {username}
    if(
        [username]
    )
})

const existedUser = User.findOne({
    $or: [{username}, {email}]
})
if(existedUser){
    throw new ApiError(400,"User with this email or username is already exist")
}
const avatarLocalPath = req.files?.avatar[0]?.path;
const coverImageLocalPath = req.files?.coverImage[0]?.path;

if(!avatarLocalPath){
    throw new ApiError(400, "Avatar is required!!!")
}

const avatar = await uploadOnCloudinary(avatarLocalPath);
const coverImage = await uploadOnCloudinary(coverImageLocalPath);

if(!avatar){
    throw new ApiError(400, "Avator ")
}

export {
    registerUser
}