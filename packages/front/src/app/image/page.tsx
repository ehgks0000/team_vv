'use client'
import dynamic from 'next/dynamic'

const ImageLayer = dynamic(() => import('../../components/ImageLayer'), {
  ssr: false,
})

import React from 'react'

const ImageTest = () => {
  // 이미지를 로드

  return (
    <div>
      <ImageLayer />
    </div>
  )
}

export default ImageTest
