import React from 'react'
import { DropdownTypes } from '@/types'
import Link from 'next/link'

const Dropdown = ({ menuItems, hideSubMenu }: DropdownTypes) => {
  return (
    <ul
      className={`nav__dropdown flex items-center absolute shadow-lg`}
      onMouseLeave={hideSubMenu}

    >
      {menuItems.map(({ id, path, title }) => (
        <li
          className="flex items-center"
          key={id}
        >
          <Link href={path}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown