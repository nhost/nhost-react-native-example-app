import { GRAPHQL_ENDPOINT, X_HASURA_ADMIN_SECRET } from "./api";

export const getRequestObject = ({ data, token }) => ({
  method: 'POST',
  url: GRAPHQL_ENDPOINT,
  data,
  headers: {
    Authorization: `Bearer="${token}"`,
    'x-hasura-admin-secret': X_HASURA_ADMIN_SECRET
  },
})
