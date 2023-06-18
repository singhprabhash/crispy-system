import React from 'react'
import { BsFillTelephoneInboundFill } from 'react-icons/bs';

const FloatingButton = () => {
  return (
    <div className='floating__btn text-lg'>
      <BsFillTelephoneInboundFill /> 
      <span className='text-sm ml-3 -lg:hidden'>Contact Us</span>
    </div>
  )
}

export default FloatingButton