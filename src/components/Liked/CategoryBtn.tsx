interface NameProps {
  children: string
}

export default function CategoryBtn({ children }: NameProps) {
  return <button className="w-16 h-10 text-center border rounded-md cursor-pointer border-black/10 text-black/50 hover:text-black hover:border-black/50">{children}</button>
}
