import React from 'react'

const CommentCard = ({ data }) => {
    return (
        <li className='w-[384px] pl-[24px] pt-[24px] pb-[50px] bg-white rounded-[12px] flex-shrink-0'>
            <div className='flex items-center gap-[16px]'>
                <img src={data.image} alt={`${data.name}'s avatar`} width={56} height={56} />
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-[16px] leading-[24px] text-[#0F172A]'>{data.name}</h3>
                    <p className='font-regular text-[14px] leading-[20px] text-[#475569]'>{data.position}</p>
                </div>
            </div>
            <p className='font-regular text-[14px] leading-[20px] text-[#475569] mt-[17px]'>{data.comment}</p>
        </li>
    )
}

export default CommentCard