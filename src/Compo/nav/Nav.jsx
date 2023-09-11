import React from 'react';
import './nav.css';
import { motion } from 'framer-motion';

const navItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/About' },
  { text: 'Projects', link: '/Projects' },
  { text: 'Contact', link: '/contact' },
];

function Nav() {
  return (
    <motion.nav
      className="navbar"
      
    >
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="nav-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={item.link}>{item.text}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Nav;
