
interface ISmsProvider {
    sendSms(senderId: string, recipients: string[], message: string): Promise<any>;
}

export default ISmsProvider;
