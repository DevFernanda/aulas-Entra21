import * as express from "express"
import {Request, Response} from "express"
import {Categoria} from './entity/Categoria'
import dataSource from './dataSource'
const router = express.Router();


    router.get("/", async function (req: Request, res: Response) {
        const categoria = await dataSource.getRepository(Categoria).find()
        res.json(categoria)        
    })


    router.get("/:id", async function (req: Request, res: Response) {
        const results = await dataSource.getRepository(Categoria).findOneBy({
            id: +req.params.id,
        })
        return res.send(results)
    })

    router.post("/", async (req: Request, res: Response) => {
        const categoria = req.body
        const results = await dataSource.getRepository(Categoria).save(categoria)
        res.send(results)
    })


    router.put("/:id", async (req: Request, res: Response) => {
        const categoria = await dataSource.getRepository(Categoria).findOneBy({
            id: +req.params.id,
        })
        dataSource.getMongoRepository(Categoria).merge(categoria, req.body)
        const results = await dataSource.getRepository(Categoria).save(categoria)
        res.send(results)
    })

    router.delete("/:id", async (req: Request, res:Response) => {
        const results = await dataSource.getRepository(Categoria).delete(req.params.id)
        res.send(results)
    })

    export default router