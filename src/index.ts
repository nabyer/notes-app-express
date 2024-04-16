import express, { Request, Response } from 'express'
import { infoRouter } from './routes/info'
import { notesRouter } from './routes/notes'

// we define our server and port

const app = express();
const port = 3000;

// Setup custom middleware

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Setup routes

app.use('/info', infoRouter)
app.use('/notes', notesRouter)


// http-request: method (GET, POST, ...), URL (path)
// this structure is used by express
app.get('/', (req: Request, res: Response) => {
    res.send('Hallo Welt! Ich bin ein Express-Server');
});

// start our server

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}.`)
})