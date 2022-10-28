import React from 'react'

const CloudinaryImage = ({ id }) => {
  const url = `https://res.cloudinary.com/dorrinypn/image/upload/${id}.jpg` 
  return (
    <img width="50%" src={url} alt="" />
  )
}

export default CloudinaryImage