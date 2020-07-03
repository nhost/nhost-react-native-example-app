## Nhost React Native Example App

[Nhost](https://nhost.io) example app in React Native using [Hasura](https://hasura.io).

## Get started

1. Create a project on [Nhost](https://nhost.io/register).
2. Clone this repo.
3. Copy `config-example.yaml` to `config.yaml` in `hasura/`.
4. Update `config.yaml` with `endpoint` and `admin_secret` in `hasura/`.
5. Apply migrations and metadata: `cd hasura; hasura migrate apply; hasura metadata apply;`.
6. Copy `config-example.ts` to `config.ts` in `src/`.
7. Update `config.ts` with the details from you project at Nhost.
8. `yarn install`.
9. `yarn start`.


## Creating React Native Project

```javascript
npx react-native init <Project Name>
```

---------------------------------------------------------------------------------------------------------------------------
## Adding the apis
Creating a file `src/helpers/api.js`

```
export const GRAPHQL_ENDPOINT = 'https://hasura-[id].nhost.app/v1/graphql';
export const BACKEND_ENDPOINT = 'https://backend-[id].nhost.app';

export const X_HASURA_ADMIN_SECRET = '<Your_Secret>';
```

---------------------------------------------------------------------------------------------------------------------------

## Adding nhost-js-sdk 

##### Installation

`npm install --save nhost-js-sdk`


##### Initialising Nhost Auth & Storage
Creating a file `src/helpers/nhostSdk/index.js`

```
import nhost from 'nhost-js-sdk';
import { BACKEND_ENDPOINT } from '../api';

const config = {
  endpoint: BACKEND_ENDPOINT,
};

nhost.initializeApp(config);

const auth = nhost.auth();
const storage = nhost.storage();

export { auth, storage };

```

##### Checkout the full usage of Auth and Storage [here](https://github.com/nhost/nhost-js-sdk).

## A Simple Auth can be found in this repo.

##### Working GIF

| iOS                                          | Android                                      |
|----------------------------------------------|----------------------------------------------|
| ![](nhostExample.gif)                        |                                              |

---------------------------------------------------------------------------------------------------------------------------





