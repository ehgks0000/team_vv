import React, { FC } from 'react'
import useImage from 'use-image'
import { Image, Layer, Stage } from 'react-konva'
import { useAtomValue } from 'jotai'
import { hairAtom } from '@/atoms/parts/hair'

type Props = {}

const ImageLayer = ({}: Props) => {
  const hair = useAtomValue(hairAtom)

  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <DraggableImage imagePath={'/next.svg'} />
          <DraggableImage imagePath={hair} />
        </Layer>
      </Stage>
    </div>
  )
}

interface DraggableImageProps {
  imagePath: string
}

const DraggableImage: FC<DraggableImageProps> = ({ imagePath }) => {
  const [image] = useImage(imagePath)

  return <Image image={image} draggable />
}

export default ImageLayer
