import { Header } from '@/src/UI/Header/Header'
import { SubHeader } from '@/src/UI/Header/SubHeader'
import Image from 'next/image';
import React from 'react'
import styles from '../../../styles/ourworks.module.css';
import ourServices from "../../../FactoryData/ourServices.json";

function OurWork() {
  return (
    <div className='ourWorks__header snap-start px-8 lg:p-16 mt-5'>
      <Header
        highlightedHeader
        heading=""
        highlightedText="Our Works"
        remainingText=""
      />
      <SubHeader
        content="We work with top Indian Institutions to further our shared mission of improving ease of doing business and promoting Entrepreneurship in India."
      />

      <div className={styles.gallery}>
      {ourServices.map((image) => (
        <div key={image.id} className={styles.galleryItem}>
          <Image
            src={`/service${image.image}`}
            alt={image.altText}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
      </div>
    </div>
  )
}

export default OurWork