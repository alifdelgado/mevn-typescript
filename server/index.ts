import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { startConnection } from './database';

const main = () => {
    startConnection();
    app.listen(app.get('port'));
};

main();
