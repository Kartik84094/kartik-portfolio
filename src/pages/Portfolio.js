import React from 'react';

const projects = [
    {
        id: 1,
        title: "B2B Widget",
        description:
            "A B2B Widget is typically a front-end UI component integrated into websites or dashboards that enables B2B functionality, such as:",
        client: "Multipl",
        image: "images/b2b.webp", // Replace with your image path
    },
    {
        id: 2,
        title: "Shopify Widget",
        description:
            "A Shopify Widget is a small piece of code (usually JavaScript, HTML/CSS) that adds a specific feature or functionality to a Shopify storefront, often placed in key areas like the homepage, product page, cart, or checkout.",
        client: "Zerozilla",
        image: "images/shopify.webp",
    },
    {
        id: 3,
        title: "Shopify Custom Payment Gateway",
        description:
            "A Shopify Custom Payment Gateway is a tailor-made integration that allows a Shopify store to process payments through a non-standard or region-specific payment provider that isn’t listed in Shopify’s official payment gateway options.",
        client: "Zerozilla",
        image: "images/payment.jpg",
    },
    {
        id: 4,
        title: "Fintech Application (B2B & B2C)",
        description:
            "A Fintech Application is a software solution that leverages technology to deliver financial services in innovative, efficient, and user-friendly ways. These applications cater to both B2B (business-to-business) and B2C (business-to-consumer) markets, with differing goals and features.",
        client: "TCPL",
        image: "images/b2c.webp",
    },
    {
        id: 5,
        title: "Web Applications",
        description:
            "A web application built with ReactJS, Redux, and Bootstrap combines a powerful front-end architecture with elegant UI styling and centralized state management. This stack is ideal for building interactive, scalable, and responsive web apps.",
        client: "TCPL & Multipl",
        image: "images/code.jpg",
    },
    {
        id: 6,
        title: "API Impementation",
        description:
            "API Implementation refers to the process of creating, integrating, or consuming Application Programming Interfaces (APIs) in software applications. APIs act as bridges between different software systems, enabling them to communicate, exchange data, and trigger processes.",
        client: "TCPL & Multipl",
        image: "images/api.png",
    },
];

export default function Portfolio() {
    return (
        <div className="bg-gray-900 text-white px-4 sm:px-6 lg:px-24">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold">Portfolio</h2>
                <p className="text-gray-400 mt-4">
                    Welcome to my portfolio.
                </p>
                {/* <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium">
          💼 Hire Me
        </button> */}
            </div>

            {/* Filter Tabs */}
            {/* <div className="flex justify-center space-x-6 text-sm font-medium text-gray-400 mb-10">
        <button className="text-green-400 border-b-2 border-green-400 pb-1">All</button>
        <button>We App</button>
        <button>Frontend</button>
        <button>Backend</button>
      </div> */}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-5">
                            <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                            <p className="text-gray-500 text-xs mt-4">{project.client}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
