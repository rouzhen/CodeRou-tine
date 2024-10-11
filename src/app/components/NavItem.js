// NavItem.js
import Link from 'next/link';

const NavItem = ({ href, children }) => {
  return (
    <li className="relative group">
      <Link href={href} className="hover:text-sky-500 hover:underline transition duration-300 ease-in-out">
        {children}
      </Link>
      <span className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg "></span>
    </li>
  );
};

export default NavItem;
