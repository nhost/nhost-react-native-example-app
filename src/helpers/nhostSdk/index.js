import nhost from 'nhost-js-sdk';
import { BACKEND_ENDPOINT } from '../api';

const config = {
  endpoint: BACKEND_ENDPOINT,
};

nhost.initializeApp(config);

const auth = nhost.auth();
const storage = nhost.storage();

export { auth, storage };