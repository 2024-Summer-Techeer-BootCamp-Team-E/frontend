import { useNavigate } from 'react-router-dom'
import HamburgerMenu from '../HamburgerMenu'
import MenuBtn from '../MenuBtn'

interface HeaderProps {
  menu: boolean
  handleClickMenu: () => void
  handleClickLogo: () => void
}

export function LikedHeader({ menu, handleClickMenu, handleClickLogo }: HeaderProps) {
  return (
    <div className="flex px-6 relative items-center justify-between w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[62.5rem] h-14 my-6 bg-mainBg">
      <span className="text-xl font-bold cursor-pointer sm:text-2xl text-hongsi" onClick={handleClickLogo}>
        알뜰살뜰
      </span>
      <div className="absolute right-3" onClick={handleClickMenu}>
        <HamburgerMenu />
      </div>
      {menu && (
        <div className="absolute z-10 border xl:-right-40 xl:top-3 top-16 border-black/5 right-1">
          <div className="z-0 absolute w-5 h-5 transform rotate-45 border border-black/3 -translate-x-1/2 shadow-xl bg-mainBg xl:top-2 xl:-left-[1px] -top-2 left-24 sm:left-24" />
          <div className="relative flex flex-col items-center justify-center w-32 gap-4 p-2 text-center shadow-xl h-36 bg-mainBg">
            <MenuBtn>메인페이지</MenuBtn>
            <MenuBtn>깃허브</MenuBtn>
            <MenuBtn>로그아웃</MenuBtn>
          </div>
        </div>
      )}
    </div>
  )
}
