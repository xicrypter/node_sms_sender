
import ISmsProvider from './ISmsProvider';
import axios from 'axios';

class NexmoProvider implements ISmsProvider {
    private url: string;
    private apiKey: string;
    private apiSecret: string;

    constructor(url: string, apiKey: string, apiSecret: string) {
        this.url = url;
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }

    public sendSms(senderId: string, recipients: string[], message: string): Promise<any> {
        const promises = recipients.map(recipient => {
            const data = {
                from: senderId,
                to: recipient,
                text: message,
                api_key: this.apiKey,
                api_secret: this.apiSecret
            };

            return axios.get(this.url, { params: data });
        });

        return Promise.all(promises);
    }
}

export default NexmoProvider;
