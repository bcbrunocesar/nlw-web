import React from 'react';
import Select from '../../atoms/select/Select';
import Input from '../../atoms/input/Input';

import { ScheduleItemRequest } from '../../../models/requests/ScheduleItemRequest';
import { DayOfWeekSelectViewModel } from '../../../models/views/DayOfWeekViewModel';

import PageMessages from '../../../infrastructure/messages/pages/TeacherFormPageMessage';
import './ScheduleItem.scss';

interface ScheduleItemProps {
  index: number;
  scheduleItem: ScheduleItemRequest;
  handleUpdate(index: number, fieldName: string, fieldValue: string): void;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ index, scheduleItem, handleUpdate }) => {
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
    </div>
  );
}

export default ScheduleItem;
