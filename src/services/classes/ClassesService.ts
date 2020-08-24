import api from "../api";
import { ListClassesResponse } from "../../models/responses/ListClassesResponse";
import { ListClassesRequest } from "../../models/requests/ListClassesRequest";
import { NewTeacherFormRequest } from "../../models/requests/NewTeacherFormRequest";

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

  public post(request: NewTeacherFormRequest): void {
    api.post('classes', request)
    .then(() => {
      alert('Cadastro realizado com sucesso!');
    })
    .catch((error) => {
      alert(`ERRO: ${error}`)
    });
  }
}
