import axios from 'axios';
import { AgeResponse, GenderResponse, NationalityResponse } from './interfaces';

export enum ApiUrlEnum {
  AGE = 'https://api.agify.io/',
  GENDER = 'https://api.genderize.io/',
  NATIONALITY = 'https://api.nationalize.io/',
}

export class ApiService {
  public async getAgeData(name: string): Promise<AgeResponse | null> {
    return this.getResult<AgeResponse>(name, ApiUrlEnum.AGE);
  }

  public async getGenderData(name: string): Promise<GenderResponse | null> {
    return this.getResult<GenderResponse>(name, ApiUrlEnum.GENDER);
  }

  public async getNationalityData(
    name: string,
  ): Promise<NationalityResponse | null> {
    return this.getResult<NationalityResponse>(name, ApiUrlEnum.NATIONALITY);
  }

  public async getResult<T>(name: string, url: ApiUrlEnum): Promise<T | null> {
    try {
      const data = await axios.get(`${url}?name=${name}`);

      if (data.status !== 200) {
        return null;
      }

      return data.data as T;
    } catch (e) {
      return null;
    }
  }
}
