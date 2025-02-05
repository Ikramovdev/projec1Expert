import React from 'react'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next';
import DashboardHeader from '../components/DashboardHeader';
import i18next from 'i18next';
import { useLanguage } from '../context/LanguageContext';

const Guide = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const languageOptions = [
    { value: 'uz', label: 'uz' },
    { value: 'ru', label: 'ru' }
  ];
  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value.toLowerCase());
  }
  return (
    <>
      <div className='flex'>
        <div className='w-[22%] h-[92.8vh]'> <Navbar /> </div>
        <div className='w-[78%] h-[100vh] px-[64px] pt-[52px] border-l-[1px] border-[#D3D3D3] flex flex-col gap-7'>
          <DashboardHeader title={t('dashboard.guide.title')} language={language} handleLanguageChange={handleLanguageChange} languageOptions={languageOptions} />
          <iframe className='rounded-[30px]' width="97%" height="80%" src="https://www.youtube.com/embed/ej7xX2_ytcI?si=wF_b3ndKmNx1gtG9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Guide