import React, { useContext, useEffect, useState } from 'react'
import { PATH } from "../hook/usePath"
import { NavLink, useNavigate } from 'react-router-dom'
import { AutoIcon, GuideIcon, LogAutIcon, NavAvaImg, NavHistoryImg, NavPriceImg, RealEstateIcon } from "../assets/icon/Icon"
import { Modal } from 'antd'
import { Context } from '../context/Context'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { userName } = useContext(Context)
  const navigate = useNavigate()
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [activeNavId, setActiveNavId] = useState(null);

  const navbarList = [
    {
      id: 1,
      title: t('dashboard.navbar.price'),
      path: PATH.price,
      img: <NavPriceImg />,
      child: [
        {
          id: 1,
          title: t('dashboard.navbar.realEstate'),
          path: PATH.realEstate,
          img: <RealEstateIcon className="transition-colors duration-300" />
        },
        {
          id: 2,
          title: t('dashboard.navbar.auto'),
          path: PATH.auto,
          img: <AutoIcon className="transition-colors duration-300" />
        },
      ]
    },
    {
      id: 2,
      title: t('dashboard.navbar.history'),
      path: PATH.history,
      img: <NavHistoryImg />,
    },
    {
      id: 3,
      title: t('dashboard.navbar.guide'),
      path: PATH.guide,
      img: <GuideIcon />,
    },
    {
      id: 4,
      title: t('dashboard.navbar.profile'),
      path: PATH.profile,
      img: <NavAvaImg />,
    },
  ]

  const getActiveParentId = () => {
    for (const item of navbarList) {
      if (item.child?.some(child => location.pathname === child.path)) {
        return item.id;
      }
    }
    return null;
  };

  React.useEffect(() => {
    const parentId = getActiveParentId();
    if (parentId) {
      setActiveNavId(parentId);
    }
  }, [location.pathname]);

  function handleLogAutClick() {
    localStorage.clear()
    navigate(PATH.signIn)
    location.reload()
  }

  function handleNavClick(id) {
    const activeParentId = getActiveParentId();
    if (activeParentId === id) {
      return;
    }
    setActiveNavId(activeNavId === id ? null : id);
  }

  return (
    <div className='w-[100%] h-[100%] px-0 top-[56px] relative'>
      <ul className='absolute top-0 left-[25px] space-y-[11px]'>
        {navbarList.map(item => (
          <li key={item.id}>
            <NavLink
              onClick={() => handleNavClick(item.id)}
              to={item.path}
              className={({ isActive }) => {
                const isChildActive = item.child?.some(child =>
                  location.pathname === child.path
                );

                return (isActive || isChildActive)
                  ? 'active w-[262px] border-none rounded-[8px] py-[6px] pl-[13px] flex items-center duration-300 bg-[#1E90FF] text-white [&_svg]:text-white'
                  : 'w-[262px] border-[1px] border-black rounded-[8px] py-[6px] pl-[13px] bg-white flex items-center duration-300 [&_svg]:text-black'
              }}
            >
              {item.img}
              <span className='w-[1px] h-[36px] bg-black ml-[15px] mr-[20px]'></span>
              <p>{item.title}</p>
            </NavLink>
            {/* Child */}
            {item.child && activeNavId === item.id && (
              <ul className='mt-[4px] space-y-[5px]'>
                {item.child.map(childItem => (
                  <li key={childItem.id}>
                    <NavLink
                      to={childItem.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'active w-full border-none rounded-[8px] py-[6px] pl-[13px] flex items-center duration-300 bg-[#1E90FF] text-white [&_svg]:text-white'
                          : 'w-full border-[1px] border-black rounded-[8px] py-[6px] pl-[13px] bg-blue-300 flex items-center duration-300 [&_svg]:text-black'
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div>
                            {childItem.img}
                          </div>
                          <span className='w-[1px] h-[36px] bg-black ml-[15px] mr-[20px]'></span>
                          <p>{childItem.title}</p>
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
            {/* Child */}
          </li>))}
      </ul>
      <div className='absolute left-[25px] bottom-0'>
        <div className='w-[262px] px-5 pt-5 pb-[29px] rounded-tl-[15px] rounded-tr-[15px] border-[1px] border-[#000] border-b-0'>
          <p className='font-medium text-[14px] leading-[18.22px] text-black opacity-[30%]'>{t('dashboard.navbar.profile')}</p>
          <div className='flex items-center gap-4 mt-[21px]'>
            <span className='rounded-full w-[48px] h-[48px] bg-gray-300'></span>
            {/* <img className='rounded-full w-[48px] h-[48px]' src="/" alt="randow image" width={48} height={48} /> */}
            <h3 className='font-medium text-[16px] leading-[20.83px] text-black'>{userName}</h3>
          </div>
          <button onClick={() => setOpenModal(true)} className='w-[226px] py-[14px] flex items-start pl-[20px] gap-[16px] mt-[40px] bg-[#1E90FFCC] rounded-[8px]'>
            <LogAutIcon />
            <p className='font-regular text-[16px] leading-[24px] text-white'>{t('dashboard.navbar.logout')}</p>
          </button>
        </div>
      </div>
      <Modal
        open={openModal}
        cancelText={t('dashboard.navbar.cancel')}
        okText={t('dashboard.navbar.yes')}
        onCancel={() => setOpenModal(false)}
        onOk={handleLogAutClick}
        title={t('dashboard.navbar.logoutConfirm')}
      />
    </div>
  )
}

export default Navbar