### import geolite2 geoip database to postgresql

## install
**yarn install**

## start
**yarn start**

## how to use

```
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

            const locations         = ['en','ru','de','es','fr','ja','br','cn']; //ip4 and ip6 -- updated automatically

            const dir               =  path.join(__dirname, '..', 'public', 'uploads');


            const createGeoNameToBD = new CreateGeoNameDB(  connectDb, locations, dir);


            const res = await createGeoNameToBD.go();

            console.log(res);

        }catch (e) {
            console.log(`err`,e);

        }

    };


    createDbTables();
           
```

## Donation
If this project help you reduce time to develop, you can give me a cup of coffee :)
<br>
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3FYLY9YVBTSEL)



### `By`
**mrZ** - mrzlab630@gmail.com

## License

The MIT License.