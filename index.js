const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send('Hello, world, wangrunlei')
})

//console.log(process.env.PORT)

server.listen(process.env.PORT, () => console.log(`listening ${process.env.PORT}`))

