import { useState } from 'react'

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [hamburgerBg, setHamburgerBg] = useState(false)

  const activeClassTop = 'origin-top-left transform rotate-45 '
  const activeClassBottom = 'origin-bottom-left transform -rotate-45 mt-3'
  const hamburgerBgActive = 'bg-hongsi'

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col cursor-pointer " onClick={() => setOpenMenu(!openMenu)} onMouseOver={() => setHamburgerBg(true)} onMouseLeave={() => setHamburgerBg(false)}>
        <div className={`transition duration-300 ease-in-out bg-hongsi w-10 h-1.5 mb-2 ${openMenu ? activeClassTop : ''} ${hamburgerBg ? hamburgerBgActive : ''}`}></div>
        <div className={`transition duration-300 ease-in-out bg-hongsi w-10 h-1.5 ${openMenu ? activeClassBottom : ''} ${hamburgerBg ? hamburgerBgActive : ''}`}></div>
      </div>
    </div>
  )
}

export default HamburgerMenu
