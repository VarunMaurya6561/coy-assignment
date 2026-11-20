import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[10%] px-2 flex items-center justify-between rounded-b-xl border-b flex-wrap shadow-[0px_5px_0px_rgba(0,0,0,0.9)]'>
      <div className="text-2xl font-bold">Coy.</div>
      <div className="h-full flex items-center gap-1 flex-wrap sm:gap-5">
        <Link to='/'>
          <button className='h-10 bg-amber-50 px-5 py-2 rounded-full font-semibold flex items-center border hover:bg-gray-100 cursor-pointer active:border-b-2'>Home</button>
        </Link>
        <Link to='/discover' >
          <button className='h-10 bg-amber-50 px-5 py-2 rounded-full font-semibold flex items-center border hover:bg-gray-100 cursor-pointer active:border-b-2'>Discover</button>
        </Link>
        <Link to='/notice' >
          <p className='mr-5'>User</p>
        </Link>
      </div>
    </div>
  )
}

export default Header