import ISmsProvider from './ISmsProvider';
import axios from 'axios';

class SendGridProvider implements ISmsProvider {
  private url: string;
  private apiKey: string;

  constructor(url: string, apiKey: string) {
    this.url = url;
    this.apiKey = apiKey;
  }

  public sendSms(senderId: string, recipients: string[], message: string): Promise<any> {
    const data = {
      personalizations: recipients.map(recipient => ({
        to: [{ phone_number: recipient }]
      })),
      from: { phone_number: senderId },
      content: [{ type: 'text/plain', value: message }]
    };

    return axios.post(this.url, data, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }
}

export default SendGridProvider;
