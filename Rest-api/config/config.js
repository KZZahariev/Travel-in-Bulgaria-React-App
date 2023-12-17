const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/Travel-in-Bulgaria-react',
        origin: ['http://127.0.0.1:5173', 'http://localhost:5173'] //'http://localhost:5555'
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb+srv://KZZahariev:Paris9602@travel-in-bulgaria.0tvahgf.mongodb.net/?retryWrites=true&w=majority', //process.env.DB_URL_CREDENTIALS, //
        origin: ['https://exam-angular-june-2023.vercel.app'] //'http://localhost:5555', 'http://localhost:4200',
    }
};

module.exports = config[env];
