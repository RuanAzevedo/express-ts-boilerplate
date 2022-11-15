// import { authMiddleware } from '@middlewares/authMiddleware'
import { Router } from 'express'

const routes = Router()

// routes.use(authMiddleware)

routes.get('/', (_, res) => {
  return res.send({ hello: 'world!' })
})

export { routes }
