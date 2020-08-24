import React from 'react';
import PageHeader from '../../organisms/page-header/PageHeader';
import NewTeacherForm from '../../organisms/new-teacher-form/NewTeacherForm';
import ClassesService from '../../../services/classes/ClassesService';
import PageMessages from '../../../infrastructure/messages/pages/TeacherFormPageMessage';
import { NewTeacherFormRequest } from '../../../models/requests/NewTeacherFormRequest';

import './GiveClassesPage.css';

function GiveClassesPage(): JSX.Element {
  const classesService = new ClassesService();

  function handleTeacherForm(request: NewTeacherFormRequest) {
    classesService.post(request);
  }

  return (
    <div
      id="page-teacher-form"
      className="container"
    >
      <PageHeader
        title={PageMessages.pageHeader.title}
        description={PageMessages.pageHeader.description}
      />

      <main>
        <NewTeacherForm
          submitAction={handleTeacherForm}
        />
      </main>
    </div>
  )
}

export default GiveClassesPage;
