import * as express from "express"
import { Request, Response } from "express"
import { User }  from "./entity/User"
import dataSource from "./dataSource"
const routerUser = express.Router();


dataSource
    .initialize()
    .then(() => {
        console.log("Data Source user foi inicializado");
    })
    .catch((err) => {
        console.log("Erro durante a inicialização: ", err);
    })

routerUser.get("/", async function (req: Request, res: Response) {
    const users = await dataSource.getRepository(User).find()
    res.json(users)
})

routerUser.get("/:id", async function (req: Request, res: Response){
    const results = await dataSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
})

routerUser.post("/", async (req: Request, res: Response) => {
   // const user = await dataSource.getRepository(User).create(req.body)
    const user = req.body
    const results = await dataSource.getRepository(User).save(user)
    res.send(results)
})

routerUser.put("/:id", async (req: Request, res: Response) => {
    const user = await  dataSource.getRepository(User).findOneBy({
        id: req.params.id,
    }) 
    dataSource.getRepository(User).merge(user, req.body)
    const results = await dataSource.getRepository(User).save(user)
    res.send(results)
})

routerUser.delete("/:id", async (req: Request, res: Response)=> {
    const results = await dataSource.getRepository(User).delete(req.params.id)
    res.send(results)
})


export default routerUser