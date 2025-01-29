import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowIcon } from "../assets/icon/Icon"
import BuildingImg from "../assets/images/BuildingImg.svg"
import PaymeIcon from "../assets/images/PaymeIcon.svg"
import ClickIcon from "../assets/images/ClickIcon.svg"
import UzbekistanFlag from "../assets/images/UzbekistanFlagIcon.svg"
import toast, { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar'
import { Context } from '../context/Context'
import { instance } from '../hook/instance'
import { API_REQUEST } from '../hook/useEnv'
import QRkode from "../assets/images/QRkode.jpg"
import { useTranslation } from 'react-i18next'


const EvalutePrice = () => {
  const { id } = useParams();
  const { token } = useContext(Context)
  const { setSaveDocument } = useContext(Context)
  const [phone, setPhone] = useState("+998");
  const { t } = useTranslation();

  const [data, setData] = useState([])
  const navigate = useNavigate()
  const [active, setActive] = useState('Click')
  // carda data input
  const [inputValue, setInputValue] = useState(null);
  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setInputValue(value || '');
  };
  // carda data input
  // card num input
  const [inputCardNum, setInputCardNum] = useState("");
  function handleCardNumDChange(e) {
    let valueCardNum = e.target.value.replace(/[^0-9]/g, "");
    let formattedCardNum = valueCardNum.match(/.{1,4}/g)?.join(" ") || "";
    setInputCardNum(formattedCardNum);
  }
  // card num input

  // get INfo
  useEffect(() => {
    instance().get(`${API_REQUEST}/properties/real-estate/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => {
      setData(res.data);
    });
  }, [id]);
  // get INfo

  // post document
  function handlePaymentClick(e) {
    e.preventDefault();
    toast.success(t('dashboard.evoutePrice.payment'), {
      className: "scale-[1.5]",
    });
    setTimeout(() => {
      // instance().get(`${API_REQUEST}/properties/real-estate/${id}/document/`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`, // Tokenni qo'shish
      //     "Content-Type": "application/json", // Qo'shimcha agar kerak bo'lsa
      //   },
      // }).then(res => {
      //   console.log(res.data);
      // })
      navigate(`/price/home-price/${id}`)
      setSaveDocument(true)
    }, 800);
  }
  // post document

  // Phone change
  function handlePhoneCHange(e) {
    const value = e.target.value;
    if (!value.startsWith("+998")) {
      setPhone("+998");
    } else {
      setPhone(value);
    }
  }
  // Phone change
  return (
    <div className='flex'>
      <div className='w-[22%] h-[92.8vh]'> <Navbar /> </div>
      <div className='w-[78%] h-[100vh] overflow-y-auto pt-[32px] pl-[71px] border-l-[1px] border-[#D3D3D3] pr-[81px]'>
        <Toaster position="top-center" reverseOrder={false} />
        <h1 className='font-semibold text-[32px] leading-[38.73px] mb-[43px]'>{t('dashboard.evoutePrice.title')}</h1>
        <button onClick={() => navigate(-1)} className='w-[186px] border-[1px] border-[#0000007a] rounded-[8px] flex items-center justify-center py-[9px] gap-[6px] mb-[64px]'>
          <ArrowIcon />
          {t('dashboard.evoutePrice.buttontext1')}
        </button>
        <div className='w-[976px] border-[1px] border-[#DFDFDF] rounded-[15px] EvalutePriceCard pt-[30px] pl-[29px] pb-[24px] pr-[20px] flex items-center justify-between'>
          <div className='w-[506px] rounded-[15px] pl-[40px]'>
            {data &&
              <>
                <ul className='flex flex-col'>
                  <li className='w-[369px] flex items-center justify-between mb-[46px]'>
                    <img src={BuildingImg} alt="BuildingImg" width={54} height={62} />
                    <h3 className='font-medium text-[23px] leading-[28.98px] text-[#CA993B]'>Real Excellent Valuation</h3>
                  </li>
                  <li className='w-[417px] pb-[5px] border-b-[2px] flex items-center justify-between mb-[14px]'>
                    <h3 className='font-medium text-[17.96px] leading-[21.74px] text-[#202020]'>{t('dashboard.evoutePrice.leftText1')}</h3>
                    <p className='font-medium text-[17.96px] leading-[21.74px] text-[#202020]'>{t('dashboard.evoutePrice.leftMoneyText1')}</p>
                  </li>
                  <li className='w-[417px] pb-[5px] border-b-[2px] flex items-center justify-between'>
                    <h3 className='font-medium text-[17.96px] leading-[21.74px] text-[#202020]'>{t('dashboard.evoutePrice.leftText2')}</h3>
                    <p className='font-medium text-[17.96px] leading-[21.74px] text-[#202020]'>{t('dashboard.evoutePrice.leftMoneyText2')}</p>
                  </li>
                  <li className='w-[417px] flex items-center justify-between mt-[17px]'>
                    <h3 className='font-medium text-[23.95px] leading-[28.98px] text-[#1E90FFBF]'>{t('dashboard.evoutePrice.leftText3')}</h3>
                    <p className='font-medium text-[23.95px] leading-[28.98px] text-[#1E90FFBF]'>{t('dashboard.evoutePrice.leftMoneyText1')}</p>
                  </li>
                </ul>
                <div className='block ml-[75px]'>
                  <img className='block' src={QRkode} alt="QRkode" width={300} height={200} />
                </div>
              </>
            }
          </div>
          <div>
            <div className='w-[343px] rounded-[8px] paymentBorder'>
              <button onClick={() => setActive('Click')} className={`w-[50%] ${active == 'Click' && "payment"} rounded-[8px]`}>
                <img className='w-[100%] h-[100%]' src={ClickIcon} alt="PaymeIcon" width={126} height={58} />
              </button>
              <button onClick={() => setActive('Payme')} className={`w-[50%] ${active == 'Payme' && "payment"} rounded-[8px]`}>
                <img className='w-[100%] h-[100%]' src={PaymeIcon} alt="PaymeIcon" width={126} height={58} />
              </button>
            </div>
            <form id="payment-form" onSubmit={handlePaymentClick} className='mt-[56px]' autoComplete='off'>
              <label className='w-[385px] flex flex-col gap-[15px] rounded-[8px] mb-[21px]'>
                <p className='font-medium text-[14px] leading-[16.94px] text-[#202020]'>{t('dashboard.evoutePrice.cardNumberText')}</p>
                <input onChange={handleCardNumDChange} maxLength={19} minLength={19} required value={inputCardNum || ''} className='w-full py-[15px]  minlength="16"  px-[8px] outline-none border-[2px] border-[#DCDCDC] rounded-[8px] focus:border-[#1E90FFCC] font-regular text-[14px] leading-[16.94px] placeholder:text-[#898989] text-black' type="text" placeholder={t('dashboard.evoutePrice.cardNumberTextPlaceholder')} aria-label='CardNumber' />
              </label>
              <label className='w-[385px] flex flex-col gap-[15px] rounded-[8px] mb-[21px]'>
                <p className='font-medium text-[14px] leading-[16.94px] text-[#202020]'>{t('dashboard.evoutePrice.carddataText')}</p>
                <input onChange={handleInputChange} maxLength="5" value={inputValue || ''} required className='w-full py-[15px]  minlength="16"  px-[8px] outline-none border-[2px] border-[#DCDCDC] rounded-[8px] focus:border-[#1E90FFCC] font-regular text-[14px] leading-[16.94px] placeholder:text-[#898989] text-black' type="text" placeholder={t('dashboard.evoutePrice.carddataTextPlaceholder')} aria-label='CardData' />
              </label>
              <label className='w-[385px] flex flex-col gap-[15px] rounded-[8px] mb-[21px]'>
                <p className='font-medium text-[14px] leading-[16.94px] text-[#202020]'>{t('dashboard.evoutePrice.contactText')}</p>
                <div className='w-full py-[15px] pl-[15px] pr-[5px] border-[2px] border-[#DCDCDC] rounded-[8px] focus:border-[#1E90FFCC] font-regular text-[14px] leading-[16.94px] placeholder:text-[#898989] text-black flex'>
                  <img className='w-[26px] h-[26px]' src={UzbekistanFlag} alt="UzbekistanFlag" width={26} height={26} />
                  <div className='rotate-[270deg] mt-[15px] px-[8px] w-[7px] h-[4px]'><ArrowIcon /></div>
                  <input onChange={handlePhoneCHange} value={phone} className='outline-none ml-2' maxLength="13" required type="tel" placeholder={t('dashboard.evoutePrice.contactTextPlaceholder')} aria-label='ContactNumber' />
                </div>
              </label>
            </form>
          </div>
        </div>
        <button type='submit' form="payment-form" className='w-[252px] hover:scale-[1.1] duration-300 block mx-auto mt-[55px] py-[24px] px-[70px] bg-[#1E90FFCC] text-[#F5F5F5] rounded-[15px] font-semibold text-[20px] leading-[24px] mb-[176px]'>{t('dashboard.evoutePrice.buttontext2')}</button>
      </div>
    </div>
  )
}

export default EvalutePrice