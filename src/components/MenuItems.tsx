import React from 'react'
import { MdOutlineExpandMore } from "react-icons/md";
import Dropdown from "./Dropdown";
import { navListTypes } from "../../types";
import { useEffect, useState } from "react";
import styles from "../../styles/nav.module.css";
import {motion} from "framer-motion";

interface MenuItemsProps {
  menuItem: navListTypes;
  open?: Boolean
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};


const MenuItems: React.FC<MenuItemsProps> = ({ menuItem }) => {

  const [show, setShow] = useState(false);

  const showSubMenu = () => setShow(true);
  const hideSubMenu = () => setShow(false);

  useEffect(() => { }, [show]);

  return (
    <motion.li
      initial="closed"
      animate="open"
      exit="closed"
      variants={sideVariants}
      className="text-sm font-medium flex items-center relative"
      onMouseEnter={showSubMenu}
      onMouseLeave={hideSubMenu}
    >
      <a
        href={menuItem.path}
        className={`${styles.link} ${menuItem.submenu ? "mr-2" : ""}`}
      >
        {menuItem.title}
      </a>
      {menuItem.submenu && <MdOutlineExpandMore className={`font-bold ${show ? 'rotate-180 transition-all' : ''}`} />}

      {(menuItem.submenu && show) && (
        <Dropdown
          menuItems={menuItem.submenu}
        />
      )}
    </motion.li>
  )
}

export default MenuItems