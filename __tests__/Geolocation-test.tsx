import 'react-native';
import Geolocation from '../src/utils/geolocation';

jest.mock('../src/utils/geolocation', () => {
  return {
    getPermission: () => true,
    getLocationLatLng: () =>
      new Promise((resolve, reject) => {
        resolve({lat: 37.785834, lon: -122.406417});
      }),
  };
});

describe('Geolocation', () => {
  test('should get permission use geolocation', () => {
    const result = Geolocation.getPermission();
    expect(result).toBe(true);
  });
  test('should get my geolocation position', async () => {
    try {
      const position = await Geolocation.getLocationLatLng();
      await expect(position).toEqual({lat: 37.785834, lon: -122.406417});
    } catch (error) {
      expect(error).toMatch('error');
    }
  });
});
