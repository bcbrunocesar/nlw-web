import React, { useState } from 'react';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import Select from '../../atoms/select/Select';
import { ISearchTeacherFormRequest } from '../../../models/requests/teachers/ISearchTeacherFormRequest';
import { SubjectSelectViewModel } from '../../../models/views/SubjectViewModel';
import { DayOfWeekSelectViewModel } from '../../../models/views/DayOfWeekViewModel';

import PageMessages from '../../../infrastructure/messages/pages/TeacherListPageMessage';

import './TeacherSearch.scss';

interface ISearchTeacherFormProps {
  submitAction(props: ISearchTeacherFormRequest): void;
}

const TeacherSearch: React.FC<ISearchTeacherFormProps> = ({ submitAction }) => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleSearchTeacherForm(): void {
    submitAction({subject, weekDay, time});
  }

  return (
    <form id="search-teachers">
      <Select
        name="subject"
        label={PageMessages.form.inputs.subjectText}
        value={subject}
        onChange={event => {setSubject(event.target.value)}}
        options={SubjectSelectViewModel}
      />
      <Select
        name="weekDay"
        label={PageMessages.form.inputs.weekDayText}
        value={weekDay}
        onChange={event => {setWeekDay(event.target.value)}}
        options={DayOfWeekSelectViewModel}
      />
      <Input
        type="time"
        name="time"
        value={time}
        label={PageMessages.form.inputs.timeText}
        onChange={event => {setTime(event.target.value)}}
      />
      <Button
        textButton='Buscar'
        buttonType='button'
        buttonStyle='secondary'
        handleClick={() => handleSearchTeacherForm()}
      />
    </form>
  );
}

export default TeacherSearch;
