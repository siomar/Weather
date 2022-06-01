import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

interface SplashProps {
  navigation: any;
}

const Splash = ({navigation}: SplashProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1000);
  });
  return <View style={styles.bg} />;
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#ffcc01',
  },
});

export default Splash;
