import Glass from '../assets/images/Search.png'

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-screen sm:justify-around min-h-20 bg-footer">
      <p className="text-white lg:text-2xl sm:block md:text-xl">Check the lowest price!</p>
      <div className="relative">
        <div className="relative flex-row items-center hidden px-4 bg-white border sm:flex w-72 lg:w-96 md:w-80 h-9 rounded-2xl">
          <input className="w-full h-full text-sm bg-transparent border-none outline-none lg:text-lg md:text-md text-black/40" placeholder="www.example.com" />
          <div className="absolute flex items-center justify-center w-16 h-6 rounded-2xl right-2 bg-hongsi">
            <img src={Glass} alt="돋보기" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
