import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Hello Express for TypeScript',
  })
})

export default router
