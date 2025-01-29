import React, { useState } from "react";

const ImgCard = ({ setImgList, setImgCount, image }) => {
  const [img, setImg] = useState(image || null);

  function handleImgChange(e) {
    setImgList((last) => [...last, e.target.files[0]]);
    setImgCount((last) => [...last, "img"]);
    setImg(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <label className="w-[162px] PriceImgInput overflow-hidden h-[150px] rounded-[8px] bg-[#49a3fd] duration-300 relative">
      <div>
        <input
          className="hidden"
          onChange={handleImgChange}
          type="file"
          accept="image/*"
        />
        <img
          src={img}
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
  );
};

export default ImgCard;
