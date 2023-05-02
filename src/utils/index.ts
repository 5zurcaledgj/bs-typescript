import Country from '../common/country';

const getFlagLink = (country: Country): string => country.flags.png;

export default getFlagLink;