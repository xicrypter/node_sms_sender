
import ISmsProvider from './ISmsProvider';
import axios from 'axios';
import config from '../config';

class TwilioProvider implements ISmsProvider {
    public sendSms(senderId: string, recipient: string, message: string): Promise<any> {
        const url = config.twilio.url;
        const token = config.twilio.token;
        const data = {
            From: senderId,
            To: recipient,
            Body: message
        };

        return axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    }
}

export default TwilioProvider;
