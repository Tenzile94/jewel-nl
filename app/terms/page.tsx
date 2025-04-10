export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none dark:prose-invert">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Jewelry World ("we," "our," or "us"). These Terms of
          Service ("Terms") govern your access to and use of the Jewelry World
          website, including any content, functionality, and services offered on
          or through the website (the "Service").
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you do not agree to these Terms, you must not access or use
          the Service.
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          The Service and its entire contents, features, and functionality
          (including but not limited to all information, software, text,
          displays, images, video, and audio, and the design, selection, and
          arrangement thereof) are owned by Jewelry World, its licensors, or
          other providers of such material and are protected by copyright,
          trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>
        <p>
          You may access the material on the Service only for your personal,
          non-commercial use. You must not reproduce, distribute, modify, create
          derivative works of, publicly display, publicly perform, republish,
          download, store, or transmit any of the material on our Service,
          except as follows:
        </p>
        <ul>
          <li>
            Your computer may temporarily store copies of such materials in RAM
            incidental to your accessing and viewing those materials.
          </li>
          <li>
            You may store files that are automatically cached by your Web
            browser for display enhancement purposes.
          </li>
          <li>
            You may print or download one copy of a reasonable number of pages
            of the Service for your own personal, non-commercial use and not for
            further reproduction, publication, or distribution.
          </li>
          <li>
            If we provide social media features with certain content, you may
            take such actions as are enabled by such features.
          </li>
        </ul>

        <h2>3. Educational Content</h2>
        <p>
          The content provided on Jewelry World is for informational and
          educational purposes only. While we strive to provide accurate and
          up-to-date information, we make no representations or warranties of
          any kind, express or implied, about the completeness, accuracy,
          reliability, suitability, or availability of the information,
          products, services, or related graphics contained on the Service for
          any purpose.
        </p>

        <h2>4. User Contributions</h2>
        <p>
          The Service may contain message boards, chat rooms, personal web pages
          or profiles, forums, bulletin boards, and other interactive features
          (collectively, "Interactive Services") that allow users to post,
          submit, publish, display, or transmit to other users or other persons
          (hereinafter, "post") content or materials (collectively, "User
          Contributions") on or through the Service.
        </p>
        <p>
          All User Contributions must comply with the Content Standards set out
          in these Terms. Any User Contribution you post to the site will be
          considered non-confidential and non-proprietary.
        </p>

        <h2>5. Prohibited Uses</h2>
        <p>
          You may use the Service only for lawful purposes and in accordance
          with these Terms. You agree not to:
        </p>
        <ul>
          <li>
            Use the Service in any way that violates any applicable federal,
            state, local, or international law or regulation.
          </li>
          <li>
            Use the Service to engage in any conduct that restricts or inhibits
            anyone's use or enjoyment of the Service.
          </li>
          <li>
            Use the Service to impersonate or attempt to impersonate Jewelry
            World, a Jewelry World employee, another user, or any other person
            or entity.
          </li>
          <li>
            Engage in any other conduct that restricts or inhibits anyone's use
            or enjoyment of the Service, or which, as determined by us, may harm
            Jewelry World or users of the Service or expose them to liability.
          </li>
        </ul>

        <h2>6. Changes to the Terms</h2>
        <p>
          We may revise and update these Terms from time to time in our sole
          discretion. All changes are effective immediately when we post them,
          and apply to all access to and use of the Service thereafter.
        </p>
        <p>
          Your continued use of the Service following the posting of revised
          Terms means that you accept and agree to the changes. You are expected
          to check this page frequently so you are aware of any changes, as they
          are binding on you.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          Questions or comments about the Service or these Terms may be directed
          to our contact form or by writing to us at the address provided on our
          Contact page.
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
