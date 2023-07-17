import React from 'react'
import { DropdownTypes, SubmenuType } from '@/types'
import Link from 'next/link'

const Dropdown = ({ menuItems }: DropdownTypes) => {
  return (
    <ul
      className={`nav__dropdown flex items-center absolute shadow-lg`}
    >
      {menuItems.map(({ id, path, title }: SubmenuType) => (
        <li
          className="flex items-center"
          key={id}
        >
          <Link href={path} className='hover:underline hover:underline-offset-8'>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown