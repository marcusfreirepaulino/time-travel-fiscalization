import express from 'express';
import routes from './src/routes/routes';
import { buildSchema } from 'graphql';
import {graphqlHTTP} from 'express-graphql'

const app = express();
const PORT : number = 5000;

const types = `#graphql
type Query {
    hello: String!
}

`
const schema = buildSchema(types);

const hello = {
    hello: "Relou uorld!"
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: hello,
    graphiql: true
}))

app.get('/', (req, res) =>{
    res.send('Relou uorld!');
})

app.listen(PORT, ()=>{
    console.log('Server Running on port: http://localhost:' + PORT);
})

