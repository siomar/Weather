import styled from 'styled-components/native';
import {
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const Background = styled(ScrollView)`
  flex: 1;
  padding: 0px;
  position: relative;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Icon = styled.Image`
  border-radius: 70px;
  width: 70px;
  height: 70px;
`;

export const Title = styled.Text`
  font-size: 35px;
  line-height: 50px;
`;

export const Description = styled.Text`
  font-size: 24px;
  line-height: 26px;
  opacity: 1;
`;

export const Box = styled(ImageBackground)`
  width: 100%;
  height: 300px;
  background-color: #fff;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 18px;
  box-sizing: border-box;
`;

export const Details = styled.View`
  margin: 14px 0px;
`;

export const Address = styled.Text`
  font-size: 18px;
  line-height: 26px;
  opacity: 1;
  align-items: center;
`;

export const Update = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #ffcc01;
  justify-content: center;
  align-items: center;
`;

export const UpdateText = styled.Text`
  font-size: 24px;
  line-height: 26px;
  color: #fff;
`;

export const Table = styled.View`
  padding: 20px 0px;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const LineTitle = styled.Text`
  font-size: 20px;
  line-height: 22px;
  color: #000;
`;

export const LineDecription = styled.Text`
  font-size: 20px;
  line-height: 22px;
  color: #777;
`;

export const Loading = styled.View`
  position: absolute;
  background-color: #ffcc01;
  flex: 1;
  width: 100%;
  height: 100%;
  z-index: 200;
  justify-content: center;
  align-items: center;
`;

export const Temp = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TempTitle = styled.Text`
  font-size: 26px;
  line-height: 28px;
  color: #000;
`;
