import React, { useState, FormEvent } from 'react';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import Select from '../../atoms/Select/Select';
import PageHeader from '../../organisms/page-header/PageHeader';
import api from '../../../services/api';

import PageMessages from '../../../infrastructure/messages/pages/TeacherFormPageMessage';
import warningIcon from '../../../assets/images/icons/warning.svg';

import './TeacherFormPage.css';

function TeacherFormPage(): JSX.Element {
  const newScheduleItem = {
    weekDay: 0,
    from: '',
    to: ''
  };

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    newScheduleItem
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      newScheduleItem
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClassForm(event: FormEvent) {
    event.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    })
    .then(() => {
      alert('Cadastro realizado com sucesso!');
    })
    .catch((error) => {
      alert(`ERRO: ${error}`)
    });
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
        <form onSubmit={handleCreateClassForm}>
          <fieldset>
            <legend>{PageMessages.formData.title}</legend>

            <Input
              name="name"
              label={PageMessages.formData.inputs.nameText}
              value={name}
              onChange={(event) => { setName(event.target.value) }}
            />
            <Input
              name="avatar"
              label={PageMessages.formData.inputs.avatarText}
              value={avatar}
              onChange={(event) => { setAvatar(event.target.value) }}
            />
            <Input
              name="whatsapp"
              label={PageMessages.formData.inputs.whatsappText}
              value={whatsapp}
              onChange={(event) => { setWhatsapp(event.target.value) }}
            />
            <Textarea
              name="bio"
              label={PageMessages.formData.inputs.bioText}
              value={bio}
              onChange={(event) => { setBio(event.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>{PageMessages.formClass.title}</legend>

            <Select
              name="subject"
              label={PageMessages.formClass.inputs.subjectText}
              value={subject}
              onChange={(event) => { setSubject(event.target.value) }}
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

            <Input
              name="cost"
              label={PageMessages.formClass.inputs.costText}
              value={cost}
              onChange={(event) => { setCost(event.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>
              {PageMessages.formAvailableTime.title}
              <button
                type="button"
                onClick={addNewScheduleItem}
              >
                {PageMessages.formAvailableTime.buttonText}
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    name="weekDay"
                    label={PageMessages.formAvailableTime.inputs.weekDayText}
                    value={scheduleItem.weekDay}
                    onChange={event => setScheduleItemValue(index, 'weekDay', event.target.value) }
                    options={[
                      { value: "0", text: 'Domingo' },
                      { value: "1", text: 'Segunda-feira' },
                      { value: "2", text: 'Terça-feira' },
                      { value: "3", text: 'Quarta-feira' },
                      { value: "4", text: 'Quinta-feira' },
                      { value: "5", text: 'Sexta-feira' },
                      { value: "6", text: 'Sábado' },
                    ]}
                  />

                  <Input
                    name="from"
                    type="time"
                    label={PageMessages.formAvailableTime.inputs.fromText}
                    value={scheduleItem.from}
                    onChange={event => setScheduleItemValue(index, 'from', event.target.value) }
                  />

                  <Input
                    name="to"
                    type="time"
                    label={PageMessages.formAvailableTime.inputs.toText}
                    value={scheduleItem.to}
                    onChange={event => setScheduleItemValue(index, 'to', event.target.value) }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img
                src={warningIcon}
                alt={PageMessages.footer.warningAltText}
              />
              {PageMessages.footer.warningTitle} <br />
              {PageMessages.footer.warningDescription}
            </p>

            <button type="submit">
              {PageMessages.footer.buttonText}
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherFormPage;
