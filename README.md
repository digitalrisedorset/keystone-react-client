# keystone-react-client

This repository uses Create React App as a basis and add a React component to connect to GraphQl
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npm install`
`npm install @apollo/client`

## start the client
`npm start`

## requirement
a functional keystone system must be running and the cors config must allow the client to connect

the file `.keystone/config.js` must be changed 

from
`var keystone_default = (0, import_core2.config)({
    db: {
        provider: "sqlite",
        url: process.env.DATABASE_URL || "file:./keystone-example.db",
        // WARNING: this is only needed for our monorepo examples, dont do this
        ...fixPrismaPath
    },
    lists
});`

to
`var keystone_default = (0, import_core2.config)({
    server: {
        cors: { origin: ["http://localhost:3001"], credentials: true },
            port: 3001,
            maxFileSize: 200 * 1024 * 1024,
            extendExpressApp: async (app, commonContext) => {},
            extendHttpServer: async (httpServer, commonContext) => {
        }
    },
    db: {
        provider: "sqlite",
        url: process.env.DATABASE_URL || "file:./keystone-example.db",
        // WARNING: this is only needed for our monorepo examples, dont do this
        ...fixPrismaPath
    },
    lists
});`