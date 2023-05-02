import NameInLanguage from './name-in-language';

export default interface CountryName {
  common: string,
  official: string,
  nativeName: Record<string, NameInLanguage>
}
