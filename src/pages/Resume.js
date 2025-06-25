import React from 'react';

export default function Resume() {
    return (
        <div className="bg-gray-900 text-white min-h-screen px-4 sm:px-6 lg:px-24 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-4xl font-bold">KARTIK KUMAR</h1>
                        <p className="text-gray-400 text-lg">Software Engineer</p>
                    </div>
                    <div className="mt-6 md:mt-0 text-sm text-gray-300 space-y-1">
                        <p>📞 +91 84094 69744</p>
                        <p>✉️ kartikkumar84094@gamil.com</p>
                        <p>🌐 www.yourwebsite.com</p>
                        <p>📍Bangalore, India</p>
                    </div>
                </div>

                {/* Summary */}
                <section className="mt-10">
                    <p className="text-gray-300 leading-relaxed">
                        MERN Stack Software Engineer 5+ years of experience in building scalable
                        web applications, API, and third-party integrations. Experienced in
                        delivering B2B/B2C platforms and shopify widgets. Passionate about
                        remote-first development, clean code and scalable systems.
                    </p>
                </section>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
                    {/* Left: Experience and Projects */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Work Experience */}
                        <section>
                            <h2 className="text-xl font-semibold text-green-400 mb-4">WORK EXPERIENCES</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-white">Software Engineer <span className="text-gray-400">– Multipl | Sept 2022 - May 2025</span></h3>
                                    <ul className="list-disc pl-6 text-gray-300 text-sm mt-1">
                                        <li>Built a reusable and dynamic B2B widget with ReactJS and Bootstrap,
                                            integrating REST APIs for live data updates. Designed to be embedded
                                            on partner websites, it helped streamline integration and significantly
                                            reduce the onboarding effort for business partners.</li>
                                        <li>Designed and developed Multipl's website using ReactJS, Next.js, and
                                            performance optimization tools. Delivered a fast, scalable, and
                                            SEO-optimized platform, which enhanced the brand's digital presence
                                            and led to increased user traffic and engagement.</li>

                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Software Engineer <span className="text-gray-400">– Hyperreality | Jun 2022 - Sep 2022</span></h3>
                                    <ul className="list-disc pl-6 text-gray-300 text-sm mt-1">
                                        <li>Designed and developed dynamic, reusable web components with
                                            React, leveraging state management tools like Redux, Context API,
                                            and custom hooks to manage application state effectively. Focused on
                                            creating seamless and responsive user experiences across devices.</li>

                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Software Engineer <span className="text-gray-400">– Zerozilla | Oct 2021 - May 2022</span></h3>
                                    <ul className="list-disc pl-6 text-gray-300 text-sm mt-1">
                                        <li>Led the development of a full-stack Shopify integration, combining a
                                            dynamic frontend widget with robust backend APIs to enable seamless
                                            client-Shopify communication. Technologies used included React,
                                            Bootstrap, NestJS, and MongoDB. Designed and deployed a
                                            Shopify-compatible payment gateway using NestJS and MongoDB,
                                            ensuring secure and scalable transaction processing. Implemented
                                            features such as tokenized payments, asynchronous webhook
                                            handling, and OAuth-based user authorization, achieving and
                                            PCI-compliant data handling.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Software Engineer <span className="text-gray-400">– TCPL | jan 2020 - Oct 2021</span></h3>
                                    <ul className="list-disc pl-6 text-gray-300 text-sm mt-1">
                                        <li>Designed and implemented full-stack B2B and B2C financial service
                                            applications using the MERN stack—MySQL for flexible data
                                            modeling, Express.js/Node.js for backend APIs, and React for building
                                            responsive, user-friendly interfaces. Emphasized scalability, data
                                            security, and seamless integration with third-party financial APIs.</li>
                                    </ul>
                                </div>
                                {/* Add more roles similarly */}
                            </div>
                        </section>


                    </div>

                    {/* Right: Sidebar Info */}
                    <div className="space-y-8">
                        {/* Skills */}
                        <section>
                            <h2 className="text-xl font-semibold text-green-400 mb-3">SKILLS</h2>
                            <div>
                                <h4 className="text-sm text-gray-400 font-semibold">Technical</h4>
                                <ul className="text-sm text-gray-300 list-disc pl-5">
                                    <li>JavaScript/Angular/React/Vue</li>
                                    <li>Node.js</li>
                                    <li>PostgreSQL/MySQL</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-sm text-gray-400 font-semibold">Professional</h4>
                                <ul className="text-sm text-gray-300 list-disc pl-5">
                                    <li>Strong problem solver</li>
                                    <li>Effective communication</li>
                                </ul>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-xl font-semibold text-green-400 mb-4">PROJECTS</h2>
                            <div className="space-y-6">
                                
                                    <ul className="text-sm text-gray-300 list-disc pl-5">
                                        <li>B2B Widget</li>
                                        <li>Shopify Widget</li>
                                        <li>Shopify Custom Payment Gateway</li>
                                        <li>Fintech Application (B2B & B2C)</li>
                                        <li>Web Applications</li>
                                        <li>API Impementation</li>
                                    </ul>

                                {/* Add more projects similarly */}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-xl font-semibold text-green-400 mb-3">EDUCATION</h2>
                            <ul className="text-sm text-gray-300 list-disc pl-5">
                                <li>
                                    Master of Computer Applications<br />
                                    <span className="text-gray-400">Visvesvaraya Technological
                                        University, 2010 - 2011</span>
                                </li>
                                <li className="mt-2">
                                    Bachelor of Computer Science Applications<br />
                                    <span className="text-gray-400">Tilka Manjhi Bhagalpur
                                        University,Bhagalpur, 2007 - 2010</span>
                                </li>
                            </ul>
                        </section>

                        {/* Awards */}
                        {/* <section>
                            <h2 className="text-xl font-semibold text-green-400 mb-3">AWARDS</h2>
                            <ul className="text-sm text-gray-300 list-disc pl-5">
                                <li>Award Lorem Ipsum – Microsoft (2019)</li>
                                <li>Award Donec Sodales – Oracle (2017)</li>
                            </ul>
                        </section> */}

                        {/* Languages */}
                        <section>
                            <h2 className="text-xl font-semibold text-green-400 mb-3">LANGUAGES</h2>
                            <ul className="text-sm text-gray-300 list-disc pl-5">
                                <li>English</li>
                                <li>Hindi</li>
                            </ul>
                        </section>

                        {/* Interests */}
                        {/* <section>
                            <h2 className="text-xl font-semibold text-green-400 mb-3">INTERESTS</h2>
                            <ul className="text-sm text-gray-300 list-disc pl-5">
                                <li>Climbing</li>
                                <li>Photography</li>
                                <li>Snowboarding</li>
                                <li>Travelling</li>
                            </ul>
                        </section> */}
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center space-x-6">
                    <a href="https://github.com/Kartik84094" className="hover:text-white">github.com/Kartik84094</a>
                    <a href="https://www.linkedin.com/in/kartik-kumar-2942211ab/" className="hover:text-white">linkedin.com/in/kartik-kumar-2942211ab</a>
                    <a href="https://x.com/Kartikk97429066" className="hover:text-white">@Kartikk97429066</a>
                </footer>
            </div>
        </div>
    );
}
