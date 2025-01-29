import React, { useContext, useEffect, useState } from 'react'
import { ArrowIcon } from '../assets/icon/Icon'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Context } from '../context/Context'
import { instance } from '../hook/instance'
import { API_REQUEST } from '../hook/useEnv'
import QRkode from "../assets/images/QRkode.jpg"
import { useTranslation } from 'react-i18next'


const HomePrice = () => {
  const { token } = useContext(Context)
  const { t } = useTranslation();
  const { saveDocument } = useContext(Context)
  const { id } = useParams();
  const navigate = useNavigate()
  const [newData, setNewData] = useState([])
  const now = new Date();

  useEffect(() => {
    instance().get(`${API_REQUEST}/properties/real-estate/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => {
      setNewData(res.data);
    });
  }, [id]);
  if (!newData) return <p>Yuklanmoqda...</p>
  // dowland file
  console.log(newData);
  function handleDowlandFile() {
    window.open("https://eexpert.uz/media/documents/22.pdf", "_blank");
  }
  // dowland file
  return (
    <div className='flex'>
      <div className='w-[22%] h-[92.8vh]'> <Navbar /> </div>
      <div className='w-[78%] pt-[32px] pl-[83px] pb-[63px] border-l-[1px] border-[#D3D3D3] h-[100vh] overflow-y-auto'>
        <h1 className='font-semibold text-[32px] leading-[38.73px] text-black'>{t('homePrice.title')}</h1>
        <button onClick={() => navigate(-1)} className='w-[186px] border-[1px] border-[#0000007a] rounded-[8px] flex items-center justify-center py-[9px] gap-[6px] mt-[50px]'>
          <ArrowIcon />
          {t('homePrice.buttontext1')}
        </button>
        <div className='homePriceCard w-[937px] rounded-[15px] pt-[25px] pl-[94px] pr-[25px] pb-[25px] mt-[24px]'>
          <h2 className='font-semibold text-[20px] leading-[33.14px] text-black mb-[24px]'>{t('homePrice.subtitle')}</h2>
          <ul className="w-[812px] h-[174px] pb-[14px] border-b-[1px] border-[#D3D3D3] flex items-center gap-[20px] overflow-x-auto">
            {newData.property_images?.map(item => (
              <li key={item.id} className="w-[192px] h-[156px] rounded-[8px] border-[1px] border-black flex justify-center flex-shrink-0">
                <img src={item.image} alt="image" width={200} height={200} />
              </li>
            ))}
          </ul>
          {newData ?
            <ul className='mt-[23px] mb-[43px]'>
              <li className='flex flex-col gap-[10px]'>
                <div className='flex items-center justify-between text-start'>
                  <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.realestateType')}</h3>
                  <p className='font-light text-[20px] leading-[33.14px] text-[#000000]'>{newData.estate_type}</p>
                </div>
                <div className='flex items-center justify-between text-start'>
                  <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.cadastrNumber')}: </h3>
                  <p className='font-light text-[20px] leading-[33.14px] text-[#000000]'>{newData.cadastre_no}</p>
                </div>
                {newData.details ?
                  <>
                    <div className='flex items-center justify-between'>
                      <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.region')}</h3>
                      <p className='w-[450px] font-light text-[20px] text-end leading-[33.14px] text-[#000000]'>{newData.details.region}</p>
                    </div>
                    <div className='flex items-center justify-between  text-start'>
                      <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.district')}</h3>
                      <p className='font-light text-[20px] leading-[33.14px] text-[#000000]'>{newData.details.district}</p>
                    </div>
                    {newData.details.area_total &&
                      <div className='flex items-center justify-between  text-start'>
                        <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.areaTotal')}</h3>
                        <p className='font-light text-[20px] leading-[33.14px] text-[#000000]'>{newData.details.area_total}m</p>
                      </div>
                    }
                    {newData.details.area_livable &&
                      <div className='flex items-center justify-between  text-start'>
                        <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.areaLivable')}</h3>
                        <p className='font-light text-[20px] leading-[33.14px] text-[#000000]'>{newData.details.area_livable}m kv.</p>
                      </div>
                    }
                    <div className='flex items-center justify-between  text-start'>
                      <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.objectArea')}</h3>
                      <p className='font-light text-[20px] leading-[33.14px] text-[#000000]'>{newData.details.area}m kv.</p>
                    </div>
                    <div className='flex items-center justify-between  text-start'>
                      <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.ceilingHeight')}</h3>
                      <p className='font-light text-[20px] leading-[33.14px] text-[#000000]'>{newData.details.ceiling_height}m</p>
                    </div>
                    <div className='flex items-center justify-between  text-start'>
                      <h3 className='font-semibold text-[20px] text-black leading-[33.14px]'>{t('homePrice.propertyStatus')}</h3>
                      <p className='font-light text-[20px] leading-[33.14px] text-[#000000]'>{newData.details.renovation}</p>
                    </div>
                  </> : <p>{t('homePrice.noData')}</p>
                }
              </li>
            </ul>
            :
            <h1>{t('homePrice.noData')}</h1>
          }
          {newData &&
            <div className={`flex items-center ${saveDocument ? "justify-between" : "justify-end"} border-t-[1px] border-[#D3D3D3] pt-[25px]`}>
              {saveDocument ? <img className='block' src={QRkode} alt="QRkode" width={80} height={80} /> : null}
              <div className='flex flex-col'>
                <h3 className='font-medium text-[25px] leading-[30.26px] text-[#1E90FFCC]'>{newData.price} {t('homePrice.money')}</h3>
                {newData.details ?
                  <p>{t('homePrice.exchangeRateStatus')}: <span className='text-[#1E90FFCC]'>{newData.details.price.usd}$</span></p> : null
                }
              </div>
            </div>
          }
        </div>
        {saveDocument ?
          <button onClick={handleDowlandFile} className='mt-[60px] hover:scale-[1.1] duration-300 hover:bg-transparent hover:text-[#1E90FFCC] hover:border-[#1E90FFCC] border-[2px] border-transparent py-[24px] ml-[636px] text-[#F5F5F5] font-semibold text-[24px] leading-[#F5F5F5] bg-[#1E90FFCC] px-[70px] rounded-[15px]'>{t('homePrice.buttontext3')}</button>
          :
          <button onClick={() => navigate(`/price/home-price/evalution/${id}`)} className='mt-[60px] hover:scale-[1.1] duration-300 hover:bg-transparent hover:text-[#1E90FFCC] hover:border-[#1E90FFCC] border-[2px] border-transparent py-[24px] ml-[636px] text-[#F5F5F5] font-semibold text-[24px] leading-[#F5F5F5] bg-[#1E90FFCC] px-[70px] rounded-[15px]'>{t('homePrice.buttontext2')}</button>
        }
      </div>
    </div>
  )
}

export default HomePrice
