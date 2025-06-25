import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="mt-6 flex items-center text-sm text-gray-400 space-x-2">
      {darkMode ? <FaSun /> : <FaMoon />}
      <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
}
