import ISmsProvider from './ISmsProvider';
import AWS from 'aws-sdk';

class SNSProvider implements ISmsProvider {
  private sns: AWS.SNS;

  constructor(accessKeyId: string, secretAccessKey: string, region: string) {
    AWS.config.update({ accessKeyId, secretAccessKey, region });
    this.sns = new AWS.SNS();
  }

  public sendSms(senderId: string, recipients: string[], message: string): Promise<any> {
    const promises = recipients.map(recipient => {
      const params = {
        Message: message,
        PhoneNumber: recipient,
        MessageAttributes: {
          'AWS.SNS.SMS.SenderID': {
            DataType: 'String',
            StringValue: senderId
          }
        }
      };

      return this.sns.publish(params).promise();
    });

    return Promise.all(promises);
  }
}

export default SNSProvider;
