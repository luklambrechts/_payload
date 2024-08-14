import Image from 'next/image'
import React from 'react'

export default function ImageBlockServer({ image }: { image: { url: string; alt: string } }) {
  return (
    <div className="flex max-w-5xl mx-auto justify-center">
      <Image src={image.url} alt={image.alt} width={500} height={500}></Image>
    </div>
  )
}
