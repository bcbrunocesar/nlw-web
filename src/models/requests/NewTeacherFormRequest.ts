import { ScheduleItemRequest } from './ScheduleItemRequest';

export interface NewTeacherFormRequest {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: ScheduleItemRequest[]
}
