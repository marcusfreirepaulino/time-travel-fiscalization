import express from 'express';
import routes from './src/routes/routes';

const app = express();
const PORT : number = 5000;

app.get('/', (req, res) =>{
    res.send('Relou uorld!');
})

app.listen(PORT, ()=>{
    console.log('Server Running on port: http://localhost:' + PORT);
})

