import { Request, Response } from 'express';
import Users from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateActiveToken } from '../config/generateToken';
import sendEmail from '../config/sendMail';
import { validateEmail, validPhone } from '../middleware/valid';
import { sendSms } from '../config/sendSMS';
import { IDecodedToken } from '../config/interface';

const CLIENT_URL = `${process.env.BASE_URL}`;

const authController = {
    register: async(req: Request, res: Response) => {
        try {
            const { name, account, password } = req.body;
            const user = await Users.findOne({ account });
            if (user) return res.status(400).json({ msg: 'Email or Phone number already exists' });

            const passwordHash = await bcrypt.hash(password, 12);
            const newUser = { name, account, password: passwordHash };

            const active_token = generateActiveToken({ newUser });
            const url = `${CLIENT_URL}/active/${active_token}`;

            if (validateEmail(account)) {
                sendEmail(account, url, 'Verify your email address');
                return res.json({ msg: 'Success! Please check your email.' });
            } else if (validPhone(account)) {
                sendSms(account, url, "Verify your phone number");
                return res.json({ msg: 'Success! Please check your phone.' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    activateAccount: async (req: Request, res: Response) => {
        try {
            const { active_token } = req.body;
            const decoded = <IDecodedToken>jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`);
            const { newUser } = decoded;
            if (!newUser) return res.status(500).json({ msg: "Invalid authentication." });

            const user = new Users(newUser);
            await user.save();
            res.json({ msg: "Account has been activated!" });
        } catch (err) {
            console.log(err);
            let errMsg;
            if (err.code === 11000) {
                errMsg = Object.keys(err.keyValue)[0] + ' already exists.';
            } else {
                console.log(err);
            }
            return res.status(500).json({ msg: errMsg });
        }
    }
}

export default authController;