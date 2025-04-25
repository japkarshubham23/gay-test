import {SITE_DOMAIN_NAME} from "@/app/utils/constant";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    authors: [{ name: "Shubham Japkar", url: "https://linkedin.com/in/shubham-japkar" }],
    creator: "Shubham Japkar",
    publisher: "Shubham Japkar"
};

export default function Page() {
    return <div className="text-white font-sans">
        <meta name="description" content="Learn how Shubham Japkar's website collects, uses, and protects your data. We value your privacy and ensure your information is never stored or shared unnecessarily." />
        <section className="py-12 ">
            <div className="container mx-auto px-4 max-w-4xl">

                <h2 className="text-2xl font-semibold text-white mb-6">Introduction</h2>
                <p className="text-gray-300 mb-4">
                    At Gay Test, we respect your privacy and are committed to safeguarding any information that you
                    share
                    with us. This Privacy Policy explains our practices regarding the information we collect when you
                    use
                    our website.
                </p>

                <h2 className="text-2xl font-semibold text-white mb-6">Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                    We do not collect or store any personal data. The only information you provide is during the test,
                    and
                    it is used only to generate the results. Your test results are displayed immediately without being
                    stored or retained.
                </p>

                <h2 className="text-2xl font-semibold text-white mb-6">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                    Since we do not collect or store any personal data, we do not use any information for analysis or
                    marketing purposes. The data you provide during the test is only used to generate your immediate
                    results
                    and is not saved.
                </p>

                <h2 className="text-2xl font-semibold text-white mb-6">Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 mb-4">
                    We do not use cookies or any other tracking technologies. Our website does not track your activity
                    or
                    store any information about your usage. There is no personal data being saved or shared with third
                    parties.
                </p>

                <h2 className="text-2xl font-semibold text-white mb-6">Third-Party Services</h2>
                <p className="text-gray-300 mb-4">
                    Our website does not share any data with third-party services. Since we do not store or collect any
                    personal information, there is no data being sent to third parties for processing or analytics.
                </p>

                <h2 className="text-2xl font-semibold text-white mb-6">Data Security</h2>
                <p className="text-gray-300 mb-4">
                    As we do not collect or store any user data, there is no risk of data breaches or misuse of personal
                    information. Your privacy is important to us, and we ensure that no data is retained or accessed.
                </p>

                <h2 className="text-2xl font-semibold text-white mb-6">Your Rights</h2>
                <p className="text-gray-300 mb-4">
                    Since we do not collect or store any personal information, there are no data-related rights to
                    exercise.
                    You are free to use the site without concerns about your personal data being stored or shared.
                </p>

                <h2 className="text-2xl font-semibold text-white mb-6">Changes to This Privacy Policy</h2>
                <p className="text-gray-300 mb-4">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                    updated "last updated" date. We encourage you to review this policy periodically.
                </p>

                <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy, please contact us at <a
                    href={`mailto:support@${SITE_DOMAIN_NAME}`} className="text-white" target={"_blank"} rel={"nofollow"}>support@{SITE_DOMAIN_NAME}</a>.
                </p>
            </div>
        </section>
    </div>
}