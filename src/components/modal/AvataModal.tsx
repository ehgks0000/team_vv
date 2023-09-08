'use client'

import React, { useRef } from 'react'
import { useAtom } from 'jotai'
import { isAvatarModalOpenAtom } from '@/atoms/modal'
import useClickOutside from '@/hooks/useClickOutside'
import { selectedTabAtom } from '@/atoms/modal/selectedTab'

const AvataModal = () => {
  const [isOpen, setIsOpen] = useAtom(isAvatarModalOpenAtom)
  const [selectedTab, setSelectedTab] = useAtom(selectedTabAtom)
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
            탭 1
          </div>
          <div onClick={() => handleTabClick('tab2')} className={getTabClassName('tab2')}>
            탭 2
          </div>
          <div onClick={() => handleTabClick('tab3')} className={getTabClassName('tab3')}>
            탭 3
          </div>
        </div>
        <div className="flex-grow">
          {selectedTab === 'tab1' && <div>탭 1의 내용</div>}
          {selectedTab === 'tab2' && <div>탭 2의 내용</div>}
          {selectedTab === 'tab3' && <div>탭 3의 내용</div>}
        </div>
      </div>
    </div>
  )
}

export default AvataModal
