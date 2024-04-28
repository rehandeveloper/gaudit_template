import React from 'react'
import { Link } from 'react-router-dom';

export const Terms = () => {
   return (
     <div className="mx-auto max-w-5xl px-4 py-8">
       <h1 className="text-3xl font-semibold mb-4">TERMS AND CONDITIONS</h1>
       <ol className="list-decimal pl-6">
         <li className="mb-4">
           <p>
             <span className="font-semibold">Purpose and Scope:</span> By
             accessing and using this website and services, users agree to
             comply with these terms.
           </p>
         </li>
         <li className="mb-4">
           <p>
             <span className="font-semibold">
               Website Usage for Coaching Programs:
             </span>{" "}
             The website is for informational and educational purposes only.
             Users may not use the website for any illegal or unauthorized
             activities. Users are responsible for their own actions and
             interactions on the website.
           </p>
         </li>
         <li className="mb-4">
           <p>
             <span className="font-semibold">Intellectual Property:</span> All
             content, including text, graphics, logos, and images, is protected
             by intellectual property rights. Users are prohibited from
             reproducing, distributing, or modifying any content without
             explicit permission.
           </p>
         </li>
         <li className="mb-4">
           <p>
             <span className="font-semibold">Coaching Services:</span> The
             coaching services offered on the website, including the topics
             covered and the intended outcomes, are provided for informational
             and guidance purposes only and are not a substitute for
             professional advice.
           </p>
         </li>
         <li className="mb-4">
           <p>
             <span className="font-semibold">Payment and Refunds:</span> There
             is no refund or cancellation policy as long as the materials
             provided are of high quality and delivered with full dedication
             from our side. Before making any purchases, please read the terms
             carefully.
           </p>
         </li>
         <li className="mb-4">
           <p>
             <span className="font-semibold">Privacy and Data Protection:</span>{" "}
             Data is collected, stored, and used in accordance with relevant
             data protection laws. Personal information is protected. Please
             review our{" "}
             <Link to="/privacy-policy" className="text-blue-500">
               Privacy Policy
             </Link>{" "}
             for more information.
           </p>
         </li>
         <li className="mb-4">
           <p>
             <span className="font-semibold">Disclaimer of Liability:</span> The
             information provided on the website is for general purposes only
             and does not constitute professional advice. Any liability is
             disclaimed for any damages, losses, or injuries arising from the
             use of the website or reliance on its content.
           </p>
         </li>
         <li className="mb-4">
           <p>
             <span className="font-semibold">Termination:</span> We reserve the
             right to terminate or suspend access to the website or coaching
             services at any time, provided that there is a strong reason to do
             so.
           </p>
         </li>
         <li>
           <p>
             <span className="font-semibold">
               Updates to the Terms and Conditions:
             </span>{" "}
             The Terms and Conditions may be updated periodically, and users are
             responsible for reviewing them regularly.
           </p>
         </li>
       </ol>
     </div>
   );
}

export const Policy = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p>
        This Privacy Policy describes how [Your Company Name] ("we", "us", or
        "our") collects, uses, and discloses your personal information when you
        use our website [Your Website URL] (the "Service").
      </p>
      <p>
        We are committed to protecting your privacy. By using the Service, you
        agree to the collection and use of information in accordance with this
        policy.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information Collection and Use
      </h2>
      <p>
        We may collect several different types of information for various
        purposes to provide and improve our Service to you.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">
        Types of Data Collected
      </h3>
      <p>
        Personal Data: While using our Service, we may ask you to provide us
        with certain personally identifiable information that can be used to
        contact or identify you ("Personal Data"). Personally identifiable
        information may include, but is not limited to:
      </p>
      <ul className="list-disc pl-6">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Cookies and Usage Data</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Data</h2>
      <p>We may use the collected data for various purposes:</p>
      <ul className="list-disc pl-6">
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information so that we can improve our
          Service
        </li>
        <li>To monitor the usage of our Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Transfer of Data</h2>
      <p>
        Your information, including Personal Data, may be transferred to — and
        maintained on — computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ from those of your jurisdiction.
      </p>
      {/* Add more sections as needed */}
    </div>
  );
}

