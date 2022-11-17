const http = require('http');
const app = require('./app');
const port = 3005;

const server = http.createServer(app);

server.listen(port, () => 
console.log(`server listening on port ${port}`));

const cors=require('cors');
app.use(cors());
