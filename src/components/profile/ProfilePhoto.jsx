import React from 'react'
import photo from '../../assets/what_is_image_Processing.avif'


export const ProfilePhoto = () => {
  return (
    <div className='p-5'>
        <h1 className='py-3'>My Photo : </h1>
    <img src={photo} alt="profilePhoto" />
    </div>
  )
}
