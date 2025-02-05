import React from 'react'
import { AcceptIcon } from '../../assets/icon/Icon';
import { useTranslation } from 'react-i18next';
const WorksPrice = () => {
    const { t } = useTranslation()
    return (
        <section id='WorksPrice'>
            <div style={{ borderImageSource: "linear-gradient(180deg, #1E90FF 0%, rgba(102, 102, 102, 0) 100%)", borderImageSlice: 1}} className='bottomImg w-[1191px] mx-auto mb-[226px]'>
                <h2 className='font-bold text-[36px] leading-[40px] text-center mb-[121px]'>{t('landing.worksPrice.title')}</h2>
                <div className='workPrice'>
                    <div className='flex items-start'>
                        <div className='w-[50%]'>
                            <div className='p-5  border-b-[2px] border-r-[2px] rounded-br-[17px] border-[#1E90FF] '>
                                <div className='w-full rounded-[17px] bg-[#1E90FF] py-[80px] px-[52px]'>
                                    <strong className='font-bold text-[60px] leading-[40px] text-white'>{t('landing.worksPrice.leftText')}</strong>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%] border-t-[2px] rounded-tr-[17px] border-r-[2px] border-[#1E90FF] text-center px-[16px] pt-[16px]'>
                            <div className='pt-[44px] pb-[90px] border-r-[2px] border-l-[2px] rounded-tl-[17px] border-t-[2px] border-black px-[60px]'>
                                <h3 className='font-bold text-[36px] leading-[40px] text-[#0F172A] mb-[23px]'>{t('landing.worksPrice.rightText')}</h3>
                                <p className='font-regular text-[20px] leading-[28px] text-[#9E9E9E] '>{t('landing.worksPrice.rightText2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-full justify-between border-l-[2px] border-r-[2px] border-[#1E90FF] px-[17px] pb-[158px]'>
                        <ul className='flex w-[51.6%] pt-[30px] pl-[93px] flex-col gap-[36px]'>
                            <li className='flex items-center gap-[33px]'>
                                <div className='w-[22px] h-[22px] flex items-center justify-center bg-[#1E90FF] rounded-full scale-[1.7]'><AcceptIcon /></div>
                                <p className='font-regular text-[24px] leading-[40px]'>{t('landing.worksPrice.bottomText')}</p>
                            </li>
                            <li className='flex items-center gap-[33px]'>
                                <div className='w-[22px] h-[22px] flex items-center justify-center bg-[#1E90FF] rounded-full scale-[1.7]'><AcceptIcon /></div>
                                <p className='font-regular text-[24px] leading-[40px]'>{t('landing.worksPrice.bottomText')}</p>
                            </li>
                            <li className='flex items-center gap-[33px]'>
                                <div className='w-[22px] h-[22px] flex items-center justify-center bg-[#1E90FF] rounded-full scale-[1.7]'><AcceptIcon /></div>
                                <p className='font-regular text-[24px] leading-[40px]'>{t('landing.worksPrice.bottomText')}</p>
                            </li>
                            <li className='flex items-center gap-[33px]'>
                                <div className='w-[22px] h-[22px] flex items-center justify-center bg-[#1E90FF] rounded-full scale-[1.7]'><AcceptIcon /></div>
                                <p className='font-regular text-[24px] leading-[40px]'>{t('landing.worksPrice.bottomText')}</p>
                            </li>
                        </ul>
                        <ul className='flex w-[48.4%] flex-col gap-[36px] pl-[150px]'>
                            <li className='flex items-center gap-[33px]'>
                                <div className='w-[22px] h-[22px] flex items-center justify-center bg-[#1E90FF] rounded-full scale-[1.7]'><AcceptIcon /></div>
                                <p className='font-regular text-[24px] leading-[40px]'>{t('landing.worksPrice.bottomText')}</p>
                            </li>
                            <li className='flex items-center gap-[33px]'>
                                <div className='w-[22px] h-[22px] flex items-center justify-center bg-[#1E90FF] rounded-full scale-[1.7]'><AcceptIcon /></div>
                                <p className='font-regular text-[24px] leading-[40px]'>{t('landing.worksPrice.bottomText')}</p>
                            </li>
                            <li className='flex items-center gap-[33px]'>
                                <div className='w-[22px] h-[22px] flex items-center justify-center bg-[#1E90FF] rounded-full scale-[1.7]'><AcceptIcon /></div>
                                <p className='font-regular text-[24px] leading-[40px]'>{t('landing.worksPrice.bottomText')}</p>
                            </li>
                            <li className='flex items-center gap-[33px]'>
                                <div className='w-[22px] h-[22px] flex items-center justify-center bg-[#1E90FF] rounded-full scale-[1.7]'><AcceptIcon /></div>
                                <p className='font-regular text-[24px] leading-[40px]'>{t('landing.worksPrice.bottomText')}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorksPrice