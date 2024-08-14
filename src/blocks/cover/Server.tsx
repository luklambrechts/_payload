import React from 'react'

export default function CoverBlockServer({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="py-20 max-w-5xl m-auto text-center bg-green-300">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl">{subtitle}</p>
    </div>
  )
}
