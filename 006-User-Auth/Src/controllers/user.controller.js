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

export {
    registerUser
}