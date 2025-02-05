import React from 'react'
import { LanguageSelect } from './Landing/LanguageSelect'

const DashboardHeader = ({ language, handleLanguageChange, languageOptions, title }) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="font-semibold text-[32px] leading-[38.73px]">{title}</h1>
            <LanguageSelect
                language={language}
                onChange={handleLanguageChange}
                languageOptions={languageOptions}
            />
        </div>
    )
}

export default DashboardHeader
