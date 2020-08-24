import React from 'react';
import { Link } from 'react-router-dom';

import './LinkButton.scss';

interface ILinkButtonProps {
  to: string;
  linkType: 'default' | 'study' | 'classes';
  textLink?: string;
  imagePath?: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({to, linkType, textLink, imagePath }) => {
  function handleLinkType(): string {
    return `link-button--${linkType}`;
  }

  return (
    <Link
      to={`${to}`}
      className={`link-button ${handleLinkType()}`}
    >
      {imagePath &&
        <img
          src={imagePath}
          alt={textLink && textLink}
        />
      }
      {textLink && textLink}
    </Link>
  );
}

export default LinkButton;
