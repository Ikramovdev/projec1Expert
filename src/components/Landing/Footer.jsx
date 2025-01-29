import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../../assets/icon/Icon'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className='p-[80px] bg-[#E8F7FF] flex items-center justify-between'>
            <div className='flex items-center gap-[37px]'>
                <div>
                    <strong className='font-semibold text-[14px] leading-[21px] text-[#0F172A]'>{t('landing.footer.title')}</strong>
                    <ul className='flex flex-col gap-[11px] mt-[12px]'>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                    </ul>
                </div>
                <div>
                    <strong className='font-semibold text-[14px] leading-[21px] text-[#0F172A]'>{t('landing.footer.title2')}</strong>
                    <ul className='flex flex-col gap-[11px] mt-[12px]'>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                    </ul>
                </div>
                <div>
                    <strong className='font-semibold text-[14px] leading-[21px] text-[#0F172A]'>{t('landing.footer.title3')}</strong>
                    <ul className='flex flex-col gap-[11px] mt-[12px]'>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                        <li className='font-semibold text-[14px] leading-[21px] text-[#9E9E9E]'>{t('landing.footer.title')}</li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='flex items-center justify-end gap-[32px] mb-[53px]'>
                    <li><TwitterIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><LinkedinIcon /></li>
                </ul>
                <p className='font-regular text-[14px] leading-[20px] text-end text-[#475569]'>{t('landing.footer.leftText')}</p>
                <p className='font-regular text-[14px] leading-[20px] text-[#475569]'>{t('landing.footer.leftText2')}</p>
            </div>
        </div>
    )
}

export default Footer