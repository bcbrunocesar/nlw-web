import React from 'react';
import LinkButton from '../../atoms/link-button/LinkButton';

import logoImg from '../../../assets/images/logo.svg';
import backIcon from '../../../assets/images/icons/back.svg';

import './PageHeader.css';

interface IPageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <LinkButton
          to='/'
          linkType='default'
          imagePath={backIcon}
        />

        <img
          src={logoImg}
          alt="Proffy"
        />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p> }
        {props.children}
      </div>
    </header>
  );
}

export default PageHeader;
