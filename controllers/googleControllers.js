import { google } from "googleapis";
import { getUserData } from "../config/getUserData.js";


export const googleLogin = async (req, res) => {

    try {
    
        const { code } = req.body;

        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.REDIRECT_URL,
        )

        const { tokens } = await oauth2Client.getToken(code);
        await oauth2Client.setCredentials(tokens);
        const user = await oauth2Client.credentials;

        const userData = await getUserData(user.access_token);

        res.json({ tokens, userData });
    }catch(e) {
        console.log(e)
    }



}