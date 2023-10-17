import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: process.env.NESTHOR_UNAME,
	password: process.env.NESTHOR_PASSWORD,
	host: 'smtp.ethereal.email',
    port:587,
	ssl: true,
    tls: { ciphers: 'SSLv3' },

});

// send the message and get a callback with an error or details of the message that was sent
client.send(
	{
		text: 'i hope this works',
		from: `Nestor Wintheiser <${process.env.NESTHOR_UNAME}>`,
		to: `Olga <${process.env.OLGA_UNAME}>`,
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
);