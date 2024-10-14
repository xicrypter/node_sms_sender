
interface ISmsProvider {
    sendSms(senderId: string, recipient: string, message: string): Promise<any>;
}

export default ISmsProvider;
