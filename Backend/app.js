import express from "express"
import userRoutes from './user.routes';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', userRoutes);


export {app}