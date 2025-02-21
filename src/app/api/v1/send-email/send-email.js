import { MailerSend, EmailParams, Recipient, Sender } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || "",
});

export async function sendAppointmentEmail(formData) {
  const sender = new Sender(
    "noreply@trial-pr9084zq9zx4w63d.mlsender.net",
    "Appointment Booking"
  );
  const recipients = [new Recipient("info@cecdetailing.com.au")];
  // const recipients = [new Recipient("bramraysky232@gmail.com")];

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
      }
      .header {
        display: block;
        color: black;
        padding: 15px;
        border-radius: 8px 8px 0 0;
        text-align: center;
        font-size : 24px
      }
      .content {
        background-color: white;
        padding: 20px;
        border-radius: 0 0 8px 8px;
        font-size : 18px
      }
      .detail {
        margin-bottom: 10px;
        border-bottom: 1px solid #ecf0f1;
        padding-bottom: 10px;
      }
      .label {
        font-weight: bold;
        color: #2c3e50;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>You just received a new form entry!</h1>
      </div>
      <div class="content">
        <div class="detail">
          <span class="label">Full Name:</span><br>
          <span style="display: inline-block; width: 100%;">${formData.fullName}</span>
        </div>
        <div class="detail">
          <span class="label">Email:</span><br>
          <span style="display: inline-block; width: 100%;"><a href="mailto:${formData.email}">${formData.email}</a></span>
        </div>
        <div class="detail">
          <span class="label">Phone Number:</span><br>
          <span style="display: inline-block; width: 100%;">${formData.phone}</span>
        </div>
        <div class="detail">
          <span class="label">Phone Number:</span><br>
          <span style="display: inline-block; width: 100%;">${formData.model}</span>
        </div>
        <div class="detail">
          <span class="label">Type of Service Required:</span><br>
          <span style="display: inline-block; width: 100%;">${formData.service}</span>
        </div>
        <div class="detail">
          <span class="label">Please provide us any further information you think is important:</span><br>
          <span style="display: inline-block; width: 100%;">${formData.notes}</span>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  const emailParams = new EmailParams()
    .setFrom(sender)
    .setTo(recipients)
    .setSubject("New Appointment Booking")
    .setHtml(htmlContent);

  try {
    const response = await mailersend.email.send(emailParams);
    return response;
  } catch (error) {
    console.error("Appointment email sending failed:", error);
    throw error;
  }
}
