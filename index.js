import express from 'express'
import path from 'path'
import serveR from './routes/server.js'
import BaseServeR from './routes/baseRout.js'


const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()


app.set('view engine', 'ejs') // use ejs
app.set('views', path.resolve(__dirname, 'ejs')) // rename view folder


app.use(express.static(path.resolve(__dirname, 'static')))
app.use(serveR)

app.use(BaseServeR)


app.listen(PORT, ()=> // listen PORT: 3000
    {
    console.log(`${PORT}-portda ishlepman...`);
    })