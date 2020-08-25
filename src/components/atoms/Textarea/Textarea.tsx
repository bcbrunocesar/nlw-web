import React, { InputHTMLAttributes } from 'react';
import './Textarea.css';

interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<ITextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea type="text" id={name} {...rest} />
    </div>
  );
}

export default Textarea;
