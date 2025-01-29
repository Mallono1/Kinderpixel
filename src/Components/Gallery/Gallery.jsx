import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/img/gallery-1.jpg'
import gallery_2 from '../../assets/img/gallery-2.jpg'
import gallery_3 from '../../assets/img/gallery-3.jpg'
import gallery_4 from '../../assets/img/gallery-4.jpg'

function Gallery() {
  return (
    <div className='gallery'>
    <div className='galleryFotos'>
        <img src={gallery_1} alt='' />
        <img src={gallery_2} alt='' />
        <img src={gallery_3} alt='' />
        <img src={gallery_4} alt='' />
    </div>
    </div>
  )
}

export default Gallery