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

// A Sample GraphQL Query
// export const getSkills = () => {
//   return {
//     query: `query getSkills {
//       tags {
//         tag
//       }
//     }`
//   }
// }

// A function which returns a response to the axios request, wrapping the graphQL Function 
// const fetchSkills = async (_, token) => {
//   const response = await axios(
//     getRequestObject({
//       data: getSkills(),
//       token
//     })
//   );
//   return response;
// }
