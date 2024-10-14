
interface SmsConfig {
    providerName: string;
    [key: string]: any;
}

const config: SmsConfig = {
    providerName: 'Twilio',
    twilio: {
        url: 'https://api.twilio.com/send',
        token: 'your_twilio_token_here'
    }
    // Add other providers here
};

export default config;
