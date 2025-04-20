import {SITE_DOMAIN_NAME} from "@/app/utils/constant";

export default function page() {
    return <div className=" text-white font-sans min-h-[calc(100vh_-_6px)]">
        <section className="py-12 ">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-semibold text-white mb-6">We'd Love to Hear From You</h2>
                <p className="text-gray-300 mb-6">
                    If you have any questions, feedback, or need assistance, feel free to get in touch with us. We are
                    here
                    to help!
                </p>

                <p className="text-gray-300 mb-6">
                    You can reach us via email at <a href={`mailto:support@${SITE_DOMAIN_NAME}`} className={"underline"} target={"_blank"} rel={"nofollow"}>support@{SITE_DOMAIN_NAME}</a>. We will get back to you as soon as possible.
                </p>

                <p className="text-gray-300 mb-6">
                    We look forward to hearing from you!
                </p>
            </div>
        </section>
    </div>
}