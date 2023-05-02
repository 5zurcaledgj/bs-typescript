import { Request as EspressRequest, Response as ExpressResponse } from 'express';
import fetchCountries from '../services/fetch-countries';
import Country from '../common/country';
import getFlagLink from '../utils/index';

/**
 * Countries page.
 * @route GET /
 */
export const getCountries = async (req: EspressRequest, res: ExpressResponse) => {
  const countries: Country[] = await fetchCountries();
  res.send(countries);
};

export const getCountry = async (req: EspressRequest, res: ExpressResponse) => {
  const { countryName } = req.params;

  console.log(countryName);
  const countries: Country[] = await fetchCountries();
  const chosenCountry: Country | undefined = countries.filter((country: Country) => country.name.common.toLowerCase() === countryName.toLowerCase());
  if (typeof chosenCountry === 'undefined') {
    res.send('No match');
    return;
  }

  res.send(getFlagLink(chosenCountry));
};

