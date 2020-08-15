import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../components/pages/landing/LandingPage';
import TeacherListPage from '../components/pages/teacher-list/TeacherListPage';
import TeacherFormPage from '../components/pages/teacher-form/TeacherFormPage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/study" component={TeacherListPage} />
      <Route path="/give-classes" component={TeacherFormPage} />
    </BrowserRouter>
  )
}

export default Routes;
