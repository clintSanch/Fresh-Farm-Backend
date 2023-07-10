const graphql = require('graphql');
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean, GraphQLString, GraphQLInt, GraphQLNonNull
} from 'graphql';
const User = require('../Model/User');




const userDetails = new GraphQLObjectType({
    name: User,
    fields: () => ({
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        phonenumber: { type: GraphQLInt },
        password: { type: GraphQLString }
    })
});

/**
 *the root query is what allows GraphQL to jump and  land on any data piece in the graph
 */
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: userDetails,
            args: {},
            resolve: async () => {
                try {
                    return
                } catch (error) {

                }
            }
        },
        getOneUser: {
            type: userDetails,
            args: { id: { type: GraphQLString } },
            resolve: async () => {
                try {
                    return
                } catch (error) {

                }
            }
        }
    }
});

/**
 * Root Mutation
 */
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: userDetails,
            args: { id: { type: GraphQLID }, firstname: { type: GraphQLString }, lastname: { type: GraphQLString }, email: { type: GraphQLString }, phonenumber: { type: GraphQLInt }, password: { type: GraphQLString } },
            resolve: async (parent, args, context, Info) => {
                try {
                    return
                } catch (error) {

                }
            }
        },
        deleteUser: {
            type: userDetails,
            args: { id: { type: GraphQLID } },
            resolve: async () => {
                try {
                    return
                } catch (error) {

                }
            }
        },
        updateUser: {
            type: userDetails,
            args: { id: { type: GraphQLID } },
            resolve: async () => {
                try {
                    return
                } catch (error) {

                }
            }
        },
        login: {
            type: userDetails,
            args: { firstname: { type: graphql.GraphQLNonNull(graphQLString) }, email: { type: graphql.GraphQLNonNull(GraphQLString) }, password: { type: graphql.GraphQLNonNull(GraphQLString) } },
            resolve: () => {
                try {
                    return
                } catch (error) {

                }
            }
        }
    }
});


/**
 *GraphQLSchema takes in a RootQuery and returns a GraphQLSchema instance
 *so we export this into our server.js file and now server.js can access
 *the RootQuery and the whole GraphQLSchema here
 */
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});