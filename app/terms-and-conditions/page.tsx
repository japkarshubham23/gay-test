export default function Page() {
    return <div className="bg-black text-white font-sans min-h-[calc(100dvh_-_6px)]">
        <section className="py-12 bg-black">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-semibold mb-6 text-white">Our Team</h2>
                <p className="mb-4 text-gray-300">
                    The Gay Test project is brought to you by a passionate group of developers, designers, and
                    researchers
                    who believe in celebrating identity, humor, and self-exploration. This test is meant for
                    entertainment
                    and light-hearted self-reflection.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><a href={"https://www.linkedin.com/in/shubham-japkar"} className={"underline"} rel={"nofollow"} target={"_blank"}>Shubham Japkar</a> – Frontend Developer & UI Designer</li>
                </ul>
            </div>
        </section>

        <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-semibold mb-6 text-white">Terms & Conditions</h2>
                <ul className="list-disc list-inside space-y-4 text-gray-300">
                    <li>This test is purely for entertainment and is not a scientifically validated tool.</li>
                    <li>Results are meant to be humorous and should not be taken as a definitive statement about your
                        sexuality.
                    </li>
                    <li>No personal data is stored or shared. Your privacy is important to us.</li>
                    <li>Users must be 16 years or older to take the test.</li>
                    <li>By using this website, you agree to these terms and understand that the results are not
                        diagnostic
                        or professional advice.
                    </li>
                </ul>
            </div>
        </section>

    </div>
}