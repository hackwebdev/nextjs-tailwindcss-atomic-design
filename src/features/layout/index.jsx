import Link from '@/ui/link'

export default function Layout({ children }) {
  return (
    <div className='mx-auto '>
      <header className='flex bg-gray-100 px-4 h-16 items-end pb-3'>
        <div className=''>
          <Link href='/'>Home</Link>
        </div>
        <div className='flex-grow mx-3'>menu</div>
        <div className=''>
          <ul>
            <li>
              <Link href='/users/login'>Log in</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className='px-4 my-16'>{children}</div>
      <footer className='px-4'>Footer</footer>
    </div>
  )
}
