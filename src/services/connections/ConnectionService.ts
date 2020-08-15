import api from '../api';
import { GetTotalConnectionResponse } from '../../models/responses/GetTotalConnectionResponse';
import { SaveConnectionRequest } from '../../models/requests/SaveConnectionRequest';

export default class ConnectionService {

  public getTotalConnections(): Promise<GetTotalConnectionResponse> {
    return new Promise<GetTotalConnectionResponse>((resolve, reject) => {
      api.get('/connections')
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public save({ userId }: SaveConnectionRequest): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      api.post('/connections', { userId })
        .then(response => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
