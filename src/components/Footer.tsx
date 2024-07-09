import Glass from '../assets/images/Search.png'

export default function Footer() {
  return (
    <div className="flex items-center justify-around w-screen min-h-20 bg-footer">
      <p className="text-2xl text-white">Check the lowest price!</p>
      <div className="relative">
        <div className="relative w-[400px] h-9 bg-white border rounded-2xl px-4 flex items-center">
          <input className="w-full h-full bg-transparent border-none outline-none text-black/40" placeholder="www.example.com" />
          <div className="absolute flex items-center justify-center w-16 h-6 rounded-2xl right-2 bg-hongsi">
            <img src={Glass} alt="돋보기" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
