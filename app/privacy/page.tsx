export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            How we collect, use, and protect your information.
          </p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none dark:prose-invert">
        <h2>1. Introduction</h2>
        <p>
          At Jewelry World, we respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you
          about how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </p>
        <p>
          This privacy policy applies to all information collected through our
          website, as well as any related services, sales, marketing, or events.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect several different types of information for various
          purposes to provide and improve our Service to you:
        </p>

        <h3>2.1 Personal Data</h3>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <h3>2.2 Usage Data</h3>
        <p>
          We may also collect information on how the Service is accessed and
          used ("Usage Data"). This Usage Data may include information such as
          your computer's Internet Protocol address (e.g., IP address), browser
          type, browser version, the pages of our Service that you visit, the
          time and date of your visit, the time spent on those pages, unique
          device identifiers, and other diagnostic data.
        </p>

        <h3>2.3 Tracking & Cookies Data</h3>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information. Cookies are files with a
          small amount of data which may include an anonymous unique identifier.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Service.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>Jewelry World uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer support</li>
          <li>
            To gather analysis or valuable information so that we can improve
            our Service
          </li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </p>

        <h2>5. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your
          personal information, such as the right to request access, correction,
          or deletion of your data.
        </p>
        <p>
          If you wish to be informed about what Personal Data we hold about you
          and if you want it to be removed from our systems, please contact us
          using the contact information provided below.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          using the contact information provided on our Contact page.
        </p>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
