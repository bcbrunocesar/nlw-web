import React, { useState } from 'react';
import PageHeader from '../../organisms/page-header/PageHeader';
import TeacherItem from '../../organisms/teacher-item/TeacherItem';
import TeacherSearch from '../../organisms/teacher-search/TeacherSearch';

import ClassesService from '../../../services/classes/ClassesService';
import PageMessages from '../../../infrastructure/messages/pages/TeacherListPageMessage';
import { IListClassesResponse } from '../../../models/responses/classes/IListClassesResponse';
import { ISearchTeacherFormRequest } from '../../../models/requests/teachers/ISearchTeacherFormRequest';

import './StudyPage.css';

function StudyPage(): JSX.Element {
  const classesService = new ClassesService();
  const [teachers, setTeacher] = useState<IListClassesResponse[]>();

  function handleSearchTeachers({subject, weekDay, time}: ISearchTeacherFormRequest): void {
    classesService.get({
      subject,
      weekDay: Number(weekDay),
      time
    }).then(response => setTeacher(response));
  }

  return (
    <div
      id="page-teacher-list"
      className="container"
    >
      <PageHeader title={PageMessages.pageHeader.title}>
        <TeacherSearch submitAction={handleSearchTeachers} />
      </PageHeader>

      <main>
        {teachers && teachers.map(teacher => {
          return <TeacherItem
            key={teacher.id}
            teacher={teacher}
          />
        })}
      </main>
    </div>
  )
}

export default StudyPage;
