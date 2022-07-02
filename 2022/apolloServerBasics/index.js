const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    # Comments can be made with a # withing a GraphQL string

    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
    #   # the Query type is specific, it allows us to list this as an available query of books and returns an array of a Type (in this case it returns the Book type). A top level entry point for our server
`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin'
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster'
    }
];

//  // A Resolver is how we fetch data
const resolvers = {
    Query: {
        books: () => books,
    },
};

const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

//  // We can now open Apollo Sandbox and use the bellow query to get our data

// query GetBooks {
    // Define a query of GetBooks
//     books {
    //  // I believe this comes from the books key in our resolvers
//       title
//       author
//  //  //  // We can delete author to just return the titles!
//     }
//   }