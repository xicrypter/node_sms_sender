# SMS Library

Esta librería permite enviar SMS utilizando diferentes proveedores de servicios. Está diseñada para ser fácilmente extensible a nuevos proveedores.

## Instalación

Para integrar esta librería en tu proyecto, puedes clonar este repositorio directamente dentro de la estructura de tu proyecto o utilizar un submódulo en Git si prefieres mantener los repositorios separados pero conectados.

### Clonación directa

Navega al directorio donde deseas incluir la librería y ejecuta:

```bash
git clone https://github.com/xicrypter/node_sms_sender
```

### Usar como Submodulo en tu proyecto

Primero debes integrar el repositorio como un submodulo en tu proyecto

```bash
git submodule add https://github.com/xicrypter/node_sms_sender path/to/sms-library
git submodule update --init --recursive
```
Seguidamente, este un ejemplo de uso para Twilio:

```typescript
import SmsService from './path/to/sms-library/src/SmsService';
import TwilioProvider from './path/to/sms-library/src/providers/TwilioProvider';

const twilioProvider = new TwilioProvider('your_Twilio_AccountSid', 'your_Twilio_AuthToken');
const smsService = new SmsService(twilioProvider);

smsService.sendSms('+1234567890', ['+10987654321', '+1234567890'], 'Hello, this is a test message from Twilio')
    .then(responses => {
        responses.forEach(response => console.log('SMS sent successfully:', response.data));
    })
    .catch(error => {
        console.error('Failed to send SMS:', error);
    });
```
