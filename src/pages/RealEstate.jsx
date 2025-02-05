import React from 'react'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next';

const RealEstate = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='flex'>
      <div className='w-[22%] h-[92.8vh]'> <Navbar /> </div>
      <div className='w-[78%] h-[100vh] px-[64px] pt-[52px] border-l-[1px] border-[#D3D3D3] flex flex-col gap-7'>
        <h1 className='text-[24px] font-bold'>{t('dashboard.comingSoon')}</h1>
      </div>
    </div>
  )
}

export default RealEstate