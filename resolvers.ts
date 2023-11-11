import { books } from './books.json';
import { Book } from './types';

export const resolvers = {
  Query: {
    books: () => books as Book[],
  },
};
