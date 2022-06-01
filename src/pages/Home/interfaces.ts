export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface ILocation {
  coords: ICoords;
}

export interface ICoords {
  latitude: string;
  longitude: string;
}

export interface IAddress {
  city: string;
  country: string;
}

export interface IResponse {
  data: IData;
}

export interface IData {
  name: string;
  visibility: number;
  main: {
    humidity: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  sys: {
    country: string;
  };
  weather: IWeather[];
}
