import React, { SelectHTMLAttributes } from 'react';
import SelectMessage from '../../../infrastructure/messages/components/atoms/SelectMessage';

import './Select.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    text: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option
          value=""
          disabled
          hidden
        >
          {SelectMessage.optionPreSelected}
        </option>

        {options.map(option => {
          return <option
            key={option.value}
            value={option.value}
          >
            {option.text}
          </option>
        })}
      </select>
    </div>
  );
}

export default Select;
