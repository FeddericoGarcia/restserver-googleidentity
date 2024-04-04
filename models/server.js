const express = require('express')
const cors = require('cors');
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.port || PORT;
        this.path = '/home';

        this.middlewares();

        this.routes();
    }


    middlewares(){
        this.app.use(cors());
        
        this.app.use(express.static('public'));
        
    }
    routes(){
        this.app.use(this.path, require('../routes/path'));
    }

    listen(){
        this.app.listen(this.port , () => {
            console.log(`Server running on port ${this.port}`)
        })
    }

}

module.exports = Server;