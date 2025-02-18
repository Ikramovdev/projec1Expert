import axios from "axios";
import { Select, Spin } from "antd";
import { Context } from "../context/Context";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { instance } from "../hook/instance";
import { API_REQUEST } from "../hook/useEnv";
import { useNavigate } from "react-router-dom";
import { XIcon } from "../assets/icon/Icon";
import { LanguageSelect } from "../components/Landing/LanguageSelect";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from 'react-i18next';
import DashboardHeader from "../components/DashboardHeader";

const Price = () => {
  const navigate = useNavigate();
  const { token, setSaveDocument } = useContext(Context);
  const { language, setLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const [pnfl, setPnfl] = useState(null); // Pnfl
  const [pnflName, setPnflName] = useState(""); // Pnfl
  const [innData, setInnData] = useState(""); // INN
  const [inn, setInn] = useState(null); // INN

  const [kadastr, setKadastr] = useState(""); // Kaadastr
  const [kadastrData, setKadastrData] = useState(null); // Kaadastr

  const [firsImg, setFirstImg] = useState(null); // img
  const [imgList, setImgList] = useState([]); // img
  const [imgCount, setImgCount] = useState([]); // img
  const [selectedImages, setSelectedImages] = useState([]);

  const [typeOfHousing, setTypeOfHousing] = useState([]); // House Type
  const [ownership, setOwnerShip] = useState(null); // House Owner Type
  const [displayText, setDisplayText] = useState(t('dashboard.displayText.available'));
  const [around, setAround] = useState([]); // house Around

  const [legalEntity, setLegalEntity] = useState(false); // owner
  const [individual, setIndividual] = useState(false); // owner

  const [propertyType, setPropertyType] = useState(false); // property

  const [sustain, setSustain] = useState(null); // sustain

  // House Function and List
  const HouseTypesList = [
    {
      label: t('dashboard.houseTypes.business'),
      value: "bisnes",
    },
    {
      label: t('dashboard.houseTypes.apartment'),
      value: "kvartira",
    },
    {
      label: t('dashboard.houseTypes.house'),
      value: "hovli",
    },
  ];
  function handleChangeHouseType(value) {
    setTypeOfHousing(value);
    if (value === "bisnes") {
      setPropertyType(true);
      setDisplayText(t('dashboard.displayText.available'));
    } else if (value === "kvartira" || value === "hovli") {
      setPropertyType(false);
    } else if (value === "Ofis") {
      setDisplayText(t('dashboard.displayText.office'));
    } else if (value === "Do'kon") {
      setDisplayText(t('dashboard.displayText.shop'));
    } else if (value === "Noturar(Komerskiy)") {
      setDisplayText(t('dashboard.displayText.commercial'));
    }
  }
  useEffect(() => {
    switch (typeOfHousing) {
      case "hovli":
        setDisplayText(t('dashboard.displayText.house'));
        break;
      case "kvartira":
        setDisplayText(t('dashboard.displayText.apartment'));
        break;
      case "Ofis":
        setDisplayText(t('dashboard.displayText.office'));
        break;
      case "Do'kon":
        setDisplayText(t('dashboard.displayText.shop'));
        break;
      case "Noturar(Komerskiy)":
        setDisplayText(t('dashboard.displayText.commercial'));
        break;
      default:
        if (typeOfHousing !== "bisnes") {
          setDisplayText(t('dashboard.displayText.available'));
        }
    }
  }, [typeOfHousing, t])
  // Around Function and List
  const aroundListList = [
    {
      label: t('dashboard.aroundList.hospital'),
      value: "Kasalxona",
    },
    {
      label: t('dashboard.aroundList.playground'),
      value: "Bolalar maydonchasi",
    },
    {
      label: t('dashboard.aroundList.kindergarten'),
      value: "Bolalar bogʻchasi",
    },
    {
      label: t('dashboard.aroundList.busStop'),
      value: "Bekatlar",
    },
    {
      label: t('dashboard.aroundList.park'),
      value: "Park",
    },
    {
      label: t('dashboard.aroundList.greenZone'),
      value: "Yashil zona",
    },
    {
      label: t('dashboard.aroundList.entertainment'),
      value: "Koʻngilochar muassasalar",
    },
    {
      label: t('dashboard.aroundList.restaurant'),
      value: "Restoran",
    },
    {
      label: t('dashboard.aroundList.cafe'),
      value: "Kafelar",
    },
    {
      label: t('dashboard.aroundList.parking'),
      value: "Turargoh",
    },
    {
      label: t('dashboard.aroundList.supermarket'),
      value: "Supermarket",
    },
    {
      label: t('dashboard.aroundList.shops'),
      value: "Doʻkonlar",
    },
    {
      label: t('dashboard.aroundList.school'),
      value: "Maktab",
    },
  ];
  function handleChangeAround(value) {
    setAround(value);
  }
  // Around Function and List

  // ownerChange Function and List
  const onChange = (value) => {
    setOwnerShip(value);
    if (value == "jismoniy") {
      setIndividual(true);
      setLegalEntity(false);
    } else if (value == "yuridik") {
      setLegalEntity(true);
      setIndividual(false);
    }
  };
  // ownerChange Function and List
  // PNFL change Function and List
  function handlePNFLChange(e) {
    setInn("");
    setPnfl(e.target.value);
    if (e.target.value.length > 13) {
      if (language == "ru") {
        instance()
          .get(`/user/oneid/person/${e.target.value}/?lang=ru`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              // "ngrok-skip-browser-warning": "true"
            },
          })
          .then((res) => {
            setPnflName(res.data.full_name);
          });
      }
      else if (language == "uz") {
        instance()
          .get(`/user/oneid/person/${e.target.value}/`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              // "ngrok-skip-browser-warning": "true"
            },
          })
          .then((res) => {
            setPnflName(res.data.full_name);
          });
      }
    }
    else {
      setPnflName(null);
    }
  }
  // PNFL change Function and List

  // Inn change Function and List

  function handleInnChange(e) {
    setPnfl("");
    setInn(e.target.value);
    if (e.target.value.length > 8) {
      if (language == "ru") {
        instance()
          .get(`/user/oneid/company/${e.target.value}/?lang=ru`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              // "ngrok-skip-browser-warning": "true"
            },
          })
          .then((res) => {
            setInnData(res.data.company_name);
          });
      }
      else if (language == "uz") {
        instance()
          .get(`/user/oneid/company/${e.target.value}/`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              // "ngrok-skip-browser-warning": "true"
            },
          })
          .then((res) => {
            setInnData(res.data.company_name);
          });
      }
    }
    else {
      setInnData(null);
    }
  }
  // Inn change Function and List

  // Kadastr change Function and List
  function handleKadastrChange(e) {
    setKadastr(e.target.value);
    if (e.target.value.length > 12) {
      if (language == "ru") {
        instance()
          .get(`/user/oneid/house/${e.target.value}/?lang=ru`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              // "ngrok-skip-browser-warning": "true"
            },
          })
          .then((res) => {
            setKadastrData(res.data);
          }).catch(err => console.log(err.data))
      }
      else if (language == "uz") {
        instance()
          .get(`/user/oneid/house/${e.target.value}/`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              // "ngrok-skip-browser-warning": "true"
            },
          })
          .then((res) => {
            setKadastrData(res.data);
          }).catch(err => console.log(err.data))
      }
    }
    else {
      setKadastrData(null);
    }
  }
  // Kadastr change Function and List

  // image function
  function handleImgChange(e) {
    setFirstImg(URL.createObjectURL(e.target.files[0]));
    setSelectedImages((prevState) => [
      ...prevState,
      URL.createObjectURL(e.target.files[0]),
    ]);
    setImgList((last) => [...last, e.target.files[0]]);
    setImgCount((last) => [...last, "img"]);
  }

  function handleRemoveImage(index) {
    const images = selectedImages.filter((item, idx) => idx !== index);
    const newImgList = imgList.filter((item, idx) => idx !== index);
    setImgList(newImgList);
    setSelectedImages(images);
  }
  // image function

  // sustain function
  const sustainList = [
    {
      label: t('dashboard.sustainTypes.excellent'),
      value: "A'lo",
    },
    {
      label: t('dashboard.sustainTypes.good'),
      value: "Yaxshi",
    },
    {
      label: t('dashboard.sustainTypes.average'),
      value: "O'rtacha",
    },
    {
      label: t('dashboard.sustainTypes.poor'),
      value: "Qoniqarsiz",
    },
  ];
  function handleChangeSustain(value) {
    setSustain(value);
  }
  // sustain function

  function handleChangeObject(value) {
    console.log(value);
  }
  // post request
  function handlePriceSubmit(e) {
    e.preventDefault();
    console.log("Til:", language);
    setSaveDocument(false);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("cadastre_no", kadastr);
    around.forEach((area) => {
      formData.append("nearby_areas", area);
    });
    imgList.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("lang", language ? language : "ru");
    formData.append("ownership", ownership);
    formData.append("pinfl", pnfl);
    formData.append("inn", inn ? inn : null);
    formData.append("estate_type", typeOfHousing);

    console.log("FormData:", Object.fromEntries(formData.entries()));
    setTimeout(() => {
      axios.post(`${API_REQUEST}/properties/real-estate/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        const id = res.data.id;
        navigate(`/price/home-price/${id}`);
      }).catch((error) => {
        console.log(error.response);
      });
      setIsLoading(false);
    }, 1000);
  }
  // post request
  // language changes
  const languageOptions = [
    { value: 'uz', label: 'uz' },
    { value: 'ru', label: 'ru' }
  ];
  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value.toLowerCase());
  }
  // language changes

  // Update the lists to use translations
  const propertyTypesList = [
    {
      value: "Ofis",
      label: t('dashboard.propertyTypes.office'),
    },
    {
      value: "Do'kon",
      label: t('dashboard.propertyTypes.shop'),
    },
    {
      value: "Noturar(Komerskiy)",
      label: t('dashboard.propertyTypes.commercial'),
    },
  ];

  const ownershipTypesList = [
    {
      value: "jismoniy",
      label: t('dashboard.ownershipTypes.individual'),
    },
    {
      value: "yuridik",
      label: t('dashboard.ownershipTypes.legal'),
    },
  ];

  const amenitiesList = [
    {
      value: "Telefon",
      label: t('dashboard.amenities.phone'),
    },
    {
      value: "Kabelli TV",
      label: t('dashboard.amenities.cableTV'),
    },
    {
      value: "Oshxona",
      label: t('dashboard.amenities.kitchen'),
    },
    {
      value: "Balkon",
      label: t('dashboard.amenities.balcony'),
    },
    {
      value: "Mikravalnovka",
      label: t('dashboard.amenities.microwave'),
    },
    {
      value: "Muzlatgich",
      label: t('dashboard.amenities.fridge'),
    },
    {
      value: "Wifi",
      label: t('dashboard.amenities.wifi'),
    },
    {
      value: "Televizor",
      label: t('dashboard.amenities.tv'),
    },
    {
      value: "Kanditsaner",
      label: t('dashboard.amenities.ac'),
    },
    {
      value: "Kir yuvish moshinasi",
      label: t('dashboard.amenities.washingMachine'),
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-[22%] h-[92.8vh]">
          {" "}
          <Navbar />{" "}
        </div>
        <div className="w-[78% h-[100vh] pl-[64px] pt-[52px] border-l-[1px] border-[#D3D3D3] flex flex-col gap-7">
          <DashboardHeader language={language} handleLanguageChange={handleLanguageChange} languageOptions={languageOptions} title={t('dashboard.price.title')} />
          <form
            onSubmit={handlePriceSubmit}
            className="h-[85vh] overflow-y-auto"
            autoComplete="off"
            encType="multipart/form-data"
          >
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                {t('dashboard.price.houseType')}
              </span>
              <Select
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                showSearch
                placeholder={`${t('dashboard.price.placeholder')}`}
                onChange={handleChangeHouseType}
                options={HouseTypesList}
              />
            </label>
            {propertyType && (
              <label className="w-[672px] flex items-center justify-between mb-[20px]">
                <span className="font-light text-[15px] leading-[18.2px] text-[#202020]"> {t('dashboard.price.officeType')} </span>
                <Select
                  size="large"
                  className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                  placeholder={`${t('dashboard.price.placeholder')}`}
                  onChange={handleChangeHouseType}
                  options={propertyTypesList}
                />
              </label>
            )}
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                {t('dashboard.price.owner')}
              </span>
              <Select
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                showSearch
                placeholder={`${t('dashboard.price.placeholder')}`}
                onChange={onChange}
                options={ownershipTypesList}
              />
            </label>
            {individual ? (
              <div className="flex flex-col gap-[24px] mb-[42px] ml-[160px]">
                <input
                  onChange={handlePNFLChange}
                  name="PNFL"
                  className="w-[226px] bg-white py-[17px] font-regular text-[14px] leading-[16.94px] text-black px-[10px] rounded-[12px] outline-none border-[1px] border-[#DCDCDC] placeholder:text-black"
                  placeholder={`${t('dashboard.price.PNFL')}`}
                />
                {pnflName && (
                  <p className="w-[498px] py-[24px] rounded-[15px] border-[1px] border-[#DCDCDC] pl-[15px] pr-[5px] cursor-not-allowed font-regular text-[14px] leading-[17px]">
                    <span className="font-bold"> {t('dashboard.price.fish')}: </span>
                    {pnflName}
                  </p>
                )}
              </div>
            ) : (
              ""
            )}
            {legalEntity ? (
              <div className="w-[500px] mb-[20px] flex items-center justify-between ml-[160px]">
                <input
                  onChange={handleInnChange}
                  name="INN"
                  className="w-full bg-white py-[17px] font-regular text-[14px] leading-[16.94px] text-black px-[10px] rounded-[12px] outline-none border-[1px] border-[#DCDCDC] placeholder:text-black"
                  placeholder={`${t('dashboard.price.inn')}`}
                />
              </div>
            ) : (
              ""
            )}
            {innData && (
              <p className="w-[498px] ml-[160px] mb-[20px] py-[24px] rounded-[15px] border-[1px] border-[#DCDCDC] pl-[15px] pr-[5px] cursor-not-allowed font-regular text-[14px] leading-[17px]">
                <span className="font-bold"> {t('dashboard.price.priceComanyName')} </span>
                {innData}
              </p>
            )}
            <label className="w-[662px] flex items-start justify-between mb-[18px]">
              <span className="font-light text-[14px] leading-[18.2px] text-[#202020]">
                {t('dashboard.price.cadastralNumber')}
              </span>
              <div className="flex flex-col gap-[10px]">
                <input
                  minLength={12}
                  onChange={handleKadastrChange}
                  name="Kadastr"
                  required
                  className="w-[500px] py-[10px] pl-[6px] pr-[4px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC]"
                  type="text"
                  placeholder={`${t('dashboard.price.placeholder')}`}
                  aria-label={`Kadastr`}
                />
                {kadastrData && (
                  <div className="w-[500px] py-[24px] rounded-[15px] border-[1px] border-[#DCDCDC] pl-[15px] pr-[2px] cursor-not-allowed font-regular text-[14px] leading-[17px] flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <span className="font-bold"> {t('dashboard.price.pricehouseLocation')} </span>
                      <p className="w-[375px]">{kadastrData.region}</p>
                    </div>
                  </div>
                )}
              </div>
            </label>
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                {t('dashboard.price.propertyCondition')}
              </span>
              <Select
                required
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                showSearch
                placeholder={`${t('dashboard.price.placeholder')}`}
                onChange={handleChangeSustain}
                options={sustainList}
              />
            </label>
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                {t('dashboard.price.propertyLocation')}
              </span>
              <Select
                mode="tags"
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                placeholder={`${t('dashboard.price.placeholder')}`}
                onChange={handleChangeAround}
                options={aroundListList}
              />
            </label>
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="max-w-[150px] font-light text-[15px] leading-[18.2px] text-[#202020]">
                {displayText}
              </span>
              <Select
                mode="tags"
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                showSearch
                placeholder={`${t('dashboard.price.placeholder')}`}
                onChange={handleChangeObject}
                options={amenitiesList}
              />
            </label>
            <div className="w-[922px] mt-5 relative flex justify-between">
              <p className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                {t('dashboard.price.uploadImage')}
              </p>
              <div className="w-[753px] flex flex-wrap gap-[22px]">
                {selectedImages.map((item, index) => (
                  <div className="w-[162px] h-[150px] relative" key={item}>
                    <XIcon
                      className="absolute -top-2 -right-2 cursor-pointer"
                      onClick={handleRemoveImage.bind(null, index)}
                    />
                    <img src={item} alt={item} className="object-fill w-full h-full rounded-lg" />
                  </div>
                ))}

                {selectedImages.length < 8 && (
                  <label className="w-[162px] PriceImgInput overflow-hidden h-[150px] rounded-[8px] bg-[#49a3fd] duration-300 relative">
                    <div>
                      <input
                        className="hidden"
                        onChange={handleImgChange}
                        type="file"
                        accept="image/*"
                      />
                      <img
                        src={firsImg}
                        hidden
                        className="w-[100px] h-[100px]"
                        alt={"Choosen img"}
                      />
                    </div>
                    <div className="w-[46px] h-[46px] rounded-full bg-white flex relative top-[50%] left-[35%] z-20">
                      <span className="w-[16px] h-[2px] bg-black absolute top-[48%] left-[33%]"></span>
                      <span className="w-[2px] h-[16px] bg-black absolute top-[35%] left-[48%]"></span>
                    </div>
                    <span className="w-full h-[50px] bg-gray-600 absolute bottom-0"></span>
                  </label>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="ml-[163px] my-[53px] w-[226px] py-[17px] text-center border-[1px] border-black rounded-lg bg-transparent hover:bg-[#1E90FFCC] hover:border-transparent hover:text-white duration-300"
            >
              {isLoading ? (
                <Spin className="scale-[1.2] bg-transparent" size="large" />
              ) : (
                <p>{t('dashboard.price.button')}</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Price;
