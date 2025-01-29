import React from 'react'
import { useTranslation } from 'react-i18next';
import HeroImg from "../../assets/images/HeroImg.png"

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className='my-[150px] hero'>
            <div className='w-[1291px] mx-auto flex items-center justify-between'>
                <div className='max-w-[601px] text-center'>
                    <h1 className='w-[601px] font-semibold text-[45px] leading-[60px] mb-[28px] text-[#080808]'>
                        {/*E-Expertga xush kelibsiz, sizning mulkni baholash bo‘yicha hamkoringiz*/}
                        {t('landing.hero.title')}
                    </h1>
                    <p className='w-[377px] mx-auto font-regular text-[18px] leading-[23px]'>
                        {t('landing.hero.subtitle')}
                    </p>
                </div>
                <img className='w-[672px] h-[563px]' src={HeroImg} alt="HeroImg" width={672} height={563} />
            </div>
        </section>
    )
}

export default Hero