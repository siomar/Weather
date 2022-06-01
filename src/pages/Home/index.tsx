import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import api from '../../services/api';

import Geolocation from '../../utils/geolocation';

import {
  Background,
  Box,
  Title,
  Icon,
  Description,
  SafeArea,
  Details,
  Address,
  Content,
  Update,
  UpdateText,
  Table,
  Line,
  LineTitle,
  LineDecription,
  Loading,
  Temp,
  TempTitle,
} from './styles';

import bg from '../../assets/bg.jpg';
import {IAddress, ILocation, IResponse, IWeather} from './interfaces';

const Home = () => {
  const [weather, setWeather] = useState({} as IWeather);
  const [address, setAddress] = useState({} as IAddress);
  const [info, setInfo] = useState({} as any);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const key = 'cdc9309860b9fb1a8b1e0e8a93ecf9bf';
      const {coords}: ILocation = await Geolocation.getLocationLatLng();

      const {data}: IResponse = await api.get(
        `weather?lat=${coords.latitude}&lon=${coords.longitude}&lang=pt&appid=${key}&units=metric`,
      );
      setWeather(data.weather[0]);
      setAddress({
        city: data.name,
        country: data.sys.country,
      });
      setInfo({
        visibility: data.visibility,
        humidity: data.main.humidity,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
      });
      setLoading(false);
    } catch (error) {
      Alert.alert('Ops, ocorreu um erro!', error.message);
    }
  };

  const editTemp = (temp: number) => temp.toFixed(0);

  const updateScreen = () => {
    setLoading(true);
    getLocation();
  };
  return (
    <>
      {loading && (
        <Loading>
          <Description>Carregando...</Description>
        </Loading>
      )}

      <Background nestedScrollEnabled={true}>
        <Box source={bg} resizeMode="cover">
          <SafeArea>
            {weather && (
              <Icon
                source={{
                  uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
                }}
              />
            )}
            <Title>{info.temp && editTemp(info.temp)}°C</Title>
            <Description>{weather.description}</Description>
          </SafeArea>
        </Box>
        <Content>
          <Details>
            <Temp>
              <TempTitle>{weather.main}</TempTitle>
              <Address>
                {address.city} - {address.country}
              </Address>
            </Temp>
            <Table>
              <Line>
                <LineTitle>Visibilidade:</LineTitle>
                <LineDecription>{info.visibility}km</LineDecription>
              </Line>
              <Line>
                <LineTitle>Umidade</LineTitle>
                <LineDecription>{info.humidity}%</LineDecription>
              </Line>
              <Line>
                <LineTitle>Temperatura min.</LineTitle>
                <LineDecription>
                  {info.temp_min && editTemp(info.temp_min)}°C
                </LineDecription>
              </Line>
              <Line>
                <LineTitle>Temperatura max.</LineTitle>
                <LineDecription>
                  {info.temp_max && editTemp(info.temp_max)}°C
                </LineDecription>
              </Line>
            </Table>
          </Details>
          <Update
            onPress={updateScreen}
            accessibilityLabel="Atualizar status"
            testID="pressButton">
            <UpdateText>Atualizar</UpdateText>
          </Update>
        </Content>
      </Background>
    </>
  );
};

export default Home;
