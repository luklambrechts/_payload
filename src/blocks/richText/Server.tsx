import React from 'react'
import config from '@payload-config';
// import { serializeLexical } from '@/utils/serialize';

export default function RichTextBlockServer({ content }: { content: any }) {
  return (
    <div className="richText max-w-5xl mx-auto">
      {/* {serializeLexical({nodes: content.root.children})} */}
    </div>
  )
}