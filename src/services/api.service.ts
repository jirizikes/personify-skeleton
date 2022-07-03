import axios from 'axios';
import { AgeResponse, GenderResponse, NationalityResponse } from './interfaces';

enum ApiUrl {
  AGE = 'https://api.agify.io/',
  GENDER = 'https://api.genderize.io/',
  NATIONALITY = 'https://api.nationalize.io/',
}

export class ApiService {
  public async getAgeData(name: string): Promise<AgeResponse | null> {
    return await this._getResult<AgeResponse>(name, ApiUrl.AGE);
  }

  public async getGenderData(name: string): Promise<GenderResponse | null> {
    return await this._getResult<GenderResponse>(name, ApiUrl.GENDER);
  }

  public async getNationalityData(
    name: string
  ): Promise<NationalityResponse | null> {
    return await this._getResult<NationalityResponse>(name, ApiUrl.NATIONALITY);
  }

  private async _getResult<T>(name: string, url: ApiUrl): Promise<T | null> {
    try {
      const data = await axios.get(`${url}?name=${name}`);

      if (data.status != 200) {
        return null;
      }

      return data.data as T;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
