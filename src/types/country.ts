export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
}
export interface Demonyms {
  [key: string]: {
    f: string;
    m: string;
  };
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
export type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};
export interface Currencies {
  EUR: Eur;
}

export interface Eur {
  name: string;
  symbol: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  [key: string]: string;
}

export type Translations = {
  [key: string]: string;
};

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Gini {
  [key: string]: number;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
}
export type CountryKeys = keyof Country;
