// import type { Metadata } from '@payloadcms/types'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React, { cache } from 'react'

import { Page as PageType } from '@/payload-types' // manueel toegevoegd
import { RenderBlocks } from '@/utils/RenderBlocks'
import { notFound } from 'next/navigation'

// helper function to get the pagedocument by slug
const queryPagesBySlug = cache(async ({ slug }: { slug: string }) => {
  // this is for solving the issue with the slug being encoded (eg special characters in foreign languages)
  const parsedSlug = decodeURIComponent(slug)

  const payload = await getPayloadHMR({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })

  return result.docs?.[0] || null // the docs is needed because you use the ?
})

// this is the function that will be called at build time to generate the static pages
export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
  })
  return pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'index'
    })
    .map(({ slug }) => slug)
}

export default async function Page({ params: { slug = 'index' } }) {
  let page: PageType | null

  page = await queryPagesBySlug({ slug })
  if (!page) {
    return notFound()
  }
  
  return (
    <div className="pt-16 pb-24">
      <RenderBlocks blocks={page.layout} />
    </div>
  )
}
