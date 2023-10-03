'use client'

import React, { useRef } from 'react'
import { useAtom } from 'jotai'
import { isAvatarModalOpenAtom } from '@/atoms/modal'
import useClickOutside from '@/hooks/useClickOutside'
import { selectedTabAtom } from '@/atoms/modal/selectedTab'
import Image from 'next/image'
import { partsAtom } from '@/atoms/parts'
import { hairAtom } from '@/atoms/parts/hair'

const AvataModal = () => {
  const [isOpen, setIsOpen] = useAtom(isAvatarModalOpenAtom)
  const [selectedTab, setSelectedTab] = useAtom(selectedTabAtom)
  const [, setHair] = useAtom(hairAtom)
  const modalRef = useRef<HTMLDivElement>(null)

  useClickOutside(modalRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName)
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const getTabClassName = (tabName: string) =>
    `py-2 cursor-pointer ${selectedTab === tabName ? 'border-b-2 border-black' : ''}`

  return (
    <div
      ref={modalRef}
      className={`absolute bg-white bottom-0 left-0 w-full transition-all duration-300 rounded-t-lg shadow-lg`}
      style={{ height: isOpen ? '250px' : '50px' }}>
      <div className="bg-white rounded-t-lg relative flex flex-col justify-between text-black">
        <div className="flex justify-around border-b-2">
          <div onClick={() => handleTabClick('tab1')} className={getTabClassName('tab1')}>
            머리스타일
          </div>
          <div onClick={() => handleTabClick('tab2')} className={getTabClassName('tab2')}>
            얼굴형
          </div>
          <div onClick={() => handleTabClick('tab3')} className={getTabClassName('tab3')}>
            눈
          </div>
        </div>
        <div className="flex-grow">
          {selectedTab === 'tab1' && (
            <div>
              <div>
                <Image
                  onClick={() => setHair('/hair/hair_1.png')}
                  src={'/hair/hair_1.png'}
                  width={60}
                  height={60}
                  alt={'hair_1'}
                />
              </div>
              <div>
                <Image
                  onClick={() => setHair('/hair/hair_2.png')}
                  src={'/hair/hair_2.png'}
                  width={60}
                  height={60}
                  alt={'hair_2'}
                />
              </div>
            </div>
          )}
          {selectedTab === 'tab2' && <div>탭 2의 내용</div>}
          {selectedTab === 'tab3' && <div>탭 3의 내용</div>}
        </div>
      </div>
    </div>
  )
}

export default AvataModal
