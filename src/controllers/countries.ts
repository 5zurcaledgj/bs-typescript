import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import fetchCountries from '../services/fetch-countries';
import Country from '../common/country';
import getFlagLink from '../utils/index';

/**
 * Countries page.
 * @route GET /
 */
export const getCountries = async (req: ExpressRequest, res: ExpressResponse) => {
  const countries: Country[] = await fetchCountries();
  res.send(countries);
};

export const getCountry = async (req: ExpressRequest, res: ExpressResponse) => {
  const { countryName } = req.params;

  console.log(countryName);
  const countries: Country[] = await fetchCountries();
  const chosenCountry: Country | undefined = countries.find((country: Country) => country.name.common.toLowerCase() === countryName.toLowerCase());
  console.log(chosenCountry);
  if (typeof chosenCountry === 'undefined') {
    res.send('No match');
    return;
  }

  res.send(getFlagLink(chosenCountry));
};

