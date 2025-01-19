import React from 'react';

const PrivacyPolicyTos = () => {
  return (
    <div
      style={{
        backgroundImage: `url(carbon_background.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-full w-full px-8 md:px-12 xl:px-0 py-28"
    >
      <div className="max-w-4xl mx-auto mt-12">
        {/* Privacy Policy & TOS Header */}
        <h1 className="text-center font-bold text-5xl lg:text-6xl mb-10">
          PRIVACY POLICY & TOS
        </h1>

        {/* Subscription Plan Terms & Conditions */}
        <div className="space-y-6 text-xs leading-relaxed font-light">
          <h2 className="font-bold text-xl">Subscription Plan Terms & Conditions</h2>
          <div>
            <h3 className="font-semibold">Fair Use Policy:</h3>
            <ul className="list-disc pl-5">
              <li>Each plan includes a set number of washes or services per month. Unused washes do not roll over to the next month.</li>
              <li>Services are capped at one service per week to ensure fair use and manage workload.</li>
              <li>Services must be booked in advance and are subject to availability.</li>
              <li>Priority scheduling for the Premium Plan is provided but does not guarantee immediate availability.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Non-Transferable Terms:</h3>
            <ul className="list-disc pl-5">
              <li>Subscriptions are non-transferable and tied to the registered vehicle(s) only.</li>
              <li>Customer identification will be required for service redemption.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Payment Terms:</h3>
            <ul className="list-disc pl-5">
              <li>Subscriptions are billed monthly in advance. Payment is due on the first day of each billing cycle.</li>
              <li>A late fee of 10% will apply to payments received after 7 days past the due date. Continued late payments may result in cancellation of the subscription.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Cancellation Policy:</h3>
            <ul className="list-disc pl-5">
              <li>Minimum subscription period of 2 months required.</li>
              <li>Early cancellation of subscription (before 2 months) incurs a fee equivalent to one month’s subscription price.</li>
              <li>Customers can cancel their subscription with 7 days&apos; notice.</li>
              <li>Customers can reschedule appointments booked with at least 2 days&apos; notice.</li>
              <li>No refunds will be issued for the current billing cycle if the subscription is canceled before the end of the month.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Discount Limitations:</h3>
            <ul className="list-disc pl-5">
              <li>Discounts on additional services are limited to specific frequencies (e.g., once per quarter for Premium Plan).</li>
              <li>Discounts on additional services are applied only to services not included in the subscription plan.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">No-Show Policy:</h3>
            <ul className="list-disc pl-5">
              <li>Customers may be charged a fee for repeated missed appointments.</li>
              <li>After 3 no-shows, the subscription may be reviewed for potential cancellation.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Service Quality & Satisfaction:</h3>
            <ul className="list-disc pl-5">
              <li>If a customer is not satisfied with a service, they must notify us within 5 days of the service date.</li>
              <li>We will work to resolve the issue or offer a complimentary redo of the service if applicable.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Termination & Refunds:</h3>
            <ul className="list-disc pl-5">
              <li>We reserve the right to terminate a subscription if the customer fails to comply with the terms and conditions or engages in abusive behavior.</li>
              <li>No refunds will be issued for unused services or remaining time in the billing cycle upon cancellation or termination.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Changes to Terms:</h3>
            <ul className="list-disc pl-5">
              <li>We reserve the right to modify these terms and conditions at any time.</li>
              <li>Continued use of the subscription indicates acceptance of the new terms.</li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-500" />

        {/* Privacy Policy Section */}
        <div className="space-y-6 text-xs leading-relaxed font-light">
          <h2 className="font-bold text-xl">Privacy Policy</h2>
          <p>
            At Cutting Edge Correction, we are committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your information when you visit our website or use
            our services. Please read this policy carefully to understand our
            practices regarding your personal information.
          </p>
          <div>
            <h3 className="font-semibold">1. Information We Collect:</h3>
            <ul className="list-disc pl-5">
              <li>
                <strong>Personal Information:</strong> When you book a service,
                subscribe to our plans, or contact us, we may collect personal
                information such as your name, email address, phone number, and
                vehicle details.
              </li>
              <li>
                <strong>Payment Information:</strong> We collect payment
                information when you make a purchase or subscribe to a plan.
                This may include your credit/debit card number, billing
                address, and other payment-related details.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">2. How We Use Your Information:</h3>
            <ul className="list-disc pl-5">
              <li>
                <strong>To Provide Services:</strong> We use your information to
                book and provide our car detailing services, manage
                subscriptions, and process payments.
              </li>
              <li>
                <strong>To Communicate:</strong> We may use your contact
                information to send you updates, promotional offers, and
                newsletters. You can opt out of these communications at any
                time.
              </li>
              <li>
                <strong>To Comply with Legal Obligations:</strong> We may use
                your information to comply with applicable laws, regulations,
                and legal processes.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">3. Sharing Your Information:</h3>
            <ul className="list-disc pl-5">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party service providers who assist us in
                operating our business, such as payment processors.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required by law or in response to valid requests
                by public authorities (e.g., a court or government agency).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">4. Data Security:</h3>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, and destruction. However, no internet or
              email transmission is ever fully secure or error-free.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">5. Your Rights:</h3>
            <ul className="list-disc pl-5">
              <li>
                <strong>Access and Update:</strong> You have the right to access
                and update your personal information. You can do this by
                contacting us directly.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out of receiving
                promotional communications from us by contacting us.
              </li>
              <li>
                <strong>Data Deletion:</strong> You may request the deletion of
                your personal information, and we will comply unless we are
                required to retain it for legal reasons.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">6. Changes to This Privacy Policy:</h3>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on our
              website. You are advised to review this Privacy Policy
              periodically for any changes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">7. Contact Us:</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <address>
              Cutting Edge Correction <br />
              67 Walsgott Street, North Geelong, VIC 3215 <br />
              cuttingedgecorrection@gmail.com <br />
              0450 649 257
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyTos;
