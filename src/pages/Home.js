import React from 'react';
import SkillCard from '../components/SkillCard';

export default function Home() {
  return (
    <div>
      <section>
        <h1 className="text-3xl sm:text-4xl font-bold">Kartik Kumar</h1>
        <h2 className="text-lg sm:text-xl text-gray-400">Software Engineer</h2>
        <p className="mt-4 max-w-xl text-sm sm:text-base">
          I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
           Want to know how I may help your project?
          Check out my project portfolio and
          resume.
        </p>

        

        {/* Responsive button layout */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 w-full sm:w-auto"><a href="/portfolio" className="">📁 View Portfolio</a></button>
          <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 w-full sm:w-auto"><a href="/resume" className="">📄 View Resume</a></button>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-2">💡 What I do</h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
          I have more than 5 years' experience building software.
          Below is a quick overview of my main technical skill sets and technologies I use.
          
        </p>

        {/* Responsive skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <SkillCard title="JavaScript & TypeScript" icon="JS"  description="JavaScript (JS) is a high-level, interpreted programming language primarily used for building interactive and dynamic web applications. It is a core technology of the web, alongside HTML and CSS."/>
          <SkillCard title="React, Vue & Next" icon="⚛" description="React and Vue are two of the most popular JavaScript frameworks/libraries for building modern, component-based front-end web applications. Each has its own philosophy, ecosystem, and strengths." />
          <SkillCard title="Node & Nest" icon="</>" description="Node.js and NestJS are both backend technologies built on JavaScript/TypeScript, with Node.js serving as the runtime and NestJS providing a structured framework on top of it."/>
          <SkillCard title="MongoDB , PostgreSQL & MySQL" icon="⛁" description="MongoDB, PostgreSQL, and MySQL are three of the most widely used databases in modern development. Each has its own strengths and is suited to different types of applications depending on data structure, scalability, and performance needs."/>
          <SkillCard title="AWS" icon="☁️"  description="Amazon Web Services (AWS) is the world’s leading cloud computing platform, offering a vast collection of on-demand services such as computing, storage, databases, machine learning, networking, and more."/>
        </div>
      </section>
    </div>
  );
}
