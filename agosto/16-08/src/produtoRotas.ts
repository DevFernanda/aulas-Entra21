import * as express from "express"
import {Request, Response} from "express"
import { DataSource } from "typeorm";
import dataSource from './dataSource'
import {Produto} from './entity/Produto'
const router = express.Router();


router.get("/", async function (req: Request, res: Response) {
    const produto = await dataSource.getRepository(Produto).find()
    res.json(produto)
})

router.get("/:id", async function (req: Request, res:Response) {
    const results = await dataSource.getRepository(Produto).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

router.post("/", async (req:Request, res:Response) => {
    const produto = req.body
    const results = await dataSource.getRepository(Produto).save(produto)
    res.send(results)
})

router.put("/:id", async (req:Request, res:Response) => {
    const produto = await dataSource.getRepository(Produto).findOneBy({
        id: +req.params.id,
    })
    dataSource.getRepository(Produto).merge(produto, req.body)
    const results = await dataSource.getRepository(Produto).save(produto)
    res.send(results)
})

router.delete("/:id", async (req:Request, res:Response) => {
    const results = await dataSource.getRepository(Produto).delete(req.params.id)
    res.send(results)
})

export default router