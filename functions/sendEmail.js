const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  const msg = {
    to: 'dusan.rula@gmail.com',
    from: 'dusan.rula@gmail.com', // Use the email address or domain you verified with SendGrid
    subject: 'Test Email',
    text: 'works',
    html: '<strong>works</strong>',
  };

  try {
    await sgMail.send(msg);
    console.log('Test email sent');
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Test email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending test email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send test email', details: error.toString() }),
    };
  }
};
