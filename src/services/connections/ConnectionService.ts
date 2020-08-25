import api from '../api';
import { ISaveConnectionRequest } from '../../models/requests/connections/ISaveConnectionRequest';

export default class ConnectionService {

  public async getTotalConnections(): Promise<Number> {
    const totalConnections = await api.get('/connections')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return 0;
      });

    return Number(totalConnections);
  }

  public save({ userId }: ISaveConnectionRequest): Promise<void> {
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
