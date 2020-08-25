import React from 'react';
import Select from '../../atoms/select/Select';
import Input from '../../atoms/input/Input';

import { IScheduleItemRequest } from '../../../models/requests/classes/IScheduleItemRequest';
import { DayOfWeekSelectViewModel } from '../../../models/views/DayOfWeekViewModel';

import PageMessages from '../../../infrastructure/messages/pages/TeacherFormPageMessage';
import './ScheduleItem.scss';
import Button from '../../atoms/button/Button';

interface IScheduleItemProps {
  index: number;
  scheduleItem: IScheduleItemRequest;
  handleUpdate(index: number, fieldName: string, fieldValue: string): void;
  handleDelete(index: number): void;
}

const ScheduleItem: React.FC<IScheduleItemProps> = ({ index, scheduleItem, handleUpdate, handleDelete }) => {
  return (
    <div className='schedule-item'>
      <Select
        name='weekDay'
        label={PageMessages.formAvailableTime.inputs.weekDayText}
        value={scheduleItem.weekDay}
        onChange={event => handleUpdate(index, 'weekDay', event.target.value) }
        options={DayOfWeekSelectViewModel}
      />

      <Input
        name='from'
        type='time'
        label={PageMessages.formAvailableTime.inputs.fromText}
        value={scheduleItem.from}
        onChange={event => handleUpdate(index, 'from', event.target.value) }
      />

      <Input
        name='to'
        type='time'
        label={PageMessages.formAvailableTime.inputs.toText}
        value={scheduleItem.to}
        onChange={event => handleUpdate(index, 'to', event.target.value) }
      />

      <Button
        textButton='DEL'
        buttonType='button'
        buttonStyle='primary'
        handleClick={() => handleDelete(index)}
      />
    </div>
  );
}

export default ScheduleItem;
