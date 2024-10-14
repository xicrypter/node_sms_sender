
import ISmsProvider from './providers/ISmsProvider';

class SmsService {
    private provider: ISmsProvider;

    constructor(provider: ISmsProvider) {
        this.provider = provider;
    }

    public sendSms(senderId: string, recipients: string[], message: string): Promise<any> {
        return this.provider.sendSms(senderId, recipients, message);
    }
}

export default SmsService;
