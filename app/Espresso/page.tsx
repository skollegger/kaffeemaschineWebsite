import React from 'react'
import Image from 'next/image'

function espresso() {
  return (
    <>
      <h1 className='text-center text-4xl'>Die Espresso Herstellung</h1>
      <Image src={"/Espresso/esspresso1.jpeg"} alt={""} height={300} width={400}/>
    </>
  )
}

export default espresso