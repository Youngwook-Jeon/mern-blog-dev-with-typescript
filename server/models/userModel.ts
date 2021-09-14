import mongoose from 'mongoose';
import { IUser } from '../config/interface';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name'],
        trim: true,
        maxLength: [20, "Your name is up to 20 chars long"],
    },
    account: {
        type: String,
        required: [true, "Please add your email or phone"],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add your password"],
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dw6i0vp1r/image/upload/v1608643768/vvcldnbsfevfzpnzvtta.jpg",
    },
    role: {
        type: String,
        default: "user"
    },
    type: {
        type: String,
        default: "register",
    }
}, {
    timestamps: true
});

export default mongoose.model<IUser>('User', userSchema);