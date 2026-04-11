//CREATE PAGE
import Link from 'next/link'
import React from 'react'

export default function Create() {
  return (
    <section className="flex p-20 items-center justify-center w-full">
      <form action="" className=" flex flex-col flex-1 rounded-lg bg-zinc-800 font-sans p-5">
        <Link href={'/notes'} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">&larr; Notes</Link>
        <p className="text-white text-lg font-semibold my-8">Crear Nota</p>

        <input type="text" placeholder='Title' className='p-2 rounded-md my-4 bg-zinc-700' />
        <textarea name="" id="" placeholder="coment" className='p-2 rounded-md my-4 bg-zinc-700' rows={10} />
        <button className='bg-blue-600 text-white p-2 rounded-md'>Save</button>
        </form>
    </section>
  );
}
