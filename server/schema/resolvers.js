import Review from "../models/Review";
import Movie from "../models/Movie";

const resolvers = {
  Query: {
    async getReview(root, { _id }) {
      return await Review.findById(_id);
    },
    async getAllReview() {
      return await Review.find({});
    },
    async getMovieReviews(root, { movieId }) {
      return await Review.find({ movieId });
    },
    async getMovie(root, { _id }) {
      return await Movie.findById(_id);
    },
    async getAllMovie() {
      return await Movie.find({});
    },
  },
  Mutation: {
    async addReview(root, { input }) {
      return await Review.create(input);
    },
    async deleteReview(root, { _id }) {
      return await Review.findOneAndDelete({ _id });
    },
  },
};

export default resolvers;
