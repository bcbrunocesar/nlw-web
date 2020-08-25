import React from 'react';
import whatsAppIcon from '../../../assets/images/icons/whatsapp.svg';
import TeacherItemMessage from '../../../infrastructure/messages/components/organisms/TeacherItemMessage';
import ConnectionService from '../../../services/connections/ConnectionService';

import './TeacherItem.css';

interface ITeacherItemProps {
  teacher: {
    id: number;
    subject: string;
    cost: number;
    userId: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
  }
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  const connectionService = new ConnectionService();

  function saveConection(): void {
    connectionService.save({ userId: teacher.userId});
  }

  return (
    <article className="teacher-item">
      <header>
        <img
          src={teacher.avatar}
          alt={TeacherItemMessage.avatarAltText}
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          {TeacherItemMessage.costText}
          <strong>{teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={saveConection}
        >
          <img
            src={whatsAppIcon}
            alt={TeacherItemMessage.contactButtonAltText}
          />
          {TeacherItemMessage.contactButtonText}
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;
