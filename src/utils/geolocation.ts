import {PermissionsAndroid, Platform} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

class GeolocationPosition {
  async getPermission() {
    try {
      if (Platform.OS === 'ios') {
        const result = await Geolocation.requestAuthorization('whenInUse');
        if (result === 'granted') {
          return true;
        }
        this.getPermission();
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        }
        return false;
      }
    } catch (error) {
      console.log('Error', error);
      return false;
    }
  }

  async getLocationLatLng() {
    if (await this.getPermission()) {
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => resolve(position),
          err => reject(err),
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          },
        );
      });
    }
  }
}

export default new GeolocationPosition();
