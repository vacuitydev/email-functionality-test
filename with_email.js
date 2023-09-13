import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'nestor.wintheiser68@ethereal.email',
	password: 'WTkG7hjPgUgnbZE3GK',
	host: 'smtp.ethereal.email',
    port:587,
	ssl: true,
    tls: { ciphers: 'SSLv3' },

});

// send the message and get a callback with an error or details of the message that was sent
client.send(
	{
		text: 'i hope this works',
		from: 'Nestor Wintheiser <nestor.wintheiser68@ethereal.email>',
		to: 'Olga <olga27@ethereal.email>',
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
);