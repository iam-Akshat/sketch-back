const app = require('./app');
const {createServer} = require('http')

const server = createServer(app)
server.listen(process.env.PORT || 3001,()=>{
    console.log('server started')
})
