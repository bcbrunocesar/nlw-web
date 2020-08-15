import { ListClassesResponse } from "../../models/responses/ListClassesResponse";
import { ListClassesRequest } from "../../models/requests/ListClassesRequest";
import api from "../api";

export default class ClassesService {
  public get({ subject, weekDay, time }
    : ListClassesRequest): Promise<ListClassesResponse[]> {
    return new Promise<ListClassesResponse[]>((resolve, reject) => {
      api.get('/classes', {
        params: {
          subject,
          weekDay,
          time,
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error)
      });
    });
  }
}
