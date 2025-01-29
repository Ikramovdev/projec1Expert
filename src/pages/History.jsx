import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../context/Context"
import { ShowEye } from '../assets/icon/Icon'
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import instance from "../hook/instance"
import { API_REQUEST } from '../hook/useEnv'
import { useTranslation } from 'react-i18next'

const History = () => {
  const { setSaveDocument } = useContext(Context)
  const { t } = useTranslation();
  const { token } = useContext(Context)
  const navigate = useNavigate()
  const [newData, setNewData] = useState([])
  useEffect(() => {
    instance().get(`${API_REQUEST}/properties/real-estate/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setNewData(res.data)

    })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function handleShowPrice(id) {
    navigate(`/price/home-price/${id}`);
    setSaveDocument(true);
  }

  return (
    <>
      <div className='flex'>
        <div className='w-[22%] h-[92.8vh]'> <Navbar /> </div>
        <div className='w-[78%] h-[100vh] pt-[32px] pl-[83px] border-l-[1px] border-[#D3D3D3]'>
          <h1 className='font-semibold text-[32px] leading-[38.73px] mb-[43px]'>{t('history.title')}</h1>
          <ul className='w-[895px] flex items-center justify-between pl-[31px] pr-[43px] border-b-[1px] border-black pb-[8px] opacity-[40%]'>
            <li className='font-regular text-[24px] laeding-[36px] text-start'>{t('history.listtext1')}</li>
            <li className='font-regular text-[24px] laeding-[36px] mr-[50px]'>{t('history.housetype')}</li>
            <li className='font-regular text-[24px] laeding-[36px] mr-[85px]'>{t('history.price')}</li>
            <li className='font-regular text-[24px] laeding-[36px] mr-[20px]'>{t('history.veiw')}</li>
          </ul>
          <ul className='w-[950px] h-[70vh] overflow-y-auto flex flex-col gap-[30px] mt-[42px]'>
            {newData?.length > 0 ? (
              newData.map((item, index) => (
                <li key={index} className='w-full h-[60px] flex items-center py-[5px] rounded-[15px] justify-between border-[1px] border-black'>
                  <p className='w-[11.4%] text-left whitespace-nowrap pl-[20px] overflow-hidden'>{item.created_at}</p>
                  <span className='w-[1px] h-[38px] bg-black flex justify-center'></span>
                  <p className='w-[25%] text-center'>{item.estate_type}</p>
                  <span className='w-[1px] h-[38px] bg-black'></span>
                  <strong className='w-[25%] text-center'>{item.price} so'm</strong>
                  <span className='w-[1px] h-[38px] bg-black'></span>
                  <div onClick={() => handleShowPrice(item.id)} className='w-[33%] flex items-center cursor-pointer justify-center gap-[10px]'>
                    <p>{t('history.veiw')}</p>
                    <ShowEye />
                  </div>
                </li>
              ))
            ) :
              (<p>{t('history.noData')}</p>)}
          </ul>
        </div>
      </div >
    </>
  )
}

export default History