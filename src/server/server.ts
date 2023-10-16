import express from 'express'
import config from './config'
import apiRouter from './api-route'
import serverRender from './render'
const server = express()

server.use(express.static('dist'))

server.set('view engine', 'ejs')

server.use("/api", apiRouter);

server.get(["/", "/contest/:contestId"], async (require: any, response: any) => {
    const { initialMarkUp, initialData } = await serverRender(require)
    response.render('index', {
        initialMarkUp,
        initialData
    });
})
server.listen(config.PORT, config.HOST, () => {
    console.info(`listening on port ${config.SERVER_URL}`)
})
