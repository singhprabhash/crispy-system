import React from 'react';
import { footerLinks } from '@/FactoryData/footerLinks';
import Image from 'next/image';

// type Props = {}

const Footer = () => {
  return (
    <div className=" text-app-white md:px-8 h-auto">

      <div className='footer__grid my-2'>
        <div className='flex items-center'>
          <Image src="/footer-logo.svg" width={80} height={120} alt="logo" />
          {/* <p className='mx-3 text-xs'>We create your wealth</p> */}
        </div>
        <div className='footer__navigation-grid'>
          {
            footerLinks.map((data, idx) => (
              data.links.map((sublinks, idx) => (
                <div key={idx} className='footer__grid-area'>
                  <a className='text-sm font-light' href={sublinks.path}>{sublinks.title}</a>
                </div>
              ))
            ))
          }
        </div>
        <div className='address__grid text-sm font-light'>
          <div className='address-block'>Address</div>
          <div className='address-block'>Contact</div>

        </div>
      </div>
    </div>
  )
}

export default Footer