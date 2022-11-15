import { NextFunction, Request, Response } from "express"

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization
  if (!authorization) {
    return res.status(401).send({ error: "missing bearer token" })
  }

  const accessToken = authorization.replace(/bearer /gi, "")
  if (!accessToken) {
    return res.status(401).send({ error: "invalid access token" })
  }

  res.locals.accessToken = accessToken

  return next()
}
