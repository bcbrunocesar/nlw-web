import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../components/pages/landing/LandingPage';
import StudyPage from '../components/pages/study/StudyPage';
import GiveClassesPage from '../components/pages/give-classes/GiveClassesPage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/study" component={StudyPage} />
      <Route path="/give-classes" component={GiveClassesPage} />
    </BrowserRouter>
  )
}

export default Routes;
