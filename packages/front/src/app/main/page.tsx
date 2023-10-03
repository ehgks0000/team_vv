'use client'

import AvataModal from '@/components/modal/AvataModal'
import React from 'react'
import dynamic from 'next/dynamic'

const ImageLayer = dynamic(() => import('../../components/ImageLayer'), {
  ssr: false,
})

export default function Main() {
  return (
    <div>
      <ImageLayer />
      <div className="bg-amber-400">
        <AvataModal />
      </div>
    </div>
  )
}
