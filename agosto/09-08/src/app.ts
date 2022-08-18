import * as express from "express"
import address from "./adress"
import users from './user'

const app = express ()
app.use(express.json())

app.use('/user', users);
app.use('/adress', address);


const PORT = process.env.PORT

app.listen(PORT, () => {console.log(`Executando em http://localhost:${PORT}`)})