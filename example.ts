
import SmsService from './src/SmsService';
import TwilioProvider from './src/providers/TwilioProvider';

const twilioProvider = new TwilioProvider();
const smsService = new SmsService(twilioProvider);

smsService.sendSms('YOUR_SENDER_ID', 'RECIPIENT_PHONE_NUMBER', 'Hello, this is a test message')
    .then(response => console.log('SMS sent successfully:', response))
    .catch(error => console.error('Failed to send SMS:', error));
