const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const loadParticipantData = () => {
  const data = process.env.PARTICIPANT_DATA || '{}';
  return JSON.parse(data);
};

const saveParticipantData = (data) => {
  process.env.PARTICIPANT_DATA = JSON.stringify(data);
};

exports.handler = async (event, context) => {
  console.log('Event:', event);
  const { name, email, drinkingName } = JSON.parse(event.body);

  console.log('Parsed data:', { name, email, drinkingName });

  // Load participant data from environment variables
  let participantData = loadParticipantData();

  // Add new participant
  participantData.push({ name, email, drinkingName });
  saveParticipantData(participantData);

  console.log('Updated participant data:', participantData);

  const signupTime = new Date().toLocaleString('en-US', { timeZone: 'UTC', timeZoneName: 'short' });

  const adminMailOptions = {
    to: 'dusan.rula@gmail.com',
    from: 'dusan.rula@gmail.com', // Use the email address or domain you verified with SendGrid
    subject: 'New Watermelon Beach Party Participant Signup',
    html: `
      <h2>New Participant Signup</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Drinking Name:</strong> ${drinkingName}</p>
      <p><strong>Signup Time:</strong> ${signupTime}</p>
    `
  };

  const participantMailOptions = {
    to: email,
    from: 'dusan.rula@gmail.com', // Use the email address or domain you verified with SendGrid
    subject: 'Watermelon Beach Party Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; background-color: white; padding: 20px;">
        <img src="cid:partyImage" alt="Watermelon Party" style="width: 100%; max-width: 600px; margin: 0 auto; display: block;" />
        <div style="padding: 20px; text-align: center;">
          <h2 style="font-size: 24px;">Thank you for signing up!</h2>
          <p style="font-size: 18px;">Dear ${drinkingName},</p>
          <p style="font-size: 18px;">Please proceed to the front desk of Hostel Mint or the Hostel Beach, in Split, Croatia, to make the payment. (12 euros for the hostel guests)</p>
          <p style="font-size: 18px;">We will see you at Kasjuni Beach at 17:00 for Beach Outing, or at 19:30 for the game.</p>
          <p style="font-size: 18px;">Please hydrate well before the event.</p>
          <p style="font-size: 18px;">Watermelon Beach Party Crew</p>
        </div>
      </div>
    `,
    attachments: [{
      filename: 'party.jpg',
      path: path.join(__dirname, 'party.jpg'),
      cid: 'partyImage' // same cid value as in the html img src
    }]
  };

  try {
    const adminResult = await sgMail.send(adminMailOptions);
    console.log('Admin email sent:', adminResult);

    const participantResult = await sgMail.send(participantMailOptions);
    console.log('Participant email sent:', participantResult);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Emails sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.toString() })
    };
  }
};
