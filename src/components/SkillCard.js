import React from 'react';

export default function SkillCard({ title, icon, description }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <div className="text-green-400 text-xl mb-2">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
}
