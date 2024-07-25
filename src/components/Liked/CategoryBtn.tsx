interface NameProps {
  children: string
  onClick: () => void
  isSelected: boolean
}

export default function CategoryBtn({ children, onClick, isSelected }: NameProps) {
  return (
    <button className={`w-20 h-10 text-sm text-center border rounded-lg  text-md  ${isSelected ? 'border-black  ' : ' border-lightgray'} text-center rounded-lg px-3 border-2`} onClick={onClick}>
      {children}
    </button>
  )
}
