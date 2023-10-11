import { google } from "googleapis";



export const createEvent = async (req, res) => {

    const { summary, description, location, startDate, endDate, refresh_token } = req.body;

    try {
        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.REDIRECT_URL,
        )

        await oauth2Client.setCredentials({ refresh_token: refresh_token})
        const calendar = google.calendar('v3');

        const response = await calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            requestBody: {
                summary: summary,
                description: description,
                location: location,
                colorId: '6',
                start: {
                    dateTime: new Date(startDate)
                },
                end: {
                    dateTime: new Date(endDate)
                }
            }
        })

        res.send(response);

    }catch(e){
        console.log(e);
    }
}

export const getEvents = async (req, res) => {
    const { refresh_token } = req.body;
    console.log(req.body)

     try {
        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.REDIRECT_URL,
        )

        await oauth2Client.setCredentials({ refresh_token: refresh_token})
        const calendar = google.calendar('v3');
    
        const response = await calendar.events.list({
            auth: oauth2Client,
            calendarId: 'primary',
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime'
        })

        let items = response['data']['items']

        res.send(items);
    }catch(e){
        console.log(e);
    }
}