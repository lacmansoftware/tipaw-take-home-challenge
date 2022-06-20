// graphQL wrapper
const { gql } = require("apollo-server");

module.exports = gql`
  type user {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    resetToken: String
    resetTokenExp: Date,
    activeToken: String,
    active: Boolean,
  }

  type Query {
    users: [user]
  }
`
