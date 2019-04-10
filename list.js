// client init
// # https://aws-amplify.github.io/docs/js/api#aws-appsync-sdk

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import awsmobile from "../aws-exports";

API.configure(awsmobile);


const client = new AWSAppSyncClient({
    url: awsmobile.aws_appsync_graphqlEndpoint,
    region: awsmobile.aws_appsync_region,
    auth: {
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
  });

  const result = await GraphSer.getClient().query({
    query: gql(queries.listChannels)
  });

  console.log("TABS: data returned from apollo",result.data.listChannels.items.length);


  // create channel
  const input = {
    name: chName,
    createdBy: userID,
    CreatedDate:new Date()
  }
  const result = await client.mutate({
    mutation: gql(mutations.createChannel),
    variables: {
      input: input
    }
  });