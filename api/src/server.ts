import express from 'express'
import cors from 'cors'
import compression from 'compression'

const app = express()

app.use(cors())
app.use(compression())

app.listen(3000, () => {
    console.log('running...')
})