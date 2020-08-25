import api from "../api";
import { IListClassesResponse } from "../../models/responses/classes/IListClassesResponse";
import { IListClassesRequest } from "../../models/requests/classes/IListClassesRequest";
import { IAddTeacherFormRequest } from "../../models/requests/teachers/IAddTeacherFormRequest";

export default class ClassesService {
  public get({ subject, weekDay, time }
    : IListClassesRequest): Promise<IListClassesResponse[]> {
    return new Promise<IListClassesResponse[]>((resolve, reject) => {
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

  public post(request: IAddTeacherFormRequest): void {
    api.post('classes', request)
    .then(() => {
      alert('Cadastro realizado com sucesso!');
    })
    .catch((error) => {
      alert(`ERRO: ${error}`)
    });
  }
}
