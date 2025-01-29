import React from 'react'
import ContactImage from "../../assets/images/contactImage.png"
import { CallIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, MessagesIcon, TwitterIcon } from '../../assets/icon/Icon'
import { useTranslation } from 'react-i18next'
const Contact = () => {
  const { t, i18n } = useTranslation()
  return (
    <section id='contact' className='mb-[68px] contactBottom'>
      <div className='w-[1157px] mx-auto'>
        <h2 className='font-bold text-[36px] leading-[40px] text-[#0F172A] text-center mb-[120px]'>{t('contact.title')}</h2>
        <div className='w-[1157px] border-[2px] border-black rounded-tl-[17px] rounded-tr-[17px] border-b-0 py-[34px] px-[18px]'>
          <div className='w-[1121px] border-[2px] border-b-0 contact border-black pt-[45px] pb-[38px] pl-[67px] pr-[45px] rounded-tl-[17px] rounded-tr-[17px] flex justify-between'>
            <div>
              <div className='w-[416px] mb-[103px]'>
                <h3 className='font-bold text-[36px] leading-[40px] ml-[25px] text-[#0F172A] mb-[23px]'>{t('contact.leftText1')}</h3>
                <p className='font-regular text-[20px] text-center leading-[28px] text-[#9E9E9E]'>Bizning hizmatlarimizdan foydalanish uchun ushbu havolalardan royhatdan oting</p>
              </div>
              <form className='flex flex-col'>
                <p className='font-bold text-[24px] leading-[36px] text-[#414141] mb-[23px]'>{t('contact.leftText2')}</p>
                <label className='w-[423px] flex flex-col gap-[5px] mb-[26px]'>
                  <p className='font-regular text-[14px] leading-[32px] ml-[22px] text-[#A7A7A7]'>{t('contact.leftText3')}</p>
                  <input className='ContactInput w-full border-[3px] py-[10px] pl-[10px] pr-[5px] border-[#A7A7A7] duration-300 focus:border-blue-500 rounded-[17px] outline-none' type="text" />
                </label>
                <label className='w-[423px] flex flex-col gap-[5px] mb-[14px]'>
                  <p className='font-regular text-[14px] leading-[32px] ml-[22px] text-[#A7A7A7]'>{t('contact.leftText4')}</p>
                  <input className='ContactInput w-full border-[3px] py-[10px] pl-[10px] pr-[5px] border-[#A7A7A7] duration-300 focus:border-blue-500 rounded-[17px] outline-none' type="email" />
                </label>
                <label className='w-[423px] flex flex-col gap-[5px]'>
                  <p className='font-regular text-[14px] leading-[32px] ml-[22px] text-[#A7A7A7]'>{t('contact.leftText5')}</p>
                  <input className='ContactInput w-full border-[3px] py-[30px] pl-[10px] pr-[5px] border-[#A7A7A7] duration-300 focus:border-blue-500 rounded-[17px] outline-none' type="text" />
                </label>
                <button className='w-[169px] py-[8px] border-[2px] border-black font-bold text-[16px] leading-[32px] text-black rounded-[17px] ml-[23px] mt-[53px] hover:bg-[#1E90FF] hover:border-transparent hover:text-white duration-300'>{t('contact.leftText7')}</button>
              </form>
            </div>
            <div className='flex flex-col'>
              <div className='contactImg mt-[27px] pt-[101px] pl-[103px] pr-[114px] pb-[43px]'>
                <img className='w-[204px] leading-[247px]' src={ContactImage} alt="ContactImage" width={204} height={247} />
              </div>
              <ul className='flex flex-col gap-[50px] mt-[20px]'>
                <li className='flex items-center gap-[40px]'>
                  <LocationIcon />
                  <p className='font-regular text-[14px] leading-[20px] text-black'>{t('contact.rightText1')}</p>
                </li>
                <li className='flex items-center gap-[40px]'>
                  <CallIcon />
                  <a href='tel:+99938901298' className='font-regular text-[14px] leading-[20px] text-black'>+99938901298 </a>
                </li>
                <li className='flex items-center gap-[40px]'>
                  <MessagesIcon />
                  <p className='font-regular text-[14px] leading-[20px] text-black'>e-expert@gmail.com</p>
                </li>
              </ul>
              <ul className='flex items-center gap-[43px] mt-[61px] ml-[10px]'>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <LinkedinIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact