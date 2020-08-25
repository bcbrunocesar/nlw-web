import React from 'react';
import PageHeader from '../../organisms/page-header/PageHeader';
import AddTeacherForm from '../../organisms/add-teacher-form/AddTeacherForm';
import ClassesService from '../../../services/classes/ClassesService';
import PageMessages from '../../../infrastructure/messages/pages/TeacherFormPageMessage';
import { IAddTeacherFormRequest } from '../../../models/requests/teachers/IAddTeacherFormRequest';

import './GiveClassesPage.css';

function GiveClassesPage(): JSX.Element {
  const classesService = new ClassesService();

  function handleAddTeacherForm(request: IAddTeacherFormRequest) {
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
        <AddTeacherForm
          submitAction={handleAddTeacherForm}
        />
      </main>
    </div>
  )
}

export default GiveClassesPage;
