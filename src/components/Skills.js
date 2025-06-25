import React from 'react';

const skills = [
  { icon: 'fab fa-js', title: 'JavaScript', desc: 'Vanilla JS and frameworks' },
  { icon: 'fab fa-react', title: 'React & Vue', desc: 'Component-based UIs' },
  { icon: 'fab fa-node', title: 'Node.js', desc: 'Backend with Express' },
  // Add others...
];

export default function Skills() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="mb-4">What I do</h2>
        <div className="row">
          {skills.map(s => (
            <div className="col-md-4 text-center mb-4" key={s.title}>
              <i className={`${s.icon} fa-3x mb-3 text-primary`}></i>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
