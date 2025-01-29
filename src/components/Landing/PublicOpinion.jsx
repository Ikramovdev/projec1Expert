import React from 'react'
import commentItem1Image from "../../assets/images/commentItem1Image.png"
import commentItem2Image from "../../assets/images/commentItem2Image.png"
import commentItem3Image from "../../assets/images/commentItem3Image.png"
import { useTranslation } from 'react-i18next'
import CommentCard from "./commentCard"

const PublicOpinion = () => {
    const { t } = useTranslation()
    const topComments = [
        {
            image: commentItem1Image,
            name: "Emily",
            position: "Real Estate Analyst",
            comment: "Emily excels in analyzing market trends to provide accurate property valuations for homes and estates."
        },
        {
            image: commentItem2Image,
            name: "Michael",
            position: "Automotive Valuation Expert",
            comment: "Michael's expertise lies in assessing the true market value of cars, ensuring you get the best deal."
        },
        {
            image: commentItem3Image,
            name: "Sarah",
            position: "Property Consultant",
            comment: "Sarah provides insightful advice on property investments, helping clients make informed decisions."
        }
    ];
    const bottomComments = [
        {
            image: commentItem1Image,
            name: "Emily",
            position: "Real Estate Analyst",
            comment: "Emily excels in analyzing market trends to provide accurate property valuations for homes and estates."
        },
        {
            image: commentItem2Image,
            name: "Michael",
            position: "Automotive Valuation Expert",
            comment: "Michael's expertise lies in assessing the true market value of cars, ensuring you get the best deal."
        },
        {
            image: commentItem3Image,
            name: "Sarah",
            position: "Property Consultant",
            comment: "Sarah provides insightful advice on property investments, helping clients make informed decisions."
        }
    ];
    return (
        <div className='mt-[226px] mb-[134px] overflow-hidden'>
            <h2 className='font-bold text-[36px] leading-[40px] text-[#111827] mb-[54px] text-center'>{t('landing.publicOpinion.title')}</h2>
            <div className='comments'>
                <div className='mx-auto pt-[57px] pb-[104px]'>
                    <div className='overflow-hidden mb-[54px]'>
                        <div className='comment-track animate-left'>
                            {[...topComments, ...topComments].map((comment, index) => (
                                <CommentCard key={index} data={comment} />
                            ))}
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='comment-track animate-right'>
                            {[...bottomComments, ...bottomComments].map((comment, index) => (
                                <CommentCard key={index} data={comment} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicOpinion