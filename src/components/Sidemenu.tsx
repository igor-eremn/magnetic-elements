import React, { useState, useContext } from 'react';
import styles from '../styles/Sidemenu.module.css';
import { ThemeContext } from '../context/ThemeContext';

const Sidemenu: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme } = themeContext;
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { name: 'Option 1', submenu: ['Subitem 1A', 'Subitem 1B', 'Subitem 1C', 'Subitem 1D', 'Subitem 1E', 'Subitem 1F'] },
    { name: 'Option 2', submenu: ['Subitem 2A', 'Subitem 2B'] },
    { name: 'Option 3', submenu: ['Subitem 3A', 'Subitem 3B'] },
    { name: 'Option 4', submenu: ['Subitem 1A', 'Subitem 1B', 'Subitem 1C', 'Subitem 1D'] },
    { name: 'Option 5', submenu: ['Subitem 5A', 'Subitem 5B'] },
    { name: 'Option 6', submenu: ['Subitem 6A', 'Subitem 6B'] },
    { name: 'Option 7', submenu: ['Subitem 7A', 'Subitem 7B', 'Subitem 7C'] },
    { name: 'Option 8', submenu: ['Subitem 8A', 'Subitem 8B'] },
    { name: 'Option 9', submenu: ['Subitem 9A', 'Subitem 9B'] },
    { name: 'Option 10', submenu: ['Subitem 10A', 'Subitem 10B'] },
    { name: 'Option 11', submenu: ['Subitem 11A', 'Subitem 11B'] },
    { name: 'Option 12', submenu: ['Subitem 12A', 'Subitem 12B'] },
    { name: 'Option 13', submenu: ['Subitem 13A', 'Subitem 13B'] },
    { name: 'Option 14', submenu: ['Subitem 14A', 'Subitem 14B'] },
    { name: 'Option 15', submenu: ['Subitem 15A', 'Subitem 15B'] },
  ];

  return (
    <div className={`${styles.page} ${theme === 'light' ? styles.light : styles.dark}`}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={styles.menuItem}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.name}
            {hoveredItem === item.name && (
              <ul className={styles.submenu}>
                {item.submenu.map((subitem) => (
                  <li key={subitem} className={styles.submenuItem}>
                    {subitem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidemenu;