import nhost from 'nhost-js-sdk';
import { BACKEND_ENDPOINT } from '../api';
import AsyncStorage from '@react-native-community/async-storage';
const config = {
  endpoint: BACKEND_ENDPOINT,
  storage: AsyncStorage
};

nhost.initializeApp(config);

const auth = nhost.auth();
const storage = nhost.storage();

export {
  auth,
  storage
};