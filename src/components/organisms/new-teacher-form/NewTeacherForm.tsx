import React, { useState } from 'react';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import Textarea from '../../atoms/textarea/Textarea';
import Select from '../../atoms/select/Select';
import ScheduleItem from '../schedule-item/ScheduleItem';

import { SubjectSelectViewModel } from '../../../models/views/SubjectViewModel';
import { NewTeacherFormRequest } from '../../../models/requests/NewTeacherFormRequest';
import { ScheduleItemRequest } from '../../../models/requests/ScheduleItemRequest';
import PageMessages from '../../../infrastructure/messages/pages/TeacherFormPageMessage';

import warningIcon from '../../../assets/images/icons/warning.svg';
import './NewTeacherForm.scss';

interface NewTeacherForm {
  submitAction(props: NewTeacherFormRequest): void;
}

const NewTeacherForm: React.FC<NewTeacherForm> = ({ submitAction }) => {
  const newScheduleItem: ScheduleItemRequest = {
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

  function handleUpdateScheduleItems(
    position: number,
    field: string,
    value: string): void {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleAddNewScheduleItem(): void {
    setScheduleItems([
      ...scheduleItems,
      newScheduleItem
    ]);
  }

  function handleNewTeacherFormSubmit(): void {
    submitAction({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    });
  }

  return (
    <form className='new-teacher-form'>
      <fieldset>
        <legend>{PageMessages.formData.title}</legend>

        <Input
          name='name'
          label={PageMessages.formData.inputs.nameText}
          value={name}
          onChange={(event) => { setName(event.target.value) }}
        />
        <Input
          name='avatar'
          label={PageMessages.formData.inputs.avatarText}
          value={avatar}
          onChange={(event) => { setAvatar(event.target.value) }}
        />
        <Input
          name='whatsapp'
          label={PageMessages.formData.inputs.whatsappText}
          value={whatsapp}
          onChange={(event) => { setWhatsapp(event.target.value) }}
        />
        <Textarea
          name='bio'
          label={PageMessages.formData.inputs.bioText}
          value={bio}
          onChange={(event) => { setBio(event.target.value) }}
        />
      </fieldset>

      <fieldset>
        <legend>{PageMessages.formClass.title}</legend>

        <Select
          name='subject'
          label={PageMessages.formClass.inputs.subjectText}
          value={subject}
          onChange={(event) => { setSubject(event.target.value) }}
          options={SubjectSelectViewModel}
        />

        <Input
          name='cost'
          label={PageMessages.formClass.inputs.costText}
          value={cost}
          onChange={(event) => { setCost(event.target.value) }}
        />
      </fieldset>

      <fieldset>
        <legend>
          {PageMessages.formAvailableTime.title}
          <Button
            textButton={PageMessages.formAvailableTime.buttonText}
            buttonType='button'
            buttonStyle='link'
            handleClick={handleAddNewScheduleItem}
          />
        </legend>

        {scheduleItems.map((scheduleItem, index) => {
          return <div key={index}>
            <ScheduleItem
              index={index}
              scheduleItem={scheduleItem}
              handleUpdate={handleUpdateScheduleItems}
            />
          </div>
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

        <Button
          textButton={PageMessages.footer.buttonText}
          buttonType='button'
          buttonStyle='secondary'
          handleClick={() => handleNewTeacherFormSubmit()}
        />
      </footer>
    </form>
  )
}

export default NewTeacherForm;
