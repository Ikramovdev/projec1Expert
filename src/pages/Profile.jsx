import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Context } from '../context/Context'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const { userName } = useContext(Context)
  const { t } = useTranslation();
  return (
    <>
      <div className='flex'>
        <div className='w-[22%] h-[92.8vh]'> <Navbar /> </div>
        <div className='w-[78%] h-[99vh] overflow-y-auto border-l-[1px] border-[#D3D3D3] pl-[68px] pt-[32px]'>
          <div>
            <h2 className='font-semibold text-[32px] leading-[38.73px] text-black'>{t('dashboard.profile.title')}</h2>
            <div className='flex items-center gap-[45px] mt-[16px]'>
              <div className='rounded-full w-[129px] h-[129px] bg-gray-300'></div>
              {/* <img className='rounded-full w-[129px] h-[129px]' src="https://picsum.photos/300/200" alt="randow image" width={129} height={129} /> */}
              <div>
                <p className='font-semibold text-[40px] leading-[48.41px] text-black'>{userName}</p>
                <a href='tel:+998930576472' className='font-semibold text-[16px] leading-[19.36px] text-[#979797]'>+998930576472</a>
              </div>
            </div>
            <div className='flex items-center gap-[30px] mt-[32px]'>
              <label className={`w-[123px] py-[8px] text-center border-[1px] border-[#1E90FFCC] rounded-[8px]`}>
                <span className='text-[#1E90FFCC]'>{t('dashboard.profile.changeAvatar')}</span>
                <input className='border-none w-full h-full hidden' placeholder='Change Avatar' type='file' />
              </label>
              <button onClick={(e) => e.target.classList.add('isActive')} className={`${'isActive' ? "border-[#1E90FFCC] text-[#1E90FFCC]" : "text-[#949CB1] border-[#949CB1]"} w-[123px] py-[8px] text-center border-[1px] rounded-[8px]`}>{t('dashboard.profile.oneId')}</button>
            </div>
          </div>
          <div className='mt-[32px] mb-[323px]'>
            <div className='flex items-center gap-[37px] mb-[38px]'>
              <p>{t('dashboard.profile.accountInformation')}</p>
              <span className='w-[709px] h-[3px] bg-[#F2F2F2]'></span>
            </div>
            <form className='flex items-center flex-wrap gap-[75px]'>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>{t('dashboard.profile.name')}</span>
                <input className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-[#1E90FFCC]' type="text" placeholder='Behzod' aria-label='Your Name' />
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>{t('dashboard.profile.surname')}</span>
                <input className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-[#1E90FFCC]' type="text" placeholder='Ismoilov' aria-label='Your surName' />
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>{t('dashboard.profile.age')}</span>
                <input className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-[#1E90FFCC]' type="num" placeholder={t('dashboard.profile.agePlaceholder')} aria-label='Your age' />
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>{t('dashboard.profile.sex')}</span>
                <select className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black text-black focus:text-[#1E90FFCC]'>
                  <option value="" disabled selected>{t('dashboard.profile.genderPlaceholder')}</option>
                  <option value="Erkak">{t('dashboard.profile.male')}</option>
                  <option value="Ayol">{t('dashboard.profile.female')}</option>
                </select>
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>{t('dashboard.profile.region')}</span>
                <select className='w-[254px] py-[12px] pl-[15px] pr-[15px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] placeholder:text-black focus:text-[#1E90FFCC]' type="select" placeholder={t('dashboard.profile.regionPlaceholder')} aria-label='Your Name' >
                  <option value="" disabled selected>{t('dashboard.profile.regionPlaceholder')}</option>
                  <option value="Toshkent">{t('dashboard.profile.andijon')}</option>
                  <option value="Toshkent">{t('dashboard.profile.buxoro')}</option>
                  <option value="Toshkent">{t('dashboard.profile.fargona')}</option>
                  <option value="Toshkent">{t('dashboard.profile.jizzax')}</option>
                  <option value="Toshkent">{t('dashboard.profile.xorazm')}</option>
                  <option value="Toshkent">{t('dashboard.profile.namangan')}</option>
                  <option value="Toshkent">{t('dashboard.profile.navoiy')}</option>
                  <option value="Toshkent">{t('dashboard.profile.qashqadaryo')}</option>
                  <option value="Toshkent">{t('dashboard.profile.samarqand')}</option>
                  <option value="Toshkent">{t('dashboard.profile.sirdaryo')}</option>
                  <option value="Toshkent">{t('dashboard.profile.surxondaryo')}</option>
                  <option value="Toshkent">{t('dashboard.profile.toshkent')}</option>
                </select>
              </label>
              <label className='flex flex-col'>
                <span className='font-semibold text-[20px] leading-[24.2px] text-[#949CB1]'>{t('dashboard.profile.cadastralNumber')}</span>
                <input className='w-[254px] py-[12px] pl-[15px] pr-[4px] mt-[10px] rounded-[12px] bg-transparent outline-none border-[2px] border-[#979797] focus:border-[#1E90FFCC] focus:text-[#1E90FFCC] text-black' type="text" placeholder={t('dashboard.profile.cadastralPlaceholder')} aria-label='Your Name' />
              </label>
            </form>
            <div className='mt-[54px] flex items-center gap-[30px]'>
              <button className='w-[111px] py-[10px] text-center border-[1.21px] border-[#979797] text-[#979797] hover:text-white hover:bg-[#1E90FFCC] rounded-[8.48px]  duration-300 hover:border-transparent '>{t('dashboard.profile.cancel')}</button>
              <button className='w-[111px] py-[10px] text-center border-[1.21px] border-[#979797] text-[#979797] hover:text-white hover:bg-[#1E90FFCC] rounded-[8.48px]  duration-300 hover:border-transparent '>{t('dashboard.profile.save')}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile