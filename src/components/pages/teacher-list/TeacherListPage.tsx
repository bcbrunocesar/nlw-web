import React, { useState, FormEvent } from 'react';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import PageHeader from '../../organisms/page-header/PageHeader';
import TeacherItem from '../../organisms/teacher-item/TeacherItem';

import ClassesService from '../../../services/classes/ClassesService';
import PageMessages from '../../../infrastructure/messages/pages/TeacherListPageMessage';
import { ListClassesResponse } from '../../../models/responses/ListClassesResponse';

import './TeacherListPage.css';

function TeacherListPage(): JSX.Element {
  const classesService = new ClassesService();

  const [teachers, setTeacher] = useState<ListClassesResponse[]>();
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function searchTeachers(event: FormEvent) {
    event.preventDefault();

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
        <form
          id="search-teachers"
          onSubmit={searchTeachers}
        >
          <Select
            name="subject"
            label={PageMessages.form.inputs.subjectText}
            value={subject}
            onChange={event => {setSubject(event.target.value)}}
            options={[
              { value: "1", text: 'Artes' },
              { value: "2", text: 'Biologia' },
              { value: "3", text: 'Ciências' },
              { value: "4", text: 'Educação física' },
              { value: "5", text: 'Física' },
              { value: "6", text: 'Quimica' },
              { value: "7", text: 'Geografia' },
              { value: "8", text: 'História' },
              { value: "9", text: 'Matemática' },
              { value: "10", text: 'Português' },
              { value: "11", text: 'Inglês' }
            ]}
          />

          <Select
            name="weekDay"
            label={PageMessages.form.inputs.weekDayText}
            value={weekDay}
            onChange={event => {setWeekDay(event.target.value)}}
            options={[
              { value: '0', text: 'Domingo' },
              { value: '1', text: 'Segunda-feira' },
              { value: '2', text: 'Terça-feira' },
              { value: '3', text: 'Quarta-feira' },
              { value: '4', text: 'Quinta-feira' },
              { value: '5', text: 'Sexta-feira' },
              { value: '6', text: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            name="time"
            value={time}
            label={PageMessages.form.inputs.timeText}
            onChange={event => {setTime(event.target.value)}}
          />

          <button type="submit">Buscar</button>
        </form>
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

export default TeacherListPage;
