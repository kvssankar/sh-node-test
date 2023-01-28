# sh-node-test


usage example:

const { default: ShortloopSDK } = require("shortloop-node-sdk");

--middlewares (example)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.text());
--middlewares (example)


//add close to controllers, if you dont want to capture any middleware chaanges add it before that

        ShortloopSDK.init({
        url: "http://localhost:8080",
        userApplicationName: "order-service-nodejs-2",
        });

        app.use(ShortloopSDK.capture());