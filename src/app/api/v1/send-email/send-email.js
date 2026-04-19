import { MailerSend, EmailParams, Recipient, Sender } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || "",
});

export async function sendAppointmentEmail(formData) {
  const sender = new Sender(
    "MS_8gv0nY@test-r6ke4n16k23gon12.mlsender.net",
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
          <span class="label">Phone Number:</span><br>
          <span style="display: inline-block; width: 100%;">${formData.phone}</span>
        </div>
         <div class="detail">
          <span class="label">Email:</span><br>
          <span style="display: inline-block; width: 100%;">${formData.email}</span>
        </div>
        <div class="detail">
          <span class="label">Model:</span><br>
          <span style="display: inline-block; width: 100%;">${formData.model}</span>
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

    // 1. Send email 
    const response = await mailersend.email.send(emailParams);

    // 2. Send data to CRM (NEW)
    const webhookUrl =
      "https://services.leadconnectorhq.com/hooks/WPFdwF2Fw2JYVSuyoKur/webhook-trigger/1a25cc4f-0cfa-419e-ba54-647b898d114c";

    const crmPayload = {
      name: formData.fullName,
      phone: formData.phone,
      model: formData.model,
      notes: formData.notes,
      email: formData.email
    };

    const crmResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(crmPayload),
    });

    const crmResult = await crmResponse.text();

    console.log("CRM response:", crmResult);

    await handlerSquare(formData.fullName, formData.email, ("+" + formData.phone));

    return {

      email: response,
      crm: crmResult,
    };

  } catch (error) {
    console.error("Appointment email sending failed:", error);
    throw error;
  }
}

export default async function handlerSquare(nameData, emailData, phoneData) {
  const { name, email, phone } = { name: nameData, email: emailData, phone: phoneData };

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  const response = await fetch("https://connect.squareup.com/v2/customers", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      given_name: firstName,
      family_name: lastName,
      email_address: email,
      phone_number: phone
    })
  });

  const data = await response.json();
  console.log("Square response:", data);
  
}


