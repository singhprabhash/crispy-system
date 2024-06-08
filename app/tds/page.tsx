'use client';

import Navbar from '@/src/components/Navbar'
import { PackageCard } from '@/src/components/PackageCard'
import { FormTds } from "@/src/components/FormTds"
import React from 'react'

function Tds() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <FormTds />
    </div>
  )
}

export default Tds