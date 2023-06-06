import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>
    <div className='flex flex-col justify-center h-screen bg-bg_back text-black items-center text-center text-6xl'>
        <div>Vielen Dank für Ihre Bestellung</div>
        <Link href={"/"} className='p-5 text-4xl'>Zurück</Link>
        </div>
        </>
  )
}

export default page