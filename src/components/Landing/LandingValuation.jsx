import React from 'react'
import { useTranslation } from 'react-i18next'
import { ValuationItem1Icon, ValuationItem2Icon, ValuationItem3Icon, ValuationItem4Icon } from '../../assets/icon/Icon'

const LandingValuation = () => {
  const { t } = useTranslation()
  return (
    <section className='mb-[177px] Valuation'>
        <div className='w-[1291px] mx-auto pb-[23px] flex justify-between gap-[36px]'>
            <h2 className='w-[373px] font-bold text-[36px] leading-[40px] mt-[40px]'>
                {t('landing.valuation.title')}
            {/*Aniq qulfni ochish Mulkni baholash*/}
            </h2>
            <ul className='w-[860px] flex flex-wrap gap-[6px]'>
                {[0, 1, 2, 3].map((index) => (
                    <li key={index} className='w-[410px] py-[37px] pl-[27px] border-[2px] border-white rounded-[10px]'>
                        {index === 0 && <ValuationItem1Icon/>}
                        {index === 1 && <ValuationItem2Icon/>}
                        {index === 2 && <ValuationItem3Icon/>}
                        {index === 3 && <ValuationItem4Icon/>}
                        <div className='flex flex-col gap-[5px] mt-8'>
                            <h3 className='font-semibold text-[18px] leading-[28px] text-[#0F172A]'>
                                {t(`landing.valuation.items.${index}.title`)}
                            </h3>
                            <p className='font-regular text-[16px] leading-[24px] text-[#334155]'>
                                {t(`landing.valuation.items.${index}.desc`)}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default LandingValuation