
import ISmsProvider from './providers/ISmsProvider';

class SmsService {
    private provider: ISmsProvider;

    constructor(provider: ISmsProvider) {
        this.provider = provider;
    }

    public sendSms(senderId: string, recipient: string, message: string): Promise<any> {
        return this.provider.sendSms(senderId, recipient, message);
    }
}

export default SmsService;
