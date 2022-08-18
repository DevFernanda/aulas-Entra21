import * as express from "express"
import {Request, Response} from "express"
import { Medico } from "./entity/medicos"
import data from "./data"

const app = express ()
app.use(express.json())

app.post("/user", async (req: Request, res: Response) => {
    // const user = await dataSource.getRepository(User).create(req.body)
     const user = req.body
     const results = await data.getRepository(Medico).save(user)
     res.send(results)
 })

const PORT = process.env.PORT

app.listen(PORT, () => {console.log(`Executando em http://localhost:${PORT}`)})