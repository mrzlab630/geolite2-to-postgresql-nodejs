'use strict';

import 'dotenv/config';

import path from 'path';
import CreateGeoNameDB from './geolite2-to-postgresql-nodejs.js';





    const createDbTables = async () => {

        try {

            const connectDb         = {
                                            host:process.env.DB_PSTG_HOST,
                                            database:process.env.DB_PSTG_NAME,
                                            port:process.env.DB_PSTG_PORT,
                                            user:process.env.DB_PSTG_USER,
                                            password:process.env.DB_PSTG_PASS,
                                        };

            const locations         = ['en','ru'];

            const dir               =  path.join(__dirname, '..', 'public', 'uploads');


            const createGeoNameToBD = new CreateGeoNameDB(  connectDb,
                                                            locations,
                                                            dir);



            const res = await createGeoNameToBD.go();



            console.log(res);





        }catch (e) {
            console.log(`err`,e);

        }



    };


    createDbTables();


