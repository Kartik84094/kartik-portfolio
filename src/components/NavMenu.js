import { NavLink } from 'react-router-dom';
import { FaUser, FaBriefcase, FaDollarSign, FaFileAlt, FaBlog, FaAddressBook } from 'react-icons/fa';

export default function NavMenu() {
  const links = [
    { to: '/', label: 'About Me', icon: <FaUser /> },
    { to: '/portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { to: '/resume', label: 'Resume', icon: <FaFileAlt /> },
    { to: '/contact', label: 'Contact', icon: <FaAddressBook /> },
  ];

  return (
    <ul className="space-y-3 w-full text-sm mt-4">
      {links.map(({ to, label, icon }) => (
        <li key={to}>
          <NavLink to={to} className={({ isActive }) => `flex items-center px-2 py-1 rounded ${isActive ? 'text-green-400' : 'text-white'}`}>
            {icon}
            <span className="ml-2">{label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
