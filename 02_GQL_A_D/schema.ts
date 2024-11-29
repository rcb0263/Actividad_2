export const schema = `#graphql
type Flight {
  id: ID!
  Origen: String!
  Destino: String!
  
}

type Query {
  getflights(Origen: String, Destino: String): [Flight!]!
  getflight(id: ID!): Flight
}

type Mutation {
  addFlight(Origen: String!, Destino: String!, Fecha: String!): Flight!
}
`;