import React from 'react'

function Image({src, alt, className}) {
  return (
    <img 
        src={`http://localhost:1111/${src?.replace(/\\/g, "/")}`}
        alt={alt}
        className={className}
    />
  )
}

export default Image
