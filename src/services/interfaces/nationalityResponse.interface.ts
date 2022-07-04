import { CountryResponse } from "./countryResponse.interface";

export interface NationalityResponse {
    name: string;
    country: CountryResponse[];
}
