'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SlGraph } from 'react-icons/sl'
const NavBar = () => {
  const currentPath = usePathname()

  return (
    <nav className='flex justify-between space-x-6 border-b mb-5 px-5 h-14 items-center'>
     <div className='flex gap-6 items-center '>
     <Link href="/">
        <p><SlGraph /></p>
      </Link>
      <ul className='flex space-x-6 '>
        <li>
          <Link className={`${currentPath === "/" ? "text-zinc-900" : "text-zinc-500"} hover:text-zinc-800 transition-colors font-medium`} href='/'>Dashboard</Link>
        </li>
        <li>
          <Link className={`${currentPath === "/issues" ? "text-zinc-900" : "text-zinc-500"} hover:text-zinc-800 transition-colors font-medium`} href='/issues'>Issues</Link>
        </li>
      </ul>
     </div>
     <div className=''>
      ads
     </div>


    </nav>
  )
}

export default NavBar