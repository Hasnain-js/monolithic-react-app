import express from 'express'
import config from './config'
import apiRouter from './api-route'
import serverRender from './render'
const server = express()

server.use(express.static('dist'))

server.set('view engine', 'ejs')

server.use("/api", apiRouter);

server.use("/", async (require, response) => {
    const { initialMarkUp, initialData } = await serverRender()
    response.render('index', {
        initialMarkUp,
        initialData
    });
})
server.listen(config.PORT, config.HOST, () => {
    console.info(`listening on port ${config.SERVER_URL}`)
})
