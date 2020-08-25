import { IScheduleItemRequest } from '../classes/IScheduleItemRequest';

export interface IAddTeacherFormRequest {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: IScheduleItemRequest[]
}
