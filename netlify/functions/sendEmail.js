const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const path = require('path');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Load participant data from JSON file
const participantDataPath = path.join(__dirname, 'participants.json');
let participantData = JSON.parse(fs.readFileSync(participantDataPath, 'utf-8'));

const saveParticipantData = (data) => {
  fs.writeFileSync(participantDataPath, JSON.stringify(data, null, 2), 'utf-8');
};

exports.handler = async (event, context) => {
  console.log('Event:', event);
  const { participants, date, participantEmail, drinkingName } = JSON.parse(event.body);

  console.log('Parsed data:', { participants, date, participantEmail, drinkingName });

  // Update participant data
  if (!participantData[date]) {
    participantData[date] = { participants: [] };
  }
  participantData[date].participants.push(...participants);
  saveParticipantData(participantData);

  console.log('Updated participant data:', participantData);

  const formattedDate = new Date(date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });

  const participantDetails = participants[participants.length - 1];
  const signupTime = new Date().toLocaleString('en-US', { timeZone: 'UTC', timeZoneName: 'short' });

  const adminMailOptions = {
    to: 'dusan.rula@gmail.com',
    from: 'dusan.rula@gmail.com', // Use the email address or domain you verified with SendGrid
    subject: 'New Watermelon Beach Party Participant Signup',
    html: `
      <h2>New Participant Signup</h2>
      <p><strong>Name:</strong> ${participantDetails.name}</p>
      <p><strong>Sex:</strong> ${participantDetails.sex}</p>
      <p><strong>Team:</strong> ${participantDetails.team}</p>
      <p><strong>Email:</strong> ${participantDetails.email}</p>
      <p><strong>Drinking Name:</strong> ${participantDetails.drinkingName}</p>
      <p><strong>Signup Time:</strong> ${signupTime}</p>
    `
  };

  const participantMailOptions = {
    to: participantEmail,
    from: 'dusan.rula@gmail.com', // Use the email address or domain you verified with SendGrid
    subject: 'Watermelon Beach Party Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; background-color: white; padding: 20px;">
        <img src="cid:partyImage" alt="Watermelon Party" style="width: 100%; max-width: 600px; margin: 0 auto; display: block;" />
        <div style="padding: 20px; text-align: center;">
          <h2 style="font-size: 24px;">Thank you for signing up!</h2>
          <p style="font-size: 18px;">Dear ${drinkingName},</p>
          <p style="font-size: 18px;">Please proceed to the front desk of Hostel Mint or the Hostel Beach, in Split, Croatia, to make the payment. (12 euros for the hostel guests)</p>
          <p style="font-size: 18px;">We will see you at Kasjuni Beach on ${formattedDate} at 17:00 for Beach Outing, or at 19:30 for the game.</p>
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
