import * as express from "express"
import { Request, Response } from "express"
import { Adress } from "./entity/Adress"
import dataSource from "./dataSource"
var router = express.Router();

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source adress foi inicializado");
    })
    .catch((err) => {
        console.log("Erro durante a inicialização: ", err);
    })


router.get("/", async function (req: Request, res: Response) {
    const adress = await dataSource.getRepository(Adress).find()
    res.json(adress)
})

router.get("/:id", async function (req: Request, res: Response){
    const results = await dataSource.getRepository(Adress).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

router.post("/", async (req: Request, res: Response) => {
   // const user = await dataSource.getRepository(User).create(req.body)
    const adress = req.body
    const results = await dataSource.getRepository(Adress).save(adress)
    res.send(results)
})

router.put("/:id", async (req: Request, res: Response) => {
    const adress = await  dataSource.getRepository(Adress).findOneBy({
        id: +req.params.id,
    }) 
    dataSource.getRepository(Adress).merge(adress, req.body)
    const results = await dataSource.getRepository(Adress).save(adress)
    res.send(results)
})

router.delete("/:id", async (req: Request, res: Response)=> {
    const results = await dataSource.getRepository(Adress).delete(req.params.id)
    res.send(results)
})


export default router
