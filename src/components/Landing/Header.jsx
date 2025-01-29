import React, { useState } from 'react'
import { SiteLogo } from '../../assets/icon/Icon'
import {Link, useNavigate} from 'react-router-dom'
import { PATH } from '../../hook/usePath'
import { LanguageSelect } from './LanguageSelect'
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const navigate= useNavigate();
  const [activeNav, setActiveNav] = useState("/")
  const { language, setLanguage } = useLanguage();
  const { i18n } = useTranslation();
  const navList = [
    {
      id: 1,
      value: 'Asosiy',
      path: '#header'
    },
    {
      id: 2,
      value: 'Foydalanish',
      path: '#works'
    },
    {
      id: 3,
      value: 'Narx',
      path: '#WorksPrice'
    },
    {
      id: 4,
      value: "Bog'lanish",
      path: "#contact"
    },
  ];
  const [navbarList, setNavbarList] = useState(navList);

  const languageOptions = [
    { value: 'Uzb', label: 'Uzb' },
    { value: 'Rus', label: 'Rus' }
  ];

  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value.toLowerCase());
    
    const updatedNavbarList = navbarList.map(item => {
      let newValue = item.value;
      if (value === 'Rus') {
        switch (item.value) {
          case 'Asosiy':
            newValue = 'Дом';
            break;
          case 'Foydalanish':
            newValue = 'Использование';
            break;
          case 'Narx':
            newValue = 'Цена';
            break;
          case "Bog'lanish":
            newValue = 'Связь';
            break;
          default:
            newValue = item.value;
        }
      } else {
        const originalItem = navList.find(nav => nav.id === item.id);
        newValue = originalItem.value;
      }
      return {
        ...item,
        value: newValue
      };
    });
    setNavbarList(updatedNavbarList);
  };

  const content = {
    'Uzb': {
      title: "O'zbekcha sarlavha",
      description: "O'zbekcha tavsif",
      // ... boshqa matnlar
    },
    'Rus': {
      title: "Русский заголовок",
      description: "Русское описание",
      // ... boshqa matnlar
    }
  };

  const currentContent = content[language];

  return (
    <header id='header' className='inline-block mt-[15px] z-30 w-full fixed top-0'>
      <div className='max-w-[1291px] mx-auto py-[21px] pr-[63px] pl-[54px] rounded-[46px] flex items-center justify-between'>
        <div className='flex items-center gap-[229px]'>
          <SiteLogo />
          <ul className='flex items-center gap-[34px]'>
            {navbarList?.map(item => (
              <li key={item.id}>
                <Link onClick={() => setActiveNav(item.path)} className={`${activeNav == item.path && "text-black"} font-medium text-[14px] leading-[24px] text-[#414141] text-opacity-[60%]`} to={item.path}> {item.value} </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-between'>
          <LanguageSelect
            language={language}
            onChange={handleLanguageChange}
            languageOptions={languageOptions}
          />
          <div className='ml-[41px] flex items-center gap-[16px]'>
            <button onClick={() => navigate(`${PATH.signIn}`)} className='font-regular text-[16px] leading-[24px] text-[#414141]'>
              {language === 'Rus' ? 'Войти' : 'Log in'}
            </button>
            <button onClick={() => navigate(`${PATH.signUp}`)} className='w-[109px] py-[12px] text-center bg-[#1E90FF] rounded-[28px] text-white'>
              {language === 'Rus' ? 'Регистрация' : 'Sign up'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header