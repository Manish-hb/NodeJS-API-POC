import path from 'path'
const uiPath = '/../../../../swaggerUI/index.html'

export default function swaggerUI(req, res, next) {
  res.sendFile(path.normalize(__dirname + uiPath))
}
