import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import { ArrowIcon } from '../../assets/icon/Icon';
import { GlobalOutlined } from '@ant-design/icons';

export function LanguageSelect({ language, onChange, languageOptions, extraClass = "" }) {
  return (
    <div className="relative inline-flex items-center">
      <Select
        width={`100px`}
        value={language}
        onChange={onChange}
        options={languageOptions}
        className={"language-select"}
        popupClassName="language-select-dropdown"
        suffixIcon={
          <div className="flex items-center gap-2">
            <div className='rotate-[269deg]'> <ArrowIcon /></div>
            <GlobalOutlined className="text-[#1E90FF] text-lg" />
          </div>
        }
      />
    </div>
  );
}

LanguageSelect.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  languageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  extraClass: PropTypes.string,
};
