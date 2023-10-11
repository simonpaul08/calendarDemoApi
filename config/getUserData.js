import axios from "axios";

export const getUserData = async (access_token) => {
    const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
    const data = response.data;
    console.log(data);
    return data;
}
