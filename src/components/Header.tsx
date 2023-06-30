import Link from 'next/link'

const Header = () => {
  return (
      <header>
          <h1 className="text-4xl font-bold text-center mt-10 mb-5">Img<span className='text-orange-600'>hub</span></h1>
          <nav className='overflow-auto hide_scrollbar'>
              <ul className="flex justify-center gap-5">
                  <li><Link href="#" className='hover:text-orange-600 transition-colors font-medium'>Nature</Link></li>
                  <li><Link href="#" className='hover:text-orange-600 transition-colors font-medium'>Technology</Link></li>
                  <li><Link href="#" className='hover:text-orange-600 transition-colors font-medium'>Science</Link></li>
                  <li><Link href="#" className='hover:text-orange-600 transition-colors font-medium'>People</Link></li>
                </ul>
          </nav>
    </header>
  )
}

export default Header