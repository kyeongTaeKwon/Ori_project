import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
  type Review {
    _id:ID!
    content:String!
    recommendations:Int!
    movieId:ID!
  } 

  type Movie {
    _id:ID!
    title:String!
    genreId:ID!
  } 
  type User {
    _id:ID!
    nickname:String!
    email:String!
  }

  type Genre {
    _id:ID!
    name:String!
  }
  
  type Query {
    getReview (_id:ID!): Review
    getAllReview: [Review]
    getMovieReviews(movieId:ID!):[Review]
    getMovie (_ID:ID!): Movie
    getAllMovie:[Movie]
  }

  input ReviewInput {
    content: String!
    movieId:ID!
  }

  type Mutation {
    addReview(input: ReviewInput) : Review
    deleteReview(_id:ID!):Review
  } 
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;
