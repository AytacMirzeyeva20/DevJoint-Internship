import React from 'react'

export default function SearchBar({search,setSearch}) {
  return (
    <>
      <div className='mt-50'>
        <h1 className='text-center text-5xl font-bold'>Discover Amazing Movies</h1>
        <p className='text-center text-[20px] mt-2'> Search thousands of movies instantly.</p>
      </div>
      <div className='flex gap-6 justify-center items-center mt-7 mb-18'>
         <input type="text" placeholder="Search movie..." className='w-96 rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-red-500'  value={search}  onChange={(e) => setSearch(e.target.value)}/>
      <button className='rounded-3xl bg-red-500 px-8 py-3 font-semibold text-white hover:bg-red-600'>Search</button>
      </div>
    </>
  )
}
