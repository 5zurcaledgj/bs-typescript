import axios from 'axios';
import Country from '../common/country';

type Countries = Country[] | [];

const fetchCountries = async (): Promise<Countries> => {
  const api = 'https://restcountries.com/v3.1/all?fields=name,flags';
  try {
    const { data } = await axios(api);
    const countries: Country[] = data;
    return countries;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchCountries;
