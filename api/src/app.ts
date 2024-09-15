import Fastify from "fastify"
import fastifyCors from "@fastify/cors"
import fastifyCompress from "@fastify/compress"

const fastify = Fastify()

fastify.register(fastifyCompress,
    { 
        global: true ,
        threshold: 1024
    }
)

fastify.register(fastifyCors, {
    origin: '*'
})

fastify.listen({ port: 3000 }).then(() => {
	console.log("http server running")
})