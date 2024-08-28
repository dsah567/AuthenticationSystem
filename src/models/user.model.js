import mongoose,{Schema} from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type:String,
        required: [true, 'Password is required'],
        trim: true
    }
},{timestamps:true})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10)
    next()
})

export const User = mongoose.model("User",userSchema)