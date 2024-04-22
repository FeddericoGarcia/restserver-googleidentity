const express = require('express')
const cors = require('cors');

const { dbConnect } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.port || PORT;
        this.path = '/home';

        this.dbConnection();

        this.middlewares();

        this.routes();
    }

    async dbConnection(){
        await dbConnect();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static( 'public' ));
    }
    
    routes(){
        this.app.use(this.path, require('../routes/path'));
    }

    listen(){
        this.app.listen(this.port , () => {
            console.log( `Server running on port ${ this.port }` )
        })
    }

}

module.exports = Server;