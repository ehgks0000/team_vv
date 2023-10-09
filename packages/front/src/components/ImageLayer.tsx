import React, { FC, useCallback, useRef } from 'react'
import useImage from 'use-image'
import { Image, Layer, Stage } from 'react-konva'
import { useAtomValue } from 'jotai'
import { hairAtom } from '@/atoms/parts/hair'
import { toPng } from 'html-to-image'

type Props = {}

const ImageLayer = ({}: Props) => {
  const hair = useAtomValue(hairAtom)

  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <>
      <div ref={ref}>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <DraggableImage imagePath={'/next.svg'} />
            <DraggableImage imagePath={hair} />
          </Layer>
        </Stage>
      </div>
      <button className="absolute top-0" onClick={onButtonClick}>
        저장 테스트
      </button>
    </>
  )
}

interface DraggableImageProps {
  imagePath: string
}

const DraggableImage: FC<DraggableImageProps> = ({ imagePath }) => {
  const [image] = useImage(imagePath)

  return <Image image={image} draggable scaleX={1} />
}

export default ImageLayer
