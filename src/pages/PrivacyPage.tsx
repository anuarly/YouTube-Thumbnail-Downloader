
import React from 'react';

const PrivacyPage: React.FC = () => {
    return (
        <div className="prose dark:prose-invert max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h1>Privacy Policy for CreatorClick.com</h1>
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>
                At CreatorClick.com, accessible from your website's domain, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by CreatorClick.com and how we use it.
            </p>

            <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>

            <h2>Log Files</h2>
            <p>
                CreatorClick.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>

            <h2>Cookies and Web Beacons</h2>
            <p>
                Like any other website, CreatorClick.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2>Google DoubleClick DART Cookie</h2>
            <p>
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
            </p>

            <h2>Our Advertising Partners</h2>
            <p>
                Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
            </p>
            <ul>
                <li>
                    <p><strong>Google</strong></p>
                    <p><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></p>
                </li>
            </ul>

            <h2>EU/EEA User Consent</h2>
            <p>
                In compliance with the General Data Protection Regulation (GDPR) and other European data protection laws, if you are a user in the European Economic Area (EEA), we will obtain your consent for the use of cookies and the collection of personal data for personalized advertising. We use a Google-certified Consent Management Platform (CMP) to manage your consent preferences. You can change your preferences at any time.
            </p>

            <h2>Third Party Privacy Policies</h2>
            <p>
                CreatorClick.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <h2>Children's Information</h2>
            <p>
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
                CreatorClick.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>

            <h2>Online Privacy Policy Only</h2>
            <p>
                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in CreatorClick.com. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>

            <h2>Consent</h2>
            <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
        </div>
    );
};

export default PrivacyPage;
