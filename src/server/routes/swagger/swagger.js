import swaggerFile from '../../../../swaggerUI/swagger.json'

export default function swagger(req, res, next) {
  if (swagger) {
    res.send(swaggerFile)
  } else {
    next(new Error('Swagger Not Found'))
  }
}
