# Installation

- clone the repo and then `cd SKN-SERVER`

## Setup docker environment

- Create `.env` file which will be consumed via `docker-compose.yml`

  - `nano .env` and paste the following variables

    ```env
        # will be used by only in docker file to inject variables in docker-compose.yml
        # port will set by docker only
        PORT=5050
        DB_PORT=5090
        DB_NAME=SKN_db
        DB_USERNAME=username
        DB_PASSWORD=password

        BASE_URL=https://localhost:5090/
        CERT_PATH=server.cert
        KEY_PATH=server.key
        FACEBOOK_CLIENT_ID=775340076293966,
        FACEBOOK_CLIENT_SECRET=3b0be9c79d15fcdf68fbe4561d38e2b2,

        REDIS_PASS=skn_dev_redis
    ```

    - **NOTE:** all these variables will only be consumed via `docker-compose.yml` file and will not affect the code.
    - `BASE_URL` is the url which our node app is running
    - `PORT` is the port which app will be running on via `docker-compose up` **(this value can be changed as you want)**
    - `DB_PORT` is the port will be exposed to your `localhost` incase you want to connect to db vai any tool _eg. no sql booster_ **(this value can be changed as you want)**
    - Other variables is straight forward to conclude.

- Create `docker.env` file which you will be using _in code_ in **docker** environment

  - `nano docker.env` and paste the following variables

    ```env
            # will be used in code in docker environment

            DB_HOST=skndb
            DB_PORT=27017
            DB_NAME=SKN_db
            DB_USERNAME=username
            DB_PASSWORD=password
            jwtPrivateKey=123

    ```


            REDIS_PASS=skn_dev_redis
            # should be the redis container name
            REDIS_HOST=cache

            BASE_URL=https://localhost:5050
            CERT_PATH=server.cert
            KEY_PATH=server.key
            FACEBOOK_CLIENT_ID=775340076293966,
            FACEBOOK_CLIENT_SECRET=3b0be9c79d15fcdf68fbe4561d38e2b2,
    ```

    - `BASE_URL` is the url which our node app is running
    - `DB_HOST` is the name of the host of our db in docker environment.
    - `DB_PORT` is the port which we will use to connect to db via code.
      - **NOTE** This port value should be _27017_ cuz we are connecting to the image(skndb) itself not the mapping port in our host(localhost)
    - Other variables is straight forward to conclude.

- Happy coding via `docker-compose up`
  - Your app is running and accessible on `localhost:${PORT}` => which comes from `.env` file
  - Your app is running and accessible on `mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:${PORT}/?authSource=admin` => which comes from `.env` file

## Setup local environment

### If you want to run local/debug but on **same db** on docker follow the below steps 👇👇

- Create `local.env` file which you will be using _in code_ in **local/debug** environment

  - `nano local.env` and paste the following variables

    ```env
           # will be used in code in local and debug environment

          PORT=6060
          DB_HOST=localhost

            # should be exactly as DB_PORT in .env when running on docker db
            #                but if we want to connect to local mongo host should be 27017
            DB_PORT=5090
            DB_NAME=SKN_db
            DB_USERNAME=username
            DB_PASSWORD=password
            jwtPrivateKey=123

            REDIS_PASS=skn_dev_redis
            REDIS_HOST=localhost

            BASE_URL=https://localhost:5090/
            CERT_PATH=server.cert
            KEY_PATH=server.key
            FACEBOOK_CLIENT_ID=775340076293966,
            FACEBOOK_CLIENT_SECRET=3b0be9c79d15fcdf68fbe4561d38e2b2,
    ```

    - To work with redis you will need to run the compose(at least the redis service)
    - `PORT` is the port which app will be running on in **local/debug** mode **(this value can be changed as you want)**
    - `BASE_URL` is the url which our node app is running
    - `DB_HOST` is the name of the host of our db in **local/debug** mode.
    - `DB_PORT` is the port which we will use to connect to db via code.
      - **NOTE** This port value should be same as `DB_PORT` in `.env` file cuz we are connecting to the db which is running on the image(skndb).
    - Other variables is straight forward to conclude.

### If you want to run local/debug but **on the host db**

- Do the last steps in setting up `local.env` file but change the `DB_PORT` to `27017`

- Happy coding via `npm run local`/ debug mode by `F5`
