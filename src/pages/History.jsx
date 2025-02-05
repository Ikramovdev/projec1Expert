import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../context/Context"
import { ShowEye } from '../assets/icon/Icon'
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import instance from "../hook/instance"
import { API_REQUEST } from '../hook/useEnv'
import { useTranslation } from 'react-i18next'
import DashboardHeader from '../components/DashboardHeader'
import { useLanguage } from '../context/LanguageContext'

const History = () => {
  const { setSaveDocument } = useContext(Context)
  const { t, i18n } = useTranslation();
  const { token } = useContext(Context)
  const navigate = useNavigate()
  const [newData, setNewData] = useState([])
  const { language, setLanguage } = useLanguage();

  // get all
  useEffect(() => {
    if (language == "ru") {
      instance().get(`${API_REQUEST}/properties/real-estate/?lang=ru`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        const sortedData = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setNewData(sortedData)
      }).catch(err => {
        console.log(err)
      })
    }
    else if (language == "uz") {
      instance().get(`${API_REQUEST}/properties/real-estate/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        const sortedData = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setNewData(sortedData)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [])
  // get all

  // id boyicha get 
  function handleShowPrice(id) {
    navigate(`/price/home-price/${id}`);
    setSaveDocument(true);
  }
  // id boyicha get 

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
          <DashboardHeader title={t('dashboard.history.title')} language={language} handleLanguageChange={handleLanguageChange} languageOptions={languageOptions} />
          <div>
            <ul className='w-[895px] flex items-center justify-between pl-[31px] pr-[43px] border-b-[1px] border-black pb-[8px] opacity-[40%]'>
              <li className='font-regular text-[24px] laeding-[36px] text-start'>{t('dashboard.history.listtext1')}</li>
              <li className={`font-regular text-[24px] laeding-[36px] ${language == "Rus" ? "ml-[5%]" : "ml-[1%]"}`}>{t('dashboard.history.housetype')}</li>
              <li className={`font-regular text-[24px] laeding-[36px] ${language == "Rus" ? "mr-[7%]" : "mr-[6%]"}`}>{t('dashboard.history.price')}</li>
              <li className={`font-regular text-[24px] laeding-[36px] ${language == "Rus" ? "ml-[3%]" : "mr-[2%]"}`}>{t('dashboard.history.veiw')}`</li>
            </ul>
            <ul className='w-[950px] h-[70vh] overflow-y-auto flex flex-col gap-[30px] mt-[42px]'>
              {newData?.length > 0 ? (
                newData.map((item, index) => (
                  <li key={index} className='w-full h-[60px] flex items-center py-[5px] rounded-[15px] justify-between border-[1px] border-black'>
                    <p className='w-[11.4%] text-left whitespace-nowrap pl-[20px] overflow-hidden'>{item.created_at}</p>
                    <span className='w-[1px] h-[38px] bg-black flex justify-center'></span>
                    <p className='w-[25%] text-center'>{item.estate_type}</p>
                    <span className='w-[1px] h-[38px] bg-black'></span>
                    <strong className='w-[25%] text-center'>{item.price} {t('dashboard.history.money')}</strong>
                    <span className='w-[1px] h-[38px] bg-black'></span>
                    <div onClick={() => handleShowPrice(item.id)} className='w-[33%] flex items-center cursor-pointer justify-center gap-[10px]'>
                      <p>{t('dashboard.history.veiw')}</p>
                      <ShowEye />
                    </div>
                  </li>
                ))
              ) :
                (<p>{t('dashboard.history.noData')}</p>)}
            </ul>
          </div>
        </div>
      </div >
    </>
  )
}

export default History