import Link from 'next/link'
import React from 'react'
import AboutMe from './about-me'
import SideMenu from './side-menu'

const Navigation = () => {
  return (
    <div className='flex justify-between bg-white text-black opacity-100 h-20 items-center px-4 md:px-8'>
      <AboutMe />
      <SideMenu/>
    </div>
  )
}

export default Navigation
