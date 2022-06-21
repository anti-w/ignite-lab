import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o2m1nr08ny01xihduafla0/master",
  cache: new InMemoryCache(),
});
