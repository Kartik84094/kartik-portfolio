import React from 'react';

const testimonials = [
  { name: 'Brandon James', org: 'Google', text: 'Simon is brilliant!' },
  { name: 'Kate Sanders', org: 'Uber', text: 'Simon is brilliant!' },
  // ...
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Testimonials</h2>
        <div className="row">
          {testimonials.map((t,i) => (
            <div className="col-md-4 mb-4" key={i}>
              <blockquote className="blockquote">
                <p className="mb-1">"{t.text}"</p>
                <footer className="blockquote-footer">{t.name}, {t.org}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
